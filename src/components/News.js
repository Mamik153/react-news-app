import React, { useState, useEffect } from "react"
import "./News.css"

const News = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1f266ba0e7894889812575d8c24c7f3f')
        .then(response => {
          return response.json();
        })
        .then(myJson => {
            console.log(myJson)
            setArticles(myJson.articles);
            setLoading(false);
        });
    }, []);

    return(
        loading ? 
            <p>Loading...</p> 
            :
            <div className="container-fluid mb-5" style={{ marginTop: '100px' }} >
                {articles.map( (item, i) => {
                    return(
                        <card className="card col-lg-4 offset-lg-4 col-10 offset-1 mt-5" style={{ align: "text-center", padding: '20px', border: '1px solid lightgray' }} key={i}>
                            <img src={item.urlToImage} alt="img" className='img-fluid'/>
                            <div className="">
                                <h4>{item.title}</h4>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">Read More..</a><br/>
                                <p style={{ display: item.author ? "" : "none", color: "#abc" }}>By: {item.author}</p>
                            </div>
                                
                        </card>
                    )
                })}
            </div>
            
        
    )
}

export default News