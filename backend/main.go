package main

import (
    "encoding/json"
    "log"
    "net/http"
    "os"
    "regexp"
)

type ContactRequest struct {
    Name    string `json:"name"`
    Email   string `json:"email"`
    Message string `json:"message"`
}

type Response struct {
    Message string `json:"message"`
}

func sanitize(s string) string {
    re := regexp.MustCompile(`<[^>]*>`)
    return re.ReplaceAllString(s, "")
}

func contactHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method == http.MethodOptions {
        w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
        w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
        w.WriteHeader(http.StatusNoContent)
        return
    }

    if r.Method != http.MethodPost {
        w.WriteHeader(http.StatusMethodNotAllowed)
        return
    }

    var req ContactRequest
    decoder := json.NewDecoder(r.Body)
    if err := decoder.Decode(&req); err != nil {
        w.WriteHeader(http.StatusBadRequest)
        json.NewEncoder(w).Encode(Response{Message: "invalid json"})
        return
    }

    req.Name = sanitize(req.Name)
    req.Email = sanitize(req.Email)
    req.Message = sanitize(req.Message)

    if req.Name == "" || req.Email == "" || req.Message == "" {
        w.WriteHeader(http.StatusBadRequest)
        json.NewEncoder(w).Encode(Response{Message: "missing fields"})
        return
    }

    log.Printf("contact from %s <%s>: %s\n", req.Name, req.Email, req.Message)

    w.Header().Set("Content-Type", "application/json")
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
    json.NewEncoder(w).Encode(Response{Message: "Thanks — message received."})
}

func main() {
    http.HandleFunc("/api/contact", contactHandler)

    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }

    log.Printf("Server starting on :%s", port)
    if err := http.ListenAndServe(":"+port, nil); err != nil {
        log.Fatal(err)
    }
}
