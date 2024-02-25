Rick & Morty 
//  Copyright (c) 2024

This project is a Rick & Morty Location Explorer app that allows users to retrieve information about locations, their residents, and add notes about specific characters. The app is built using GraphQL and Next.js, leveraging TypeScript for strong typing and Tailwind CSS for styling.

Table of Contents
Getting Started
Technologies Used
Project Structure
GraphQL Endpoint
Frontend
Backend
Persistence
Usage
Screenshots
Feedback
Getting Started
To get started with the project, follow these steps:

Clone the repository: git clone https://github.com/jay-Anonymous/RickandMortyGraphQl

Install dependencies: cd RickandMortyGraphQL && npm install
Start the development server: npm run dev
Open your browser and navigate to http://localhost:3000

Technologies Used

Next.js: Frontend framework for React applications, providing server-side rendering and easy React app setup.
TypeScript: Adds static typing to JavaScript, enhancing code quality and developer experience.

GraphQL: A query language for APIs that allows clients to request only the data they need.

Tailwind CSS: A utility-first CSS framework for rapid styling without leaving your HTML.
Project Structure

The project is organized into the following directories:

components: React components used in the frontend.

pages: Next.js pages that represent different views of the app.

server: Backend server handling GraphQL queries and managing data.

utils: Utility functions and helper modules.

GraphQL Endpoint

The app uses the Rick & Morty GraphQL API endpoint (https://rickandmortyapi.com/graphql) to efficiently fetch and display data. GraphQL enables the client to request specific fields, reducing unnecessary data transfer.

Frontend

The frontend is built with Next.js, providing a seamless user experience with server-side rendering. Tailwind CSS is used for styling to ensure a clean and responsive design.

Backend

The backend, located in the server directory, is a simple Node.js server handling GraphQL queries. It acts as a middleware between the frontend and the Rick & Morty API, optimizing data retrieval.

Persistence

For persistence, the app uses local storage to store user-generated notes about characters. This choice was made to keep the implementation simple and avoid the need for a dedicated database for this small-scale application.

Usage

View Locations: Explore a list of locations along with their residents and status.

Search and Filter: Use the search bar to filter locations by name, character name, or episode name.

Character Details: Click on a resident to view detailed information, including the ability to add and view persisted notes.


Home Page: List of locations with residents.


Character Details: View details of a character and add notes.

Feedback
This project took approximately 17 hours to complete. 

Thank you for the opportunity to work on this project!