import React from "react";

class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 0
		};
		this.render();
	}
	
	render() {
		console.log("Rendering Tab");
		return (
			<section>
				<ul className="tab-titles">
				{ this.props.articles.map( (article, index) =>
					<li key={ article.title } onClick={ () => this.onTitleClick(index) }>
						<h1 className={article.color}>{article.title}</h1>
					</li>
				)}
				</ul>
				<article className="widget">
				{ this.props.articles[this.state.selected].content }
				</article>
			</section>
		);
	}

	onTitleClick(selected) {
		this.setState({selected: selected});
		let i = document.getElementsByTagName("body")[0];
		console.log(i);
		i.className = "";
		i.classList.add(this.props.articles[selected].color);
	}
}

export default Tabs;
