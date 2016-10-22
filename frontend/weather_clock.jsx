import React from "react";

class WeatherClock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: 0,
			lon: 0,
			weather: ["", ""]
		}
	
		this.fetchLocation();
	}

	fetchLocation() {
		navigator.geolocation.getCurrentPosition((data) => { 
			console.log(data);
			console.log(data.coords);
			console.log(data.coords.latitude);
			console.log(data.coords.longitude);
			let lat = data.coords.latitude;
			let lon = data.coords.longitude;
			this.fetchWeather(lat, lon);
		}, (posError) => {
			console.log("Location error");
			console.log(posError);
		});
	}

	fetchWeather(lat, lon) {
		let w = [];
		$.ajax({
			type: "GET",
			dataType: "json",
			url: `http://api.openweathermap.org/data/2.5/weather?lat=${Math.floor(lat)}&lon=${Math.floor(lon)}`,
			data: { units: "metric", appid: "f03bf4db8f89e15a21e5750a494be5e0" },
			success: (weather) => {
				w.push(weather.main.temp);
				w.push(weather.weather[0].description);
				console.log(weather);
				this.setState({lat: lat, lon: lon, weather: w}, () => console.log(w));
			}
		});
	}	

	render() {
		let weatherArray = this.state.weather;
		console.log(weatherArray);
		return (
			<ul>
				<li className="current-temp"><h2>{this.state.weather[0]}</h2><sup>{"\u00B0"}</sup>C</li>
				<li><h3>{this.state.weather[1]}</h3></li>
			</ul>
		)

	}
}

export default WeatherClock;
