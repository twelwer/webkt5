class WeatherWidget extends HTMLElement {
    constructor() {
        super();

        const fakeWeatherData = {
            city: 'Moscow',
            temperature: 25,
            conditions: 'Sunny',
        };

        this.render(fakeWeatherData);
    }
    render(data) {
        this.innerHTML = `
            <h2>${data.city}</h2>
            <div class="temperature">${data.temperature}°C</div>
            <div class="weather-widget-conditions">${data.conditions}</div>
        `;
    }
}
customElements.define('weather-widget', WeatherWidget);