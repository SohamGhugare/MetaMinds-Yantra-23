package models

import "gorm.io/gorm"

// User Schema
type User struct {
	gorm.Model
	Name           string
	Email          string
	Password       string
	Phone          string
	IDProof        string
	PreviousVenues []string
}
