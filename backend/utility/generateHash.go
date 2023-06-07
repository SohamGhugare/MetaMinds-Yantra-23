package utility

import "golang.org/x/crypto/bcrypt"

// Hashing the password using the bcrypt library
func GenerateHash(password string) (string, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), 10)
	if err != nil {
		return "error", err
	}
	return string(hash), nil
}

// Verifying hash
func VerifyHash(hash, password string) error {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err
}
