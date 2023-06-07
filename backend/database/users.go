package database

import (
	"errors"
	"strconv"
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
	if len(strconv.Itoa(user.Phone)) != 10 {
		return errors.New("invalid phone number")
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

func FindUserByUID(uid int, dest *models.User) error {
	initializers.DatabaseClient.First(dest, uid)
	if dest.ID == 0 {
		return errors.New("uid not found")
	}
	return nil
}
