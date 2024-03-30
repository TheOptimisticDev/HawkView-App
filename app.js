document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    map.on('click', async (e) => {
        const { lat, lng } = e.latlng;
        const weatherData = await fetchWeather(lat, lng);
        console.log(weatherData);
    });

    async function fetchWeather(latitude, longitude) {
        const response = await fetch('/location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ latitude, longitude }),
        });
        return response.json();
    }
});
