# Tamatem Plus

## Project Overview

This project is a React application developed using Yarn as the package manager. It utilizes Chakra UI for designing components, leveraging its boxes, cards, and forms to meet the assessment requirements. The application follows a RESTful API approach to fetch data in the required components.

## Installation

To install and run the application locally, follow these steps:

1. **Clone Repository**: Clone the repository to your local machine:

    ```bash
    git clone https://github.com/maram-mustafa/tamatem-plus-frontend.git
    
    cd my-app
    ```
2. **Install Dependencies**: Install project dependencies using Yarn:

    ```bash
    yarn install
    ```

3. **Start Development Server**: Start the development server:

    ```bash
    yarn start
    ```

   The application should now be running locally at `http://localhost:3000`.


## Components

### `LoginPage`

The `LoginPage` component is responsible for rendering the login interface of the application. It allows users to input their email and password credentials to authenticate and gain access to the application's features.

#### Features:
- **Email Input**: Users can input their email address.
- **Password Input**: Users can input their password. Additionally, there is an option to toggle the visibility of the password using the eye icon button.
- **Login Button**: Clicking the login button triggers the authentication process, where the entered credentials are sent to the server for verification.
- **Forgot Password Link**: ~~Provides users with the option to reset their password if forgotten.~~ (Not currently implemented thers no design provided for it)


### `ProductCard` Component

The `ProductCard` component is responsible for rendering individual product cards within the Products page. Each card displays the product's image, name, and price. Users can click on the price button to view more details about the product.

### `Products` Component

The `Products` component represents the Products page of the application. It fetches product data from the backend API and dynamically renders a grid of `ProductCard` components to display the available products. If there are any errors during the data fetching process, appropriate error messages are displayed to the user.

### `ProductDetails` Component

The `ProductDetails` component is responsible for displaying detailed information about a specific product. It fetches product data from the backend API based on the provided product ID and renders the product's image, name, description, and price. Users can also navigate to the edit page for the current product using the Edit button.


### `EditProduct` Component

The EditProduct component allows users to edit the details of a specific product. It fetches the product details from the backend API based on the provided product ID and pre-fills the input fields with the existing data. Users can update the product's name, description, price, and image. The component provides options to upload a new image and save or cancel the changes.

#### Features:

- **Image Upload**: Allows users to upload a new image for the product.
- **Input Fields**: Enables users to modify the product's name, description, and price.
- **Save Button**: Saves the changes made to the product and updates the data in the backend.
- **Cancel Button**: Discards any changes made and returns to the Products page.


## Authentication

### Login Page

Upon logging in, the application saves the access and refresh tokens in the local storage. These tokens are valid for 24 hours.

## Authorization

### Product Page

When accessing the product page, the application retrieves the access token and sends it to check if the user is authorized to view and edit products.