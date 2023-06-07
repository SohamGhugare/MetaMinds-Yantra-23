package volunteers

import (
	"net/http"
	"venuezy/exceptions"
	"venuezy/initializers"
	"venuezy/models"

	"github.com/gin-gonic/gin"
)

func AddEvent(c *gin.Context) {
	var body struct {
		EventID uint
	}

	if err := c.Bind(&body); err != nil {
		exceptions.ThrowException(c, http.StatusBadRequest, err, "invalid request body")
	}

	var vol models.Volunteer
	initializers.DatabaseClient.First(&vol, 1)

	var event models.Event
	initializers.DatabaseClient.First(&event, 1)

	event.Volunteers = append(event.Volunteers, vol)
	initializers.DatabaseClient.Save(&event)

	initializers.DatabaseClient.First(&event, 1)

	c.JSON(http.StatusOK, gin.H{
		"message": "successfully added",
		"event":   event,
	})

}
