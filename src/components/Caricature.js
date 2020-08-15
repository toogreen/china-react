import React, {Component} from "react"

function Caricature(props) {

	return(
		<article>
			<a href="#">
				<div>
					<img key={props.key} src={props.img} />
				</div>
			</a>
		</article>
	)

}
export default Caricature