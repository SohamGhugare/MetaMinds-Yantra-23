package exceptions

import "github.com/gin-gonic/gin"

func ThrowException(c *gin.Context, status int, err error, errString string) {
	c.AbortWithStatusJSON(status, gin.H{
		"error": gin.H{
			errString: err.Error(),
		},
	})
}
