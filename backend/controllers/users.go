package controllers

import (
	"net/http"
	"venuezy/database"
	"venuezy/exceptions"
	"venuezy/models"

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
		exceptions.ThrowException(c, http.StatusInternalServerError, err, "invalid request body")
	}

	user := models.User{
		Name:     body.Name,
		Email:    body.Email,
		Password: body.Password,
		Phone:    body.Phone,
		UID:      body.UID,
	}
	if err := database.CreateUser(&user); err != nil {
		exceptions.ThrowException(c, http.StatusInternalServerError, err, "failed to create user")
	}

	c.JSON(http.StatusCreated, gin.H{
		"user": user,
	})

}
