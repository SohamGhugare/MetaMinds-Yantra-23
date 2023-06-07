package database

import (
	"errors"
	"strconv"
	"venuezy/initializers"
	"venuezy/models"

	"github.com/go-playground/validator/v10"
)

func CreateEnlister(enlister *models.Enlister) error {
	// Perform validation
	validate := validator.New()
	if err := validate.Struct(enlister); err != nil {
		return err
	}
	if len(strconv.Itoa(enlister.Phone)) != 10 {
		return errors.New("invalid phone number")
	}
	var temp models.Enlister
	if err := initializers.DatabaseClient.Where("email = ?", enlister.Email).First(&temp).Error; err == nil {
		return errors.New("user already exists")
	}
	// Create the user record in the database
	if err := initializers.DatabaseClient.Create(enlister).Error; err != nil {
		return err
	}

	return nil
}

func FindEnlisterByEmail(email string, dest *models.Enlister) error {
	initializers.DatabaseClient.First(dest, "email = ?", email)
	if dest.ID == 0 {
		return errors.New("email not found")
	}
	return nil
}
