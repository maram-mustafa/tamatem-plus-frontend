
Tamatem Plus 

Project Overview
This project is a React application developed using Yarn as the package manager. It utilizes Chakra UI for designing components, leveraging its boxes, cards, and forms to meet the assessment requirements. The application follows a RESTful API approach to fetch data in the required components.

Getting Started
To run the application locally, follow these steps:

1- Clone Repository: 
Clone the repository to your local machine using the following command:
git clone <repository-url>

2- Install Dependencies: 
Navigate into the project directory and install dependencies using Yarn:
cd my-app
yarn install

3- Start Development Server: 
Start the development server using the following command:
yarn start


Authentication
Login Page: Upon logging in, the application saves the access and refresh tokens in the local storage. These tokens are valid for 24 hours.

Authorization
Product Page: When accessing the product page, the application retrieves the access token and sends it to check if the user is authorized to view and edit products.