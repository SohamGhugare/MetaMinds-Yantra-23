package models

import (
	"gorm.io/gorm"
)

// Event model
type Event struct {
	gorm.Model
	Title       string
	Description string

	Venue      Venue
	Volunteers []Volunteer
	Timings    Time
}
