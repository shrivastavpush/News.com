import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, date, author, source } = props;

    return (
        <div className='my-3'>

            <div className="card position-relative">
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source}
                </span>
                <img src={imageUrl} className="card-img-top" alt="News thumbnail" style={{ width: 'auto', height: '225px' }} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
