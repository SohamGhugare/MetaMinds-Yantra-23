package database

import (
	"venuezy/initializers"
	"venuezy/models"
)

func GetAllVenues(dest *[]models.Venue) error {
	tx := initializers.DatabaseClient.Find(dest)
	return tx.Error
}

func AddVenue(venue *models.Venue) error {
	if err := initializers.DatabaseClient.Create(venue).Error; err != nil {
		return err
	}
	return nil
}
