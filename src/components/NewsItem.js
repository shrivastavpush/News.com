import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, date, author, source } = props;

    return (
        <div className='my-1 my-md-2'>
            <div className="card position-relative h-100 shadow hover-shadow transition rounded-3" style={{ fontSize: '0.8rem' }}>
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger zindex-1 px-2 py-1">
                    {source}
                </span>
                <div className="card-img-wrapper overflow-hidden rounded-top-3">
                    <img
                        src={imageUrl || "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"}
                        className="card-img-top img-fluid hover-scale transition"
                        alt="News thumbnail"
                        style={{
                            aspectRatio: '16/9',
                            objectFit: 'cover',
                            width: '100%',
                            maxHeight: '180px'
                        }}
                        loading="lazy"
                    />
                </div>
                <div className="card-body d-flex flex-column p-2 p-md-3">
                    <h5 className="card-title fw-bold mb-2" style={{
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        minHeight: '2rem',
                        fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
                        lineHeight: '1.3',
                        color: '#2d3436'
                    }}>
                        {title || ""}
                    </h5>
                    <p className="card-text flex-grow-1" style={{
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        minHeight: '3.5rem',
                        fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                        lineHeight: '1.4',
                        color: '#636e72'
                    }}>
                        {description || ""}
                    </p>
                    <div className="mt-2 mt-md-3 border-top pt-2">
                        <p className="card-text mb-2">
                            <small className="text-muted d-block text-truncate mb-1" style={{
                                fontSize: 'clamp(0.7rem, 1.2vw, 0.8rem)',
                                color: '#b2bec3'
                            }}>
                                By {!author ? "Unknown" : author}
                            </small>
                            <small className="text-muted d-block" style={{
                                fontSize: 'clamp(0.7rem, 1.2vw, 0.8rem)',
                                color: '#b2bec3'
                            }}>
                                {new Date(date).toLocaleString(undefined, {
                                    timeZone: 'Asia/Kolkata',
                                    dateStyle: 'medium',
                                    timeStyle: 'short'
                                })}
                            </small>
                        </p>
                        <a
                            href={newsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-dark btn-sm w-100 hover-scale rounded-pill"
                            style={{
                                transition: 'all 0.3s ease-in-out',
                                fontSize: 'clamp(0.75rem, 1.3vw, 0.85rem)',
                                padding: '0.4rem 0.8rem',
                                backgroundColor: '#2d3436',
                                borderColor: '#2d3436',
                                fontWeight: '500',
                                letterSpacing: '0.5px'
                            }}
                        >
                            Read more →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
