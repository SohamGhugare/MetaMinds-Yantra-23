package models

import "gorm.io/gorm"

type Enlister struct {
	gorm.Model
	Name     string
	Email    string
	Password string
	Phone    int
	Venues   []Venue
}
