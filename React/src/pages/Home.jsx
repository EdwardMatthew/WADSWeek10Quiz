import React from "react";

export default class Home extends React.Component { state = {
		loading: true
	};

	async componentDidMount() {
		const url = 'http://localhost:8000/heroes/';
		const options = {
		 	headers: {
				Accept: "application/json",
			},
		};
		const res = await fetch(url, options);
		const data = await res.json();
		this.setState({ heroes: data, loading: false });
		console.log(this.state.heroes)
	} 
	
	render() {
		return (
			<div>
			{this.state.loading || !this.state.heroes ? (
				<div>loading....</div>
			) : (
				<div className="herodata">
					{this.state.heroes.map((data, key) => 
						<div key={key}>
							<h2>Name: {data.name} <br></br> Alias: {data.alias}</h2>
						</div>
					)}
				</div>
			)}
		</div>
		);
	}
} 
