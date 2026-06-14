# Rojika Rai — Cybersecurity Portfolio

## File Structure
```
rojika-vs/
├── index.html          ← Main HTML page
├── style.css           ← All styles
├── script.js           ← Animations & smooth scroll
├── Dockerfile          ← Docker image config
├── docker-compose.yml  ← Docker Compose config
└── README.md           ← This file
```

---

## Option 1 — Run with Docker Compose (Recommended)

### Requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

### Steps
```bash
# 1. Open terminal in the project folder
cd rojika-vs

# 2. Build and start the container
docker compose up --build

# 3. Open in browser
http://localhost:8080
```

To stop:
```bash
docker compose down
```

---

## Option 2 — Run with Docker only (no Compose)
```bash
# Build the image
docker build -t rojika-portfolio .

# Run the container
docker run -d -p 8080:80 --name rojika-portfolio rojika-portfolio

# Open in browser
http://localhost:8080
```

---

## Option 3 — Run in VS Code (no Docker needed)
1. Install the **Live Server** extension (by Ritwick Dey)
2. Right-click `index.html` → **Open with Live Server**
3. Opens at → http://127.0.0.1:5500

---

## Option 4 — Open directly in browser
Double-click `index.html` — works instantly, no setup needed.
