package models

import (
	"time"

	"gorm.io/gorm"
)

type Venue struct {
	gorm.Model
	Name        string
	Description string
	Price       int
	Images      []Image
	Location    string
	Timings     Time
	EnlisterID  uint
}

type Image struct {
	gorm.Model
	VenueID uint
	URL     string
}

// Time model
type Time struct {
	VenueID uint
	Start   time.Time
	End     time.Time
}
