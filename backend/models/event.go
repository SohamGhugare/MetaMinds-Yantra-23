package models

import (
	"time"

	"gorm.io/gorm"
)

// Event model
type Event struct {
	gorm.Model
	Title       string
	Description string
	Venue       Venue
	Volunteers  []Volunteer
	Timings     Time
}

// Time model
type Time struct {
	Start time.Time
	End   time.Time
}
