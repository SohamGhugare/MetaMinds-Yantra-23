package models

import "gorm.io/gorm"

type Volunteer struct {
	gorm.Model
	Name     string
	Email    string
	Password string
	Phone    int
	IDProof  string
}
