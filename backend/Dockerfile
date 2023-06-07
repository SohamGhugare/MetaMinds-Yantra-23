FROM golang:alpine

RUN mkdir -p /backend
WORKDIR /backend

# Copying the manifests
COPY go.mod go.sum ./

# Downloading dependencies
RUN go mod download

# Copying all the files
COPY . .

# Enable CGO
ENV CGO_ENABLED=1

# Install the required build dependencies
RUN apk add build-base

# Building the application
RUN go build -o main .

# Exposing the port
EXPOSE 8081

# Entry point
CMD [ "./main" ]