package venues

import (
	"net/http"
	"venuezy/database"
	"venuezy/exceptions"
	"venuezy/models"

	"github.com/gin-gonic/gin"
)

func AddVenue(c *gin.Context) {
	// Binding request body
	var body struct {
		Name        string
		Description string
		Price       int
		Location    string
		Enlister    string
	}

	if err := c.Bind(&body); err != nil {
		exceptions.ThrowException(c, http.StatusBadRequest, err, "invalid request body")
	}

	var enlister models.Enlister

	if err := database.FindEnlisterByEmail(body.Enlister, &enlister); err != nil {
		exceptions.ThrowException(c, http.StatusNotFound, err, "error finding enlister")
	}

	venue := models.Venue{
		Name:        body.Name,
		Description: body.Description,
		Price:       body.Price,
		Location:    body.Location,
		EnlisterID:  enlister.ID,
	}

	if err := database.AddVenue(&venue); err != nil {
		exceptions.ThrowException(c, http.StatusInternalServerError, err, "error adding venue")
	}

	var venues []models.Venue
	database.GetAllVenues(&venues)

	c.JSON(http.StatusOK, gin.H{
		"venues": venues,
	})
}
