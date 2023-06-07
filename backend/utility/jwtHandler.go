package utility

import (
	"errors"
	"fmt"
	"os"
	"time"
	"venuezy/database"
	"venuezy/models"

	"github.com/golang-jwt/jwt"
)

// Token Generation
func GenerateJWTToken(sub int, exp time.Duration) (tokenString string, err error) {
	// Generating the token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": sub,
		"exp": time.Now().Add(exp).Unix(),
	})

	// Signing it
	tokenString, err = token.SignedString([]byte(os.Getenv("SECRET")))
	return
}

// Token Parsing
func ParseJWTToken(tokenString string, dest *models.User) (err error) {
	token, _ := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}

		return []byte(os.Getenv("SECRET")), nil
	})

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		// Checking the expiry
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			return errors.New("token expired")
		}

		// Fetching the user
		err := database.FindUserByUID(int(claims["sub"].(float64)), dest)
		if err != nil {
			return errors.New("user not found")
		}

	} else {
		return errors.New("invalid access token")
	}
	return nil
}
