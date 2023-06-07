package venues

import (
	"net/http"
	"venuezy/database"
	"venuezy/exceptions"
	"venuezy/models"

	"github.com/gin-gonic/gin"
)

func FetchAllVenues(c *gin.Context) {
	var venues []models.Venue

	if err := database.GetAllVenues(&venues); err != nil {
		exceptions.ThrowException(c, http.StatusBadRequest, err, "failed to load venues")
	}

	c.JSON(http.StatusOK, gin.H{
		"venues": venues,
	})

}
