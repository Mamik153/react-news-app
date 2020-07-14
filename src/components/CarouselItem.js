import React from 'react'

const CarouselItem = ({ urlToImage, title, url, author, index  }) => {
    return (
        <div className={ index === 0 ? `carousel-item active` :`carousel-item`}>
            <img 
                src={urlToImage} 
                className="img-fluid bg-dark" 
                alt="image" 
                style={{ width: '1200px', height: '500px', objectFit: 'cover' }} 
            />
            <a href={url} target='_blank' rel="noopener noreferrer" className="carousel-caption" style={{ color: '#fff', textDecoration: 'none' }}>
                <h5>{title}</h5>
                <a className='text-white btn btn-primary' href={url} target='_blank' rel="noopener noreferrer">Read more</a>
            </a>
        </div>
    )
}

export default CarouselItem
