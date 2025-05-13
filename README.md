## Project Overview

This project implements a basic blog API with endpoints to create, retrieve, and manage blog posts. It uses Express.js for the server framework and Joi for data validation.

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server with:

```bash
npm run dev
```

The server will start on http://localhost:3000 with hot reloading enabled.

## API Endpoints

### Health Check
- `GET /health`: Check if the API is running

### Blog Posts
- `GET /blogs`: Retrieve all blog posts
- `GET /blogs/:id`: Retrieve a specific blog post by ID
- `POST /blogs`: Create a new blog post

## Request & Response Examples

### GET /blogs

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "title": "Introduction to JavaScript",
      "content": "JavaScript is a versatile programming language used for web development.",
      "author": "John Doe",
      "createdAt": "2023-10-01T10:00:00.000Z"
    },
    /* more blog posts */
  ]
}
```

### POST /blogs

**Request Body:**
```json
{
  "title": "New Blog Post",
  "content": "This is the content of my new blog post.",
  "author": "Your Name"
}
```

**Response:**
```json
{
  "message": "Blog created successfully",
  "data": {
    "id": 4,
    "title": "New Blog Post",
    "content": "This is the content of my new blog post.",
    "author": "Your Name",
    "createdAt": "2023-10-04T16:30:00.000Z"
  }
}
```

## Data Validation

Blog posts require the following fields:
- `title`: String (minimum 3 characters)
- `content`: String (minimum 10 characters)
- `author`: String

The `id` and `createdAt` fields are generated automatically.

## Project Structure

```
├── routes/
│   └── blogs.js     # Blog routes
├── .gitignore       # Git ignore file
├── package.json     # Project dependencies
├── README.md        # Project documentation
├── schema.js        # Joi validation schema
└── server.js        # Main server entry point
```

## Dependencies

- Express.js: Web server framework
- Joi: Data validation library
- Nodemon: Development server with hot reloading