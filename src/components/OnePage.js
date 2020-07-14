import React, { useEffect, useState } from 'react'
import './OnePage.css'
import TrendingPost from './TrendingPost'
import CarouselItem from './CarouselItem';

const OnePage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [technology, setTechnology] = useState([]);
    const [business, setBusiness] = useState([]);
    const [start, setStart] = useState(0);
    const [techStart, setTechStart] = useState(0);
    const [ businessStart, setBusinessStart ] = useState(0);


    
    useEffect(() => {
        setLoading(true);
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=1f266ba0e7894889812575d8c24c7f3f')
        .then(response => {
          return response.json();
        })
        .then(myJson => {
            setArticles(myJson.articles);
            setLoading(false);
        });
    }, []);


    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1f266ba0e7894889812575d8c24c7f3f')
        .then(response => {
          return response.json();
        })
        .then(myJson => {
            setTechnology(myJson.articles);
        });
    }, []);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1f266ba0e7894889812575d8c24c7f3f')
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            setBusiness(myJson.articles);
            setLoading(false);
        });

    }, []);


    return (
        <>
        
            <div id="carouselExampleControls" className="container carousel slide" data-ride="carousel" style={{ marginTop: '150px' }}>
                <div className="carousel-inner">
                    {
                        articles.map((item, i) => {
                            return <CarouselItem key={i} index={i} {...item} />
                        })
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>




            <div className='container trending mb-5' style={{ marginTop: '100px' }}>
                <div className='trending__header'>
                    <h3>Trending</h3>
                    <div className='trending__headerRight'>
                        {start >0 && <button  className='btn btn-default' onClick={ () => setStart(start-4)}><ion-icon name="chevron-back-outline"></ion-icon></button>}
                        {start <articles.length - 4 && <button className='btn btn-default' onClick={ () => setStart(start + 4)}><ion-icon name="chevron-forward-outline"></ion-icon></button>}
                    </div>
                </div>
                <div className='trending__posts'>
                    {
                        articles.slice( start , start + 4).map((item,i) => {
                            return <TrendingPost key={i} {...item} />
                        })
                    }
                </div>
            </div>

            <div className='container trending mb-5' style={{ marginTop: '100px' }}>
                <div className='trending__header'>
                    <h3>Technology</h3>
                    <div className='trending__headerRight'>
                        { techStart >0 && <button  className='btn btn-default' onClick={ () => setTechStart(techStart-4)}><ion-icon name="chevron-back-outline"></ion-icon></button>}
                        {techStart <technology.length - 4 && <button className='btn btn-default' onClick={ () => setTechStart(techStart + 4)}><ion-icon name="chevron-forward-outline"></ion-icon></button>}
                    </div>
                </div>
                <div className='trending__posts'>
                    {
                        technology.slice( techStart , techStart + 4).map((item,i) => {
                            return <TrendingPost key={i} {...item} />
                        })
                    }
                </div>
            </div>

            <div className='container trending mb-5' style={{ marginTop: '100px' }}>
                <div className='trending__header'>
                    <h3>Business</h3>
                    <div className='trending__headerRight'>
                        { businessStart >0 && <button  className='btn btn-default' onClick={ () => setBusinessStart(businessStart-4)}><ion-icon name="chevron-back-outline"></ion-icon></button>}
                        { businessStart <business.length - 4 && <button className='btn btn-default' onClick={ () => setBusinessStart(businessStart + 4)}><ion-icon name="chevron-forward-outline"></ion-icon></button>}
                    </div>
                </div>
                <div className='trending__posts'>
                    {
                        business.slice( businessStart , businessStart + 4).map((item,i) => {
                            return <TrendingPost key={i} {...item} />
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default OnePage
