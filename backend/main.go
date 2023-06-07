package main

import "github.com/gin-gonic/gin"

// Calling initializers
func init() {

}

// Registering routes
func setupRoutes(r *gin.Engine) {

}

// Setting up API
func main() {
	r := gin.Default()

	setupRoutes(r)

	r.Run()
}
