package database

import (
	"venuezy/initializers"
	"venuezy/models"
)

func GetAllVenues(dest *[]models.Venue) error {
	tx := initializers.DatabaseClient.Find(dest)
	return tx.Error
}
