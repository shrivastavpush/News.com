import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import sampleData from '../sampleData.json';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [error, setError] = useState(null)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        try {
            props.setProgress(10);
            const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            setLoading(true)
            setError(null)

            const response = await fetch(url);
            props.setProgress(30);

            const parsedData = await response.json();
            props.setProgress(70);

            if (parsedData.status === 'error') {
                throw new Error(parsedData.message || 'Failed to fetch news');
            }

            setArticles(parsedData.articles || [])
            setTotalResults(parsedData.totalResults || 0)
            setLoading(false)
            props.setProgress(100);
        } catch (err) {
            console.error('News API Error:', err);
            setError(err.message || 'Failed to fetch news. Please check your API key.')
            setLoading(false)
            setArticles(sampleData.articles)
            setTotalResults(sampleData.totalResults)
            props.setProgress(100);
        }
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - News.com`;
        if (!props.apiKey) {
            console.error('API key is missing');
            setError('API key is missing. Please check your environment variables.');
            setLoading(false);
            return;
        }
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        try {
            const nextPage = page + 1;
            const url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;

            const response = await fetch(url);
            const parsedData = await response.json();

            if (parsedData.status === 'error') {
                throw new Error(parsedData.message || 'Failed to fetch more news');
            }

            setPage(nextPage);
            setArticles(prevArticles => [...prevArticles, ...(parsedData.articles || [])]);
            setTotalResults(parsedData.totalResults || 0);
        } catch (err) {
            console.error('News API Error:', err);
            setError(err.message || 'Failed to fetch more news');
        }
    };

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger shadow-sm rounded-4 border-0" role="alert">
                    <h4 className="alert-heading fw-bold">Error Loading News</h4>
                    <p className="mb-0 opacity-75">{error}</p>
                    <hr className="opacity-25" />
                    <p className="mb-0 small opacity-75">
                        Please check your API key and make sure it's properly configured in the .env file.
                        <br />
                        <span className="text-muted">Current API Key: {props.apiKey ? '****' + props.apiKey.slice(-4) : 'Not found'}</span>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-light min-vh-100">
            <div className="container">
                <h1 className="display-5 text-center fw-bold mb-4 pt-4">
                    {capitalizeFirstLetter(props.category)} Headlines
                </h1>

                {loading && <div className="text-center py-5"><Spinner /></div>}

                <InfiniteScroll
                    dataLength={articles?.length || 0}
                    next={fetchMoreData}
                    hasMore={articles?.length < totalResults}
                    loader={<div className="text-center py-4"><Spinner /></div>}
                    className="pb-4 pt-4"
                >
                    <div className="container px-md-4">
                        <div className="row g-4">
                            {articles && articles.map((element) => (
                                <div className="col-12 col-md-6 col-lg-4" key={element.url}>
                                    <NewsItem
                                        title={element?.title || ""}
                                        description={element?.description || ""}
                                        imageUrl={element?.urlToImage}
                                        newsUrl={element?.url}
                                        author={element?.author}
                                        date={element?.publishedAt}
                                        source={element?.source?.name || "Unknown"}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
}

export default News