# React Frontend Application - GitHub Dashboard

This is a frontend application built with React, Vite, TypeScript, and Tailwind CSS. The application allows users to log in using their GitHub account, retrieve their personal access token, and display their personal information and repositories on the screen. Users can filter repositories based on various criteria such as public/private, forked/not forked, programming language used, and sort them by name, last update, or the number of stars.

## Features

- User authentication using GitHub login
- Retrieve personal access token from GitHub
- Display user's personal information and repositories
- Filter repositories based on various criteria
- Sort repositories by name, last update, or number of stars
- Search repositories using a query
- Search and view profiles of followers and following users

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool for modern web development.
- TypeScript: A statically-typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
- Axios: A promise-based HTTP client for making API requests.
- React Icons: A collection of popular icons as React components.
- React Router: A routing library for React applications.
- React Toastify: A notification library for React applications.

## Installation

Follow the steps below to run the application:

1. Clone the repository: `git clone https://github.com/jesusfvj/repository-searcher-front.git`
2. Install the dependencies: `npm install`
3. Create an OAuth app in your GitHub account:
   - Go to your GitHub account settings.
   - Navigate to "Developer settings" > "OAuth Apps."
   - Click on "New OAuth App" to create a new OAuth application.
   - Provide the necessary details for your application.
   - Set the authorization callback URL to the URL where your application will be running.
   - Once the OAuth app is created, you will receive a client ID. Make a note of it.
4. Create a `.env` file in the root directory of the project.
5. Copy the client ID obtained from the OAuth app and add it to the `.env` file as follows:
   ```
   VITE_CLIENT_ID=<your-client-id>
   ```
6. Start the development server: `npm run dev`
7. Open your browser and visit the link provided to localhost to access the application.

## Backend

The frontend application communicates with a backend server that handles the OAuth authentication process and retrieves data from the GitHub GraphQL API. For more information about the backend implementation, please refer to the [backend repository](https://github.com/jesusfvj/repository-searcher-back).

The backend server stores the retrieved data in a MongoDB database to ensure persistent data availability.

## Contributing

Contributions are welcome! If you find any issues or want to contribute to the project, please feel free to open a pull request or submit an issue on the GitHub repository.

## License

This project is licensed under the [MIT License](link-to-license-file).
