package main

import (
	"log"
	"venuezy/initializers"

	"github.com/gin-gonic/gin"
)

// Calling initializers
func init() {

	log.SetPrefix("[VENUEZY] ")

	initializers.LoadEnvVars()

}

// Registering routes
func setupRoutes(r *gin.Engine) {

}

// Setting up API
func main() {
	r := gin.Default()

	setupRoutes(r)

	r.Run()
}
