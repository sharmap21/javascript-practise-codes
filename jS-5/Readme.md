# 🏃‍♂️🚴‍♀️ Fit Trackr – Outdoor Fitness Tracking App

**Fit Trackr** is a sleek, modern **fitness tracking app** for outdoor workouts like **Running** and **Cycling**. It allows users to log workouts, track metrics such as **distance**, **duration**, **cadence**, and **elevation gain**, and view them directly on an interactive world map using **Leaflet.js** and the **Geolocation API**. All data is persisted in the browser using **localStorage**.

> ⚠️ This project is frontend-only and built for educational purposes.

---

## 🚀 Live Features

- 📍 Real-time location using **Geolocation API**
- 🗺️ Interactive map using **Leaflet.js**
- ✏️ Log and categorize **Running** or **Cycling** workouts
- 🧮 Auto-calculated metrics:
  - Running: **Pace** (`min/km`)
  - Cycling: **Speed** (`km/h`)
- 📝 Workout descriptions with date & type
- 💾 Save data using **localStorage**
- ♻️ Single-click **Reset** button to clear all workouts
- 🔄 Auto re-load of saved workouts with interactive map markers

---

## 🧰 Technologies Used

- **HTML5**, **CSS3**
- **JavaScript (ES6+)**
- [Leaflet.js](https://leafletjs.com/) for map rendering
- **Geolocation API** to get user location
- **localStorage API** for data persistence

---

## 🧠 Core Functionality

### 📍 Location Handling

Uses **Geolocation API**:
```javascript
navigator.geolocation.getCurrentPosition(this._loadMap.bind(this));
```

### 🗺️ Map Initialization
Powered by Leaflet.js:
```
this.#map = L.map('map').setView(coords, this.#mapZoomlevel);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.#map);
```

### 🏃 Workout Data Classes
Workouts are organized using ES6 Classes:

```
class Running extends Workout {
  calcPace() { this.pace = this.duration / this.distance; }
}
```

### 📝 Form Handling & UI Updates
- Shows dynamic fields depending on workout type.
- Creates and inserts workout cards in the sidebar.
-  Adds corresponding map markers with custom popup styling.

### 💾 Local Storage Persistence
Save & retrieve workout data:

```
localStorage.setItem('workouts', JSON.stringify(this.#workouts));
```

---
## 🔄 Future Improvements

Add indoor workout types (e.g., treadmill, rowing)
- Implement edit/delete options for workouts
- Add user profiles & authentication
- Sync with online fitness APIs (e.g., Strava, Fitbit)
- Improve mobile responsiveness

## 📦 Installation
> No backend needed. To run locally:
1. Clone the repository
2. Open index.html in your browser
3. Grant location access when prompted
4. Click on the map to log workouts

> Live Demo: https://guileless-gecko-f0c231.netlify.app/
## 📜 License
This project is licensed for personal learning and frontend development practice.
