package models

import (
	"gorm.io/gorm"
)

type Venue struct {
	gorm.Model
	Name        string
	Description string
	Price       int
	Images      []Image
	Location    string
	Timings     VenueTime
	EnlisterID  uint
}
