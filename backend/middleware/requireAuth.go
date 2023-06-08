package middlewares

import (
	"net/http"
	"venuezy/exceptions"
	"venuezy/models"
	"venuezy/utility"

	"github.com/gin-gonic/gin"
)

func RequireAuth(c *gin.Context) {
	tokenString, err := c.Cookie("token")
	if err != nil {
		exceptions.ThrowException(c, http.StatusUnauthorized, err, "unauthorised")
	}

	// Parsing and validating token
	var user models.User
	err = utility.ParseJWTToken(tokenString, &user)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
			"error": err,
		})
	}

	c.Set("user", user)
	c.Next()
}
