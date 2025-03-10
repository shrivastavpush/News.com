# News.com - React News Application

A modern news application built with React that provides live news updates across multiple categories with infinite scroll functionality.

**Note: The NewsAPI will only work in development mode (localhost). For production deployment, you'll need a paid subscription as the free API key is restricted to localhost only.**

## Features

- Live news updates from NewsAPI
- Multiple news categories (Business, Science, Technology, Entertainment, Health, Sports)
- Infinite scroll for seamless content loading
- Responsive design with Bootstrap
- Clean and modern UI
- Error handling and loading states
- Category-based routing

## Technologies Used

- React.js
- React Router DOM
- Bootstrap 5
- React Bootstrap Icons
- React Infinite Scroll Component
- React Top Loading Bar
- NewsAPI (Free tier - localhost only)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Get a free API key from [NewsAPI](https://newsapi.org/) (Note: Will only work on localhost)

2. Clone the repository

   ```bash
   git clone https://github.com/yourusername/news-app.git
   cd news-app
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your API key

   ```bash
   REACT_APP_NEWS_API=your_api_key_here
   ```

5. Start the development server
   ```bash
   npm start
   ```

The app will open in your default browser at `http://localhost:3000`
