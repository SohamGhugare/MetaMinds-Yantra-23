package controllers

import (
	"errors"
	"net/http"
	"time"
	"venuezy/exceptions"
	"venuezy/initializers"
	"venuezy/models"
	"venuezy/utility"

	"github.com/gin-gonic/gin"
)

func LoginUser(c *gin.Context) {
	var body struct {
		UID      int
		Password string
	}

	if err := c.Bind(&body); err != nil {
		exceptions.ThrowException(c, http.StatusBadRequest, err, "invalid request body")
		return
	}

	var user models.User
	initializers.DatabaseClient.First(&user, "uid = ?", body.UID)
	if user.ID == 0 {
		exceptions.ThrowException(c, http.StatusBadRequest, errors.New("user not found"), "invalid request body")
		return
	}
	if err := utility.VerifyHash(user.Password, body.Password); err != nil {
		exceptions.ThrowException(c, http.StatusBadRequest, errors.New("invalid password"), "failed")
		return
	}
	token, err := utility.GenerateJWTToken(user.UID, time.Hour*24*30)
	if err != nil {
		exceptions.ThrowException(c, http.StatusBadRequest, err, "failed to login")
		return
	}
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie(
		"token",
		token,
		3600*24*30,
		"",
		"",
		false,
		true,
	)

	c.JSON(http.StatusOK, gin.H{
		"message": "Authorized",
	})
}
