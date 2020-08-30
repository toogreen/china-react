import React, {Component} from "react"
import Article from "./Article"
import CaricatureList from "./CaricatureList"
import Ad from "./Ad"
import variables from "./variables"
import newsDb from "./newsDb"
import ArticleList from "./ArticleList"
import CaricaturesDb from "./CaricaturesDb"
//import VariablesList from "./VariablesList"

class Main extends Component {

	// Interval for refresh of data
	interval = null;

	constructor() {
		super()
		this.state = {
			count: 0
		}
	}

	componentDidMount() {
		// Every 60 seconds this fetch a new version of the data
		this.interval = setInterval(this.getData, 60000);

		// Fetch data from getData function lower down
    	this.getData();
	}	

	componentWillUnmount() {
		clearInterval(this.interval);
	}


	getData = () => {

		//fetch("http://localhost:3001/china")
		fetch("https://my-json-server.typicode.com/toogreen/myjsondata/db")
			.then(response => response.json())
			.then(response => {
				
				//const newsDb = response
				const newsDb = response.china
				
				this.setState({ NewsData: newsDb })
				
			})

	}


	render() {

		return(
			<main class="container">
				

				<Ad />


				<div class="grid">



					{ 
					// LEFT COLUMN -->
					}
					<div class="left-column">
	
						<ArticleList 
							db={newsDb}
							col="left"
						/>

					</div>


					{ 
					//MIDDLE COLUMN 
					}
					<div class="middle-column">

						<ArticleList 
							db={newsDb}
							col="right"
						/>

					</div>

					{
						//RIGHT COLUMN 
					}
					<div class="right-column">

						<CaricatureList 
							data={CaricaturesDb}
						/>					

					</div>
				</div>

			</main>
		)
	}
}

export default Main
		