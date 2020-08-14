import React, {Component} from "react"
//import Article from "./Article"
import Ad from "./Ad"
import newsDb from "./newsDb"

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


		document.getElementById("title").innerHTML = newsDb[0].title
	    //document.getElementById("slogan").innerHTML = newsDb[0].slogan;
	    //document.getElementById("div4").className = newsDb[0].news2.class

		return(
			<main class="container">
				

				<Ad />


				<div class="grid">

					{ 
					// LEFT COLUMN -->
					}
					<div class="left-column">

						{
							//<Article

							// />
						}
					
					</div>


					{ 
					//MIDDLE COLUMN 
					}
					<div class="middle-column">


						<article>
							<a id="url4" target="_blank">
								<div id="div4">
									<h4>Sports</h4>
									<img id="img4" src="img/img4.jpg" />
									<h1 id="title4"></h1>
									<p id="desc4"></p>
								</div>
							</a>					
						</article>


						<article>
							<a id="url5" href="" target="_blank">
								<div id="div5">
									<img id="img5" src="img/img5.jpg" />
									<h1 id="title5"></h1>
									<p id="desc5"></p>
								</div>
							</a>					
						</article>

					</div>

					{
						//RIGHT COLUMN 
					}
					<div class="right-column">


						<article>
							<a href="#">
								<div>
									<h4>Caricatures</h4>
									<img src="img/caricature.jpg" />
									<h1></h1>					
								</div>
							</a>
						</article>

						
						<article>
							<a href="#">
								<div>
									<img src="img/caricature2.jpg" />
									<h1></h1>
								</div>
							</a>					
						</article>

						
						<article>
							<a href="#">
			                        <div>
			                                <img src="img/caricature3.jpg" />
			                                <h1></h1>
			                        </div>
			                </a>
						</article>
				



					</div>
				</div>
			</main>
		)
	}
}

export default Main
		