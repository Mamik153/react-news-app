import React from "react"
import "./News.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";


class Headlines extends React.Component{
    constructor(){
        super()
        this.state={
            highlights: [],
            loading: false
        }
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=1f266ba0e7894889812575d8c24c7f3f')
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            this.setState({
                highlights: myJson.articles,
                loading: false
            })
            console.log(myJson)
        });
    }

    render(){
        
        return(
            <div>
                {this.state.loading ? <p>Loading...</p> : 
                    <div className="highlight" >
                        {this.state.highlights.map( item => {
                            return(
                                <a className="news-bits" style={{ align: "text-center" }} key={item.title} href={item.url}>
                                    <img src={item.urlToImage} alt="img" />
                                    <div className="content">
                                        <h1>{item.title}</h1>
                                        
                                        <h5 style={{ display: item.author ? "" : "none", color: "#abc",marginLeft: "2vh" }}>By: {item.author}</h5>
                                    </div>     
                                </a>
                            )
                        })}
                    </div>
            }
            </div>
               
            
            
        )
    }

}

export default Headlines