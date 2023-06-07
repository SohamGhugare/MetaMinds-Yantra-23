package main

import (
	"log"
	"net/http"
	"venuezy/initializers"

	"github.com/gin-gonic/gin"
)

// Calling initializers
func init() {

	log.SetPrefix("[VENUEZY] ")

	initializers.LoadEnvVars()
	initializers.ConnectUserDatabase()
	initializers.SyncSchema()

}

// Registering routes
func setupRoutes(r *gin.Engine) {
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "ping",
		})
	})
}

// Setting up API
func main() {
	r := gin.Default()

	setupRoutes(r)

	r.Run()
}
