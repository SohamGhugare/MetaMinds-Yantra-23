package models

import (
	"gorm.io/gorm"
)

// User Schema
type User struct {
	gorm.Model
	Name     string `gorm:"not null" validate:"required"`
	Email    string `gorm:"not null,unique" validate:"required,email"`
	Password string `gorm:"not null" validate:"required,min=8"`
	Phone    int    `gorm:"not null" validate:"required"`
	UID      int    `gorm:"not null,unique" validate:"required"`
}
