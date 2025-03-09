import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const pageSize = 9;
  const [apiKey, setApiKey] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const key = process.env.REACT_APP_NEWS_API;
    if (!key) {
      console.error('REACT_APP_NEWS_API is not defined in .env file');
    } else {
      setApiKey(key);
    }
  }, []);

  if (!apiKey) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Configuration Error</h4>
          <p>API key is not configured properly.</p>
          <hr />
          <p className="mb-0">
            Please make sure you have created a .env file in the root directory with your News API key:
            <br />
            <code>REACT_APP_NEWS_API=your_api_key_here</code>
          </p>
        </div>
      </div>
    );
  }

  const categories = ['business', 'science', 'technology', 'entertainment', 'health', 'sports'];

  return (
    <div>
      <Router>
        <NavBar categories={categories} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                pageSize={pageSize}
                category="general"
              />
            }
          />
          {categories.map(category => (
            <Route
              key={category}
              exact
              path={`/${category}`}
              element={
                <News
                  key={category}
                  setProgress={setProgress}
                  apiKey={apiKey}
                  pageSize={pageSize}
                  category={category}
                />
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  )
}

export default App;