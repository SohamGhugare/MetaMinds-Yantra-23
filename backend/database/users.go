package database

import (
	"venuezy/initializers"
	"venuezy/models"
)

func CreateUser(user *models.User) error {

	tx := initializers.DatabaseClient.Create(user)
	return tx.Error
}
