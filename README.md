# User and Post Management API

This project provides an API for managing users and posts.

## Endpoints

### User Endpoints: ( NodeJs )

1. **GET /users** - Get a list of all users.
2. **POST /users** - Add a new user.
3. **GET /users/sorted** - Get all users sorted alphabetically by their name.
4. **GET /users/:id** - Search for a user by their ID.
5. **PUT /users/:id** - Update an existing user by ID.
6. **DELETE /users/:id** - Delete a user by ID.

### Post Endpoints: ( ExpressJs )

1. **GET /posts** - Get a list of all posts.
2. **POST /posts** - Add a new post.
3. **GET /posts/reversed** - Get all posts in reverse order without changing the original array order.
4. **GET /posts/:id** - Get a post by ID.
5. **PUT /posts/:id** - Update an existing post by ID.
6. **DELETE /posts/:id** - Delete a post by ID.

## Setup Instructions

### 1. Install Node.js and npm
Before running the project, make sure you have **Node.js** and **npm** installed on your machine.

- Download Node.js from the official website: https://nodejs.org
- Verify installation with the following commands:
    ```bash
    node -v
    npm -v

2. **Clone the repository**:
    ```bash
    git clone https://github.com/3b3zeem/CRUD-operation-API

3. **Navigate to the project directory**:
    ```bash
    cd your-repository-name
    ```
4. **Install dependencies**:
    ```bash
    npm install
    ```
5. **Run the project**:
    ```bash
    nodemon ./script.js
    ```
    ```bash
    nodemon ./Express.js
