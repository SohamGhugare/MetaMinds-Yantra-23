package models

import (
	"gorm.io/gorm"
)

// Event model
type Event struct {
	gorm.Model
	Title       string
	Description string

	VenueID    uint
	Venue      Venue
	Volunteers []Volunteer `gorm:"many2many:event_volunteers;"`
	Timings    EventTime
}
