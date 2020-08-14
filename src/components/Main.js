import React, {Component} from "react"
import Article from "./Article"
import CaricatureList from "./CaricatureList"
import Ad from "./Ad"
import variables from "./variables"
import newsDbLeft from "./newsDbLeft"
import newsDbRight from "./newsDbRight"
import ArticleList from "./ArticleList"
import CaricaturesDb from "./CaricaturesDb"
//import VariablesList from "./VariablesList"

class Main extends Component {

	constructor() {
		super()
		this.state = {
			count: 0
		}
	}

	componentDidMount() {
	//	this.setState({loading: true})
	//	fetch(newsDb)
	//		.then(response => response.json())
	//		.then(response => {
	//			const {memes} = response.data
	//
	//			this.setState({ allMemeImgs: memes })
	//			console.log(memes[0])
	//		})
	}

	render() {


		//document.getElementById("title").innerHTML = variables[0].title
	    //document.getElementById("slogan").innerHTML = variables[0].slogan;
	    //document.getElementById("div4").className = newsDb[0].news2.class


		return(
			<main class="container">
				

				<Ad />


				<div class="grid">



					{ 
					// LEFT COLUMN -->
					}
					<div class="left-column">
	
						<ArticleList 
							db={newsDbLeft}
						/>

					</div>


					{ 
					//MIDDLE COLUMN 
					}
					<div class="middle-column">

						<ArticleList 
							db={newsDbRight}
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
		