import React from 'react';
import { Calendar2Event, Person } from 'react-bootstrap-icons';

const NewsItem = ({ title, description, imageUrl, newsUrl, date, author, source }) => {
    return (
        <div className="card h-100 border-0 shadow-sm hover-shadow transition-all"
            style={{
                transition: 'all 0.3s ease',
                cursor: 'pointer',
            }}
            onClick={() => window.open(newsUrl, '_blank', 'noopener,noreferrer')}
        >
            <div className="position-relative">
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill"
                    style={{
                        backgroundColor: '#1a73e8',
                        zIndex: 1,
                        fontSize: '0.8rem',
                        padding: '0.5em 1em'
                    }}>
                    {source}
                </span>
                <div className="img-container position-relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                    <img
                        src={imageUrl || "https://placehold.co/600x400?text=News"}
                        className="card-img-top"
                        alt="News thumbnail"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            backgroundColor: '#f8f9fa',
                            padding: '0.5rem'
                        }}
                        onError={(e) => {
                            e.target.src = "https://placehold.co/600x400?text=News";
                        }}
                    />
                </div>
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-2" style={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: '1.5',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#202124'
                }}>
                    {title}
                </h5>
                <p className="card-text mb-3" style={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    fontSize: '0.9rem',
                    color: '#5f6368'
                }}>
                    {description}
                </p>
                <div className="mt-auto">
                    <div className="d-flex align-items-center gap-3">
                        <small className="text-muted d-flex align-items-center gap-1">
                            <Person size={14} />
                            {author || "Unknown"}
                        </small>
                        <small className="text-muted d-flex align-items-center gap-1">
                            <Calendar2Event size={14} />
                            {new Date(date).toLocaleDateString()}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
