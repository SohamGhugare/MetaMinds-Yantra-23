package controllers

import (
	"net/http"
	"venuezy/database"
	"venuezy/exceptions"
	"venuezy/models"
	"venuezy/utility"

	"github.com/gin-gonic/gin"
)

func SignupUser(c *gin.Context) {
	// Binding request body
	var body struct {
		Name     string
		Email    string
		Password string
		Phone    int
		UID      int
	}

	if err := c.Bind(&body); err != nil {
		exceptions.ThrowException(c, http.StatusBadRequest, err, "invalid request body")
	}

	hash, err := utility.GenerateHash(body.Password)

	if err != nil {
		exceptions.ThrowException(c, http.StatusInternalServerError, err, "unable to hash password")
	}

	user := models.User{
		Name:     body.Name,
		Email:    body.Email,
		Password: hash,
		Phone:    body.Phone,
		UID:      body.UID,
	}
	if err := database.CreateUser(&user); err != nil {
		exceptions.ThrowException(c, http.StatusInternalServerError, err, "failed to create user")
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"user": user,
	})

}
