import React, { useState, useEffect } from "react"
import './News.css'
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
                        <card className="card col-10 offset-1 mt-5 pt-3" style={{ width:'80%', align: "text-center", border: '1px solid lightgray' }} key={i}>
                            <img src={item.urlToImage} alt="img" className='img-fluid mb-5' style={{ objectFit: 'contain', maskImage: 'linear-gradient(to bottom, rgba(0,0,0, 1), rgba(0,0,0,0))' }} />
                            <div style={{ position: "absolute", bottom: '0', left: '0', alignItems: 'center', backgroundColor: '#f3f3f3', width: '100%', padding: '13px 20px' }}>
                                <h4 style={{color:'#111'}}>{item.title}</h4>
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