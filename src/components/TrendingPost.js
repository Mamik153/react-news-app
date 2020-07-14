import React from 'react'

const TrendingPost = ({ urlToImage, title, url, author }) => {
    return (
        <div className="card" style={{  }}>
            <img src={urlToImage} className="card-img-top" alt="image" />
            <a href={url} target='_blank' rel="noopener noreferrer" className="card-body" style={{ textDecoration: 'none' }}>
                <h5 className="card-title" style={{ fontSize: '15px' }}>{`${title.substring(0,35)}...`}</h5>
                { author &&<p className="card-text">By {author}</p>}
            </a>
        </div>
    )
}

export default TrendingPost
