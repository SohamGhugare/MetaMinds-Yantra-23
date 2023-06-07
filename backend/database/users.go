package database

import (
	"errors"
	"venuezy/initializers"
	"venuezy/models"

	"github.com/go-playground/validator/v10"
)

func CreateUser(user *models.User) error {
	// Perform validation
	validate := validator.New()
	if err := validate.Struct(user); err != nil {
		return err
	}
	var temp models.User
	if err := initializers.DatabaseClient.Where("uid = ?", user.UID).First(&temp).Error; err == nil {
		return errors.New("user already exists")
	}
	// Create the user record in the database
	if err := initializers.DatabaseClient.Create(user).Error; err != nil {
		return err
	}

	return nil
}
