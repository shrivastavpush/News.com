import './App.css';
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

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={<News key="business" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/science" element={<News key="science" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/technology" element={<News key="technology" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News key="health" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/sports" element={<News key="sports" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;