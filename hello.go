package hello

import (
    "net/http"
	"fmt"
)

func init() {
    http.HandleFunc("/",handler)
	}
	
func handler(w http.ResponseWriter, r*http.Request) {
    fmt.Fprint(w,"Hello to my world")
}
	
	