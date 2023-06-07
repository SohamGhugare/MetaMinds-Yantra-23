package initializers

import (
	"log"

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
