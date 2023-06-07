package initializers

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var UserClient *gorm.DB

func ConnectUserDatabase() {
	log.Println("connecting to user database...")
	dsn := "host=db user=postgres password=postgres dbname=postgres port=5432 sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("error: failed to connect to database, %v", err)
	}
	UserClient = db
	log.Println("successfully connected to user database...")
}
