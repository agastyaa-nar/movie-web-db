# 🎬 Web Movie DB

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)  
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](#)  
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)  
[![Fetch API](https://img.shields.io/badge/Fetch-API-1E90FF?style=for-the-badge)](#)  
[![OMDb API](https://img.shields.io/badge/OMDb-API-FF4500?style=for-the-badge)](http://www.omdbapi.com/)  

A simple web-based movie search application built with **HTML, Bootstrap 5, and Vanilla JavaScript (Fetch API)**.  
This project integrates with the **OMDb API** to allow users to search for movies, view movie cards, and see detailed movie information inside a modal box.

---

## 🚀 Summary
Web Movie DB is designed as a lightweight movie database search engine.  
Users can search movies by keyword, browse results in card format, and view detailed information such as genre, director, actors, and plot using a modal dialog.  

The application demonstrates:
- Modern front-end development with **Bootstrap 5**.
- API request handling using **Fetch API** (without jQuery).
- **Error handling** for failed API requests and invalid input.

---

## 🛠️ Tools & Technologies
- **HTML5** – structure and layout.  
- **Bootstrap 5** – responsive design, cards, modal box, and components.  
- **JavaScript (ES6)** – functionality and event handling.  
- **Fetch API** – for consuming data from OMDb API.  
- **OMDb API** – data source for movies (title, year, genre, director, etc.).  

---

## ✨ Features
1. **Search Movie**
   - Users can search by movie title keyword.
   - Real-time fetch to OMDb API with error handling.

2. **Movie Cards Display**
   - Shows movie poster, title, year of release.
   - Responsive grid system using Bootstrap.

3. **Movie Details Modal**
   - Clicking **Show Details** opens a Bootstrap modal.
   - Displays extended info:  
     - Poster  
     - Title & Year  
     - Genre  
     - Director  
     - Production  
     - Actors  
     - Rated (content rating)  
     - Language  
     - Plot  

4. **Error Handling**
   - Alerts user when:  
     - The keyword is empty.  
     - Movie not found.  
     - API connection error.  

5. **Responsive Layout**
   - Mobile-friendly with Bootstrap grid system.

---

## 📸 Preview


---

## ⚡ How to Run
1. Clone or download this repository.  
   ```bash
   git clone https://github.com/username/web-movie-db.git

2. Open the project folder and edit script.js if needed (replace API key).
3. Open index.html directly in your browser.
4. Search for any movie title and explore the details!

---

## 🔑 API Key
This project uses [OMDb API](https://www.omdbapi.com/).  
Replace the demo API key in `script.js` if you have your own:  

```js
const API_KEY = "your_api_key_here";


