> This is the Backend repository. You can visit the Frontend repository at https://github.com/TishG/mern-food-ordering-app-frontend

# Food Delivery Application - Backend

This repository contains the backend for a full-stack food delivery application. The backend is built using Node.js and Express, providing a robust RESTful API for handling user authentication, order processing, and integration with third-party services like Stripe for payments and Cloudinary for image management.

**Live Website**: [mern-food-ordering-app-frontend-oprw.onrender.com](https://mern-food-ordering-app-frontend-oprw.onrender.com/)

## 🛠️ Main Technologies & Libraries

- **Node.js & Express**: Core server framework.
- **MongoDB & Mongoose**: Database management.
- **Stripe**: Payment processing.
- **Cloudinary**: Image hosting and management.
- **JWT & OAuth2**: Secure user authentication.
- **TypeScript**: Strongly typed JavaScript for better development experience.
- **Multer**: File uploading middleware.

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/food-delivery-backend.git
cd food-delivery-backend
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a .env file in the root directory and add the following environment variables:

```plaintext
MONGODB_CONNECTION_STRING=your_mongodb_connection_string
STRIPE_API_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
AUTH0_AUDIENCE=your_auth0_audience
AUTH0_ISSUER_BASE_URL=your_auth0_issuer_base
FRONTEND_URL=your_local_frontend_url
```

### Running the Application

To start the application in development mode, use the following command:

```bash
npm run dev
```

> This will start both the server and the Stripe webhook listener.

### Building the Application

To build the application for production:

```bash
npm run build
```

### Starting the Application

To start the application after building it:

```bash
npm start
```

## 📦 Front End Installation

Both the Frontend and Backend must be running in order to view locally. Please visit the [Frontend Repo](https://github.com/TishG/mern-food-ordering-app-frontend) for instructions.

### 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

### 👩🏿‍💻 Author

Tish Griffiths - [GitHub Profile](https://github.com/TishG)

Feel free to reach out if you have any questions or suggestions!
