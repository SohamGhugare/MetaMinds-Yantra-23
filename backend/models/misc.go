package models

import (
	"time"
)

type Image struct {
	ID      uint `gorm:"primaryKey"`
	VenueID uint
	URL     string
}

// Time model
type VenueTime struct {
	ID      uint `gorm:"primaryKey"`
	VenueID uint
	Start   time.Time
	End     time.Time
}

type EventTime struct {
	ID      uint `gorm:"primaryKey"`
	EventID uint
	Start   time.Time
	End     time.Time
}
