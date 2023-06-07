package controllers

import (
	"errors"
	"net/http"
	"venuezy/exceptions"
	"venuezy/initializers"
	"venuezy/models"

	"github.com/gin-gonic/gin"
)

func LoginUser(c *gin.Context) {
	var body struct {
		Email    string
		Password string
	}

	if err := c.Bind(&body); err != nil {
		exceptions.ThrowException(c, http.StatusBadRequest, err, "invalid request body")
		return
	}

	var user models.User
	initializers.DatabaseClient.First(&user, "email = ?", body.Email)
	if user.ID == 0 {
		exceptions.ThrowException(c, http.StatusBadRequest, errors.New("user not found"), "invalid request body")
		return
	}

}
