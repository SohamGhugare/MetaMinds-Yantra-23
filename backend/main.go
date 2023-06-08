package main

import (
	"log"
	"net/http"
	enControllers "venuezy/controllers/enlisters"
	userControllers "venuezy/controllers/users"
	venueControllers "venuezy/controllers/venues"
	volControllers "venuezy/controllers/volunteers"

	"venuezy/database"
	"venuezy/initializers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// Calling initializers
func init() {

	log.SetPrefix("[VENUEZY] ")

	initializers.LoadEnvVars()
	initializers.ConnectUserDatabase()
	database.SyncSchema()

}

// Registering routes
func setupRoutes(r *gin.Engine) {
	// Dummy
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "ping",
		})
	})

	r.POST("/api/v1/users/create-user", userControllers.SignupUser)
	r.POST("/api/v1/users/login", userControllers.LoginUser)

	r.POST("/api/v1/enlisters/create-enlister", enControllers.SignupEnlister)
	r.POST("/api/v1/enlisters/login", enControllers.LoginEnlister)

	r.GET("/api/v1/venues/all", venueControllers.FetchAllVenues)

	r.POST("/api/v1/volunteers/add-event", volControllers.AddEvent)
}

// Setting up API
func main() {
	r := gin.Default()

	setupRoutes(r)

	// venue := models.Venue{
	// 	Name:        "Lawn",
	// 	Description: "50x50 metres lawn",
	// 	Price:       3500,
	// 	Location:    "Balewadi High Street, Pune",
	// 	EnlisterID:  1,
	// 	Timings: models.VenueTime{
	// 		Start: time.Now(),
	// 		End:   time.Now().Add(time.Hour * 12),
	// 	},
	// }
	// initializers.DatabaseClient.Create(&venue)
	// log.Println("created lawn")

	// hash, _ := utility.GenerateHash("test123")
	// vol := models.Volunteer{
	// 	Name:     "DummyVolunteer",
	// 	Email:    "vol@test.com",
	// 	Password: hash,
	// 	Phone:    1234567890,
	// 	IDProof:  "testlink.com",
	// }
	// initializers.DatabaseClient.Create(&vol)

	// event := models.Event{
	// 	Title:       "TestEvent",
	// 	Description: "Lorem Ipsum",
	// 	VenueID:     1,
	// }
	// initializers.DatabaseClient.Create(&event)

	r.Use(cors.Default())
	r.Run()
}
