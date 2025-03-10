import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Calendar2Event, Person } from 'react-bootstrap-icons';

const cardStyle = {
    transition: 'all 0.3s ease',
    cursor: 'pointer',
}

const badgeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    fontSize: '0.8rem',
    padding: '0.5em 1em'
}

const imgStyle = {
    position: 'absolute',
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: '#f8f9fa'
}

const titleStyle = {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    lineHeight: '1.5',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--text-primary)'
}

const cardTextStyle = {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)'
}

const NewsItem = ({ title, description, imageUrl, newsUrl, date, author, source }) => {
    return (
        <Card
            className="h-100 border-0 shadow-sm hover-shadow transition-all"
            style={cardStyle}
            onClick={() => window.open(newsUrl, '_blank', 'noopener,noreferrer')}
        >
            <div className="position-relative">
                <Badge bg="primary" style={badgeStyle} > {source} </Badge>
                <div className="img-container position-relative" style={{ paddingTop: '56.25%' }}>
                    <Card.Img
                        variant="top"
                        src={imageUrl || "https://placehold.co/600x400?text=No%20Image"}
                        alt="News thumbnail"
                        style={imgStyle}
                        onError={(e) => {
                            e.target.src = "https://placehold.co/600x400?text=No%20Image";
                        }}
                    />
                </div>
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-2" style={titleStyle} > {title} </Card.Title>
                <Card.Text className="mb-3" style={cardTextStyle} > {description} </Card.Text>
                <div className="mt-auto">
                    <div className="d-flex align-items-center justify-content-between mb-3">
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
            </Card.Body>
        </Card>
    );
};

export default NewsItem;
