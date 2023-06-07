package exceptions

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func ThrowException(c *gin.Context, status int, err error, errString string) {
	c.AbortWithStatusJSON(status, gin.H{
		"error": fmt.Sprintf("%v : %v", errString, err.Error()),
	})
}
