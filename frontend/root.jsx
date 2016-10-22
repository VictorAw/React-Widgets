import React from "react";
import Tabs from "./tabs";
import WeatherClock from "./weather_clock";

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [
				{
					title: "Weather",
					content: <WeatherClock />,
					color: "LightPurple"
				},
				{
					title: "Corgis",
					content: "Dogs and dogs",
					color: "DarkPurple"
				}
			]
		};

		this.render();
	}

	render() {
		console.log("Rendering Root");
		return (
			<Tabs articles={this.state.articles}/>
		);
	}
}

export default Root;
