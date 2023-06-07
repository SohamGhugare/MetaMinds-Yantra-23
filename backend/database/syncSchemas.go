package database

import (
	"log"
	"venuezy/initializers"
	"venuezy/models"
)

func SyncSchema() {
	log.Println("syncing schema...")
	var schemas []interface{}
	schemas = append(schemas, &models.Enlister{}, &models.Volunteer{}, &models.Image{}, &models.Venue{}, &models.User{}, &models.VenueTime{}, &models.EventTime{}, &models.Event{})

	for idx, schema := range schemas {
		err := initializers.DatabaseClient.AutoMigrate(schema)
		if err != nil {
			log.Fatalf("error syncing schema %v: %v", idx, err)
		}
	}

	log.Println("successfully synced schema.")

}
