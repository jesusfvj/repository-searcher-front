# repository-searcher-front - GitHub Dashboard

This is a frontend application built with React, Vite, TypeScript, and Tailwind CSS. The application allows users to log in using their GitHub account, retrieve their personal access token, and display their personal information and repositories on the screen. Users can filter repositories based on various criteria such as public/private, forked/not forked, programming language used, and sort them by name, last update, or the number of stars.

## Features

### - User authentication using GitHub login

 <img src="https://github.com/jesusfvj/repository-searcher-front/assets/119491399/0ba7a2b2-df7c-40dd-b238-91d39210e932" alt="Image" width="70%">

### - Retrieve personal access token from GitHub

 <img src="https://github.com/jesusfvj/repository-searcher-front/assets/119491399/3b4209d0-6e1c-4e40-9628-89ba897e9cbd" alt="Image" width="70%">


### - Display user's personal information and repositories!

 <img src="https://github.com/jesusfvj/repository-searcher-front/assets/119491399/135d060b-11e7-43ed-b5d1-5cb80fbd5617" alt="Image" width="70%">

### - Filter repositories based on various criteria

 <img src="https://github.com/jesusfvj/repository-searcher-front/assets/119491399/06b11fbd-2d9b-4dd9-902e-abe1b23ecbc7" alt="Image" width="70%">

### - Sort repositories by name, last update, or number of stars

 <img src="https://github.com/jesusfvj/repository-searcher-front/assets/119491399/3aefe04f-4306-4034-8f91-dfdb180ebd5b" alt="Image" width="70%">

### - Search repositories using a query

 <img src="https://github.com/jesusfvj/repository-searcher-front/assets/119491399/74b6d071-bdfb-4356-bf98-873009685861" alt="Image" width="70%">
 <img src="https://github.com/jesusfvj/repository-searcher-front/assets/119491399/c69a9518-fd6f-41e8-a747-e2f09671346e" alt="Image" width="70%">

### - Search and view profiles of followers and following users

-In the input up in the left corner, type "owner:" to show users. Typing "owner: + username" will display and filter the repositories.

 <img src="https://github.com/jesusfvj/repository-searcher-front/assets/119491399/82e68b35-e9ba-459b-884f-3bbe6c6c8bd3" alt="Image" width="70%">
 <img src="https://github.com/jesusfvj/repository-searcher-front/assets/119491399/64e8d006-97a3-4be3-89cc-5114af2373d3" alt="Image" width="70%">

### - Additionally, a backend-generated token using JSON Web Token is used to keep the user's session active. This token remains valid for 1 hour, enabling continuous authentication without frequent login requirements.

 <img src="https://github.com/jesusfvj/repository-searcher-front/assets/119491399/b05dcbb5-94dc-463e-bdfe-32eba26a290b" alt="Image" width="70%">

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
   - Once the OAuth app is created, you will receive a client ID and a secret ID. Make a note of it.
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

## Responsiveness

The application is designed to be responsive, with a break point set at 768px. This ensures that phones and tablets can navigate easily, while small and larger laptops can enjoy the full resolution experience.
|         |         |         |         |
|---------|---------|---------|---------|
| ![Image 1](https://github.com/jesusfvj/repository-searcher-front/assets/119491399/88aa6cba-316f-4838-a7df-4595408a4c02) | ![Image 2](https://github.com/jesusfvj/repository-searcher-front/assets/119491399/9ac85d97-9102-4ff5-bc02-b0faaa8aa5f1) | ![Image 3](https://github.com/jesusfvj/repository-searcher-front/assets/119491399/7abc803e-d3ec-437c-950a-e8226d852d0e) | ![Image 4](https://github.com/jesusfvj/repository-searcher-front/assets/119491399/4a760978-c6ff-441c-8cc2-6f4d95da34ee) | 
| ![Image 5](https://github.com/jesusfvj/repository-searcher-front/assets/119491399/01b5a224-6d67-4fb6-94a7-f16cc34946bd) | ![Image 6](https://github.com/jesusfvj/repository-searcher-front/assets/119491399/0a6142bb-db91-4852-be3c-b77fc9e7cc44) | ![Image 7](https://github.com/jesusfvj/repository-searcher-front/assets/119491399/bc9dd83e-211e-4c23-8cf2-4e0ddd9acec5) | ![Image 8](https://github.com/jesusfvj/repository-searcher-front/assets/119491399/2a6c9354-48f4-4711-ac08-91bd0ec7ef29) |

## Design

For the design, I usually use Figma, although on this occasion, it wasn't necessary as I took inspiration from GitHub's own website. I utilized a couple of Google extensions, a color picker, and What Font, to identify the colors and font styles. As a result, the final outcome closely resembles the GitHub website.

|         |         |
|---------|---------|
| ![Image 1](https://github.com/jesusfvj/repository-searcher-front/assets/119491399/e3164188-c29d-49ac-92a9-a6e7e61abad4) | ![Image 2](https://github.com/jesusfvj/repository-searcher-front/assets/119491399/8f03b27a-5b6a-4d3a-9a09-524c4961b61b) |
| ![Image 3](https://github.com/jesusfvj/repository-searcher-front/assets/119491399/ade45959-a267-4e79-96e3-f7f220e42aa7) | ![Image 4](https://github.com/jesusfvj/repository-searcher-front/assets/119491399/42726e1e-faae-459e-98ad-7a33afd81fb5) | 

## Contributing

Contributions are welcome! If you find any issues or want to contribute to the project, please feel free to open a pull request or submit an issue on the GitHub repository.

## License

This project is licensed under the [MIT License](link-to-license-file).
