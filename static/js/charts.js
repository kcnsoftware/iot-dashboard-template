// 1. Core Variables and Chart Instance
const dateElement = document.getElementById('current-date');
let liveChart;

// 2. Initializing the Dashboard on Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Set the current date in US English format
    dateElement.innerText = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Initialize the chart and start the data fetch loop
    initChart();
    fetchData();
    setInterval(fetchData, 3000); // Fetch new data every 3 seconds
});

// 3. Fetching Data from the Backend API
async function fetchData() {
    try {
        const response = await fetch('/api/stats');
        const data = await response.json();

        // Update UI Card elements with live data
        document.getElementById('temp').innerText = data.temperature;
        document.getElementById('hum').innerText = data.humidity;
        document.getElementById('batt').innerText = data.battery;
        
        // Map backend status to the UI display
        document.getElementById('status').innerText = data.status;

        // Get the current time for the chart X-axis (HH:MM:SS format)
        const time = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: false 
        });

        // Push the new temperature value into the chart
        addChartData(time, parseInt(data.temperature));
    } catch (error) {
        console.error("Data fetch failed:", error);
        document.getElementById('status').innerText = "Error";
    }
}

// 4. Chart Configuration and Initialization
function initChart() {
    const ctx = document.getElementById('liveChart').getContext('2d');
    liveChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [], // Time labels will be added here
            datasets: [{
                label: 'Temperature (°C)',
                data: [], // Sensor values will be added here
                borderColor: '#0984e3',
                backgroundColor: 'rgba(9, 132, 227, 0.05)',
                borderWidth: 3,
                tension: 0.4, // Smoothens the line
                fill: true,
                pointRadius: 0 // Hides the points for a cleaner "modern" look
            }]
        },
        options: {
            responsive: true,
            plugins: { 
                legend: { display: false } // Hide legend for minimalist design
            },
            scales: {
                x: { grid: { display: false } }, // Remove vertical grid lines
                y: { 
                    grid: { borderDash: [5, 5] }, // Dashed lines for horizontal grid
                    beginAtZero: false 
                }
            }
        }
    });
}

// 5. Updating the Chart with Real-time Data
function addChartData(label, value) {
    // Keep only the last 15 data points for performance and readability
    if (liveChart.data.labels.length > 15) {
        liveChart.data.labels.shift();
        liveChart.data.datasets[0].data.shift();
    }
    
    // Append the new label and data point
    liveChart.data.labels.push(label);
    liveChart.data.datasets[0].data.push(value);
    
    // Smoothly update the chart display
    liveChart.update();
}