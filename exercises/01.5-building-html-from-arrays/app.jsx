import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [];

const content = (
	<ul className="nav">
		<li className="nav-item">
			<a className="nav-link" href="#">
				Link to google.com
			</a>
		</li>
		<li className="nav-item">
			<a className="nav-link" href="#">
				Link to facebook.com
			</a>
		</li>
		<li className="nav-item">
			<a className="nav-link" href="#">
				Link to amazon.com
			</a>
		</li>
	</ul>
);

ReactDOM.render(content, document.querySelector("#myDiv"));
