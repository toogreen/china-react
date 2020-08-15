import React, {Component} from "react"

//const Article = (props) => (
//  newsDb.map(item => (
// 	<article>
// 		<a id={item.} href={item.url} target="_blank">
// 			<div id={item.div}>
// 				<img id={item.img} src={item.imgurl} />
// 				<h1 id={item.title}></h1>
// 				<p id={item.desc}></p>			
// 			</div>
// 		</a>
// 	</article>
//   ))  
// );

function Article(props) {


	    //myObj = JSON.parse(newsDb);

	    //document.getElementById("title").innerHTML = newsDb["title"];
	    //document.getElementById("slogan").innerHTML = newsDb["slogan"];

	    // added this loop so that I don't have to repeat the same code many times to fetch the data (ex. Title1, Title2, etc)
	    //var i;
	    //var count = Object.keys(myObj).length - 1; // This counts how many items are in the JSON object, and removes 1 since we have 2 extra items (page title+slogan) but need 1 extra since loop count starts at 1

//	    for (i = 1; i < count; i++) {
//	        const news = "news" + i; 
//	        const img = "img" + i;
//	        const title = "title" + i;
//	        const desc = "desc" + i;
//	        const url = "url" + i;
//	        const div = "div" + i;
	        //document.getElementById(img).src = myObj[news].img;
	        //document.getElementById(title).innerHTML = myObj[news].title;
	        //document.getElementById(desc).innerHTML = myObj[news].desc;
	        //document.getElementById(url).href = myObj[news].url;
	        //document.getElementById(div).className = myObj[news].class;

//	        alert(news)

//	    } // End of loop

	    // Below line displays how many items are in the JSON object in the place where the slogan is (for development purposes only)
	    //document.getElementById("slogan").innerHTML = count;

//	xmlhttp.open("GET", newsDb, true);
//	xmlhttp.send();

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