package initializers

import (
	"log"
	"venuezy/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DatabaseClient *gorm.DB

func ConnectUserDatabase() {
	log.Println("connecting to user database...")
	// dsn := "host=db user=postgres password=postgres dbname=postgres port=5432 sslmode=disable"
	// db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	db, err := gorm.Open(sqlite.Open("data/data.db"), &gorm.Config{})
	if err != nil {
		log.Fatalf("error: failed to connect to database, %v", err)
	}
	DatabaseClient = db
	log.Println("successfully connected to user database.")
}

func SyncSchema() {
	log.Println("syncing schema...")
	var schemas []interface{}
	schemas = append(schemas, &models.Enlister{}, &models.Volunteer{}, &models.Image{}, &models.Venue{}, &models.User{})

	for idx, schema := range schemas {
		err := DatabaseClient.AutoMigrate(schema)
		if err != nil {
			log.Fatalf("error syncing schema %v: %v", idx, err)
		}
	}

	log.Println("successfully synced schema.")

}
