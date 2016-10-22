import React from "react";
import ReactDOM from "react-dom";

// other file imports go here
import Root from "./root";

document.addEventListener("DOMContentLoaded", () =>{
	console.log("DOM loaded");
	ReactDOM.render(<Root />, document.getElementById("root"));
});
	
