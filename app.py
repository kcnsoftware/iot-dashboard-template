from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    """Renders the main dashboard page."""
    return render_template('index.html')

@app.route('/api/stats')
def get_stats():
    """
    Simulates real-time sensor data.
    In a real scenario, this data would come from an ESP32 or Arduino.
    """
    return jsonify({
        "temperature": f"{random.randint(22, 28)}°C",
        "humidity": f"{random.randint(40, 60)}%",
        "status": "Active",
        "battery": f"{random.randint(80, 100)}%"
    })

if __name__ == '__main__':
    # Running the Flask app in debug mode for development
    app.run(debug=True)