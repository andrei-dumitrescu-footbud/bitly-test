# Brewery Explorer

A React TypeScript web application that displays brewery information from the Open Brewery DB API. Users can browse a list of breweries and view detailed information about each one.
API docs: https://www.openbrewerydb.org/documentation

## Features

- Browse a list of breweries from around the world
- View detailed information about individual breweries

## Quick Start

The easiest way to run this project is using Docker Compose:

```bash
docker-compose up --build
```

This will:

1. Build the Docker image with all dependencies
2. Start the application on port 5173
3. Serve the built application using Nginx

Once the build is complete, you can access the application at:
**http://localhost:5173**

## Development

If you prefer to run the project locally without Docker:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Technology Stack

- **Frontend**: React 19, TypeScript, Vite
- **Routing**: React Router DOM
- **API**: Open Brewery DB API
- **Containerization**: Docker, Docker Compose
- **Web Server**: Nginx
- **Testing**: Mocha, Chai, Sinon

## Project Structure

```
src/
├── api/          # API integration
├── components/   # Reusable React components
├── pages/        # Page components
├── types/        # TypeScript type definitions
└── tests/        # Test files
```
