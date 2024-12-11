# Fresch

Fresch is a modern web application designed to provide a seamless user experience. This project is built using the latest web technologies and follows best practices for performance and scalability.

## Features

- **Next.js**: Utilizes the powerful Next.js framework for server-side rendering and static site generation.
- **React**: Built with React, a popular JavaScript library for building user interfaces, to create dynamic and interactive web applications.
- **Javascript**: Written in Javascript for type safety and better developer experience.
- **Npm**: Managed with Npm for fast and reliable dependency management.
- **Testing**: Includes comprehensive testing setup to ensure code quality using Jest.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/fresch.git
    cd fresch
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm dev
    ```

4. **Build for production**:
    ```bash
    npm build
    ```

5. **Run tests**:
    ```bash
    npm test
    ```

## Project Structure

- `/pages`: Contains the Next.js pages.
- `/components`: Reusable React components.
- `/styles`: Global and component-specific styles.
- `/public`: Static assets like images and fonts.
- `/tests`: Test files and configurations.

## API Endpoints

Ensure that the following API endpoints are available and properly configured:

- **Products**: `/api/products`
- **Reviews**: `/api/reviews`
- **Events**: `/api/events`

These endpoints are used to fetch and manage data for products, reviews, and events within the application.

## Database

To set up the database with Prisma and populate it with seed data, follow these steps:

1. **Set up the database**:
    Ensure you have a PostgreSQL database available and update the `DATABASE_URL` in your `.env.local` file with your database connection string.

    Create a `.env.local` file in the root of your project and add the following environment variables:
    ```env
    DATABASE_URL="your_database_url"
    POSTGRES_URL=""
    POSTGRES_PRISMA_URL=""
    ```

2. **Generate Prisma Client**:
    Run the following command to generate the Prisma Client:
    ```bash
    npx prisma generate
    ```

3. **Run database migrations**:
    Run the following command to apply the Prisma schema to your database:
    ```bash
    npx prisma migrate dev --name init
    ```

4. **Seed the database**:
    Run the following command to populate your database with the seed data:
    ```bash
    node prisma/seed.js
    ```

This will create the necessary tables and populate them with initial data for products, reviews, and events.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.


