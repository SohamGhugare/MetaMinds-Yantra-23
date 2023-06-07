package models

import "gorm.io/gorm"

type Venue struct {
	gorm.Model
	Name        string
	Description string
	Price       int
	Images      []string
	Location    string
	OpenTimings string
}
