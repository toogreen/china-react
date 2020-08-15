import React, {Component} from "react"

function Caricature(props) {

	return(
		<article>
			<img key={props.key} src={props.img} />
		</article>
	)

}
export default Caricature