# 🚀 Modern IoT Dashboard Template

A clean, minimalist, and high-performance web dashboard designed for real-time monitoring of embedded systems (ESP32, Arduino, Raspberry Pi, etc.). 

This project demonstrates a full-stack approach to IoT, combining a **Python (Flask)** backend with a dynamic **JavaScript (Chart.js)** frontend to visualize sensor data seamlessly.

## ✨ Key Features

- **Real-time Data Visualization:** Smooth, live-updating line charts powered by Chart.js.
- **Modern & Minimalist UI:** A "Clean-Tech" aesthetic using the Inter font family, soft shadows, and a professional sidebar layout.
- **Asynchronous Updates:** Utilizes the Fetch API to update sensor stats every 3 seconds without refreshing the page.
- **Responsive Design:** Optimized for various screen sizes, from desktop monitors to tablets.
- **Developer Friendly:** Fully commented code in English, following global best practices.

## 🛠️ Tech Stack

- **Backend:** Python 3.x, Flask
- **Frontend:** HTML5, CSS3 (Modern UI patterns), JavaScript (ES6+)
- **Charts:** Chart.js 4.x
- **Design Tools:** Adobe Illustrator (used for custom iconography and layout planning)

## 📂 Project Structure

```text
iot-dashboard-template/
├── app.py              # Flask server and simulated API
├── templates/
│   └── index.html      # Main dashboard layout and logic
├── static/
│   ├── css/            # Custom styling and layout
│   └── js/             # Real-time chart and fetch logic
└── README.md           # Project documentation
```
## 🏁 Quick Start
- Follow these steps to get the dashboard up and running on your local machine.

1. Clone the Repository
```bash
git clone https://github.com/kcnsoftware/iot-dashboard-template.git
cd iot-dashboard-template
```
2. Install Flask
   This project requires Flask to run the backend:
```bash
pip install Flask
```
3. Start the Application
   Launch the development server:
```bash
python app.py
```
4. View the Dashboard
   Once the server is running, open your web browser and navigate to:
- [http://127.0.0.1:5000](http://127.0.0.1:5000)

--- 
> Developed with ❤️ by **Kcn**
