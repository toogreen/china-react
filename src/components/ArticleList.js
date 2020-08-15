import React from 'react';
import Article from "./Article"
   
const ArticleList = (props) => (
    props.db.map(item => (
        <Article 
       		key={item.id} 
		   	news={item.news}
		    title={item.title}
		    img={item.img}
		    desc={item.desc}
		    classtype={item.class}
		    url={item.url}
        />
    ))  
);


export default ArticleList