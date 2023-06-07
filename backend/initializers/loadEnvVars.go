package initializers

import (
	"log"

	"github.com/joho/godotenv"
)

func LoadEnvVars() {
	if err := godotenv.Load(".env"); err != nil {
		log.Fatal("error: failed to load env file")
	}
}
