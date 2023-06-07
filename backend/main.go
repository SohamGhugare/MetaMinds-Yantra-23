package main

import (
	"log"
	"net/http"
	"venuezy/controllers"
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
	// Dummy
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "ping",
		})
	})

	r.POST("/api/v1/users/create-user", controllers.SignupUser)
}

// Setting up API
func main() {
	r := gin.Default()

	setupRoutes(r)

	r.Run()
}
