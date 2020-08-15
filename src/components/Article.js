import React, {Component} from "react"


function Article(props) {

	return(
		<article>
				<a id="" href="" target="_blank">
					<div id="" className={props.classtype}>
						<img id="" src={props.img} />
		 				<h1>{props.title}</h1>
						<p id="">{props.desc}</p>			
					</div>
				</a>
		</article>

	)

}
export default Article