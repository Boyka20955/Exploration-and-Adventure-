# Exploration and Adventure Web Application

A modern travel planning application built with Next.js that helps users organize their trips, create itineraries, and visualize their travel destinations on an interactive globe.

## Features

- **Interactive 3D Globe**: Visualize all your travel destinations on a beautiful 3D globe
- **Trip Management**: Create, view, and manage your trips
- **Location Planning**: Add and organize locations for each trip
- **Dynamic Itineraries**: Create and reorder your travel itinerary with drag-and-drop functionality
- **Authentication**: Secure authentication using GitHub
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with GitHub provider
- **Maps & Geocoding**: Google Maps API for location services
- **UI Components**: Custom UI components with modern design
- **File Upload**: UploadThing for file handling
- **Styling**: TailwindCSS (inferred from project structure)

## Prerequisites

Before you begin, ensure you have:

- Node.js (LTS version recommended)
- PostgreSQL database
- The following API keys/credentials:
  - GitHub OAuth credentials (for authentication)
  - Google Maps API key (for geocoding and maps)
  - UploadThing token (for file uploads)

## Environment Setup

1. Clone the repository

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Set up the database:
```bash
npx prisma migrate dev
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Project Structure

- `/app`: Next.js app router pages and API routes
  - `/api`: Backend API endpoints
  - `/globe`: 3D globe visualization
  - `/trips`: Trip management pages
- `/components`: Reusable React components
  - `/ui`: Common UI components
- `/lib`: Utility functions and server actions
  - `/actions`: Server-side actions for data manipulation
- `/prisma`: Database schema and migrations

## Features in Detail

### Trip Management
- Create new trips with titles and descriptions
- View all trips in an organized dashboard
- Individual trip pages with detailed information

### Location Planning
- Add locations to trips using Google Maps geocoding
- Visualize trip locations on an interactive map
- Organize locations in a customizable itinerary

### Authentication
- Secure GitHub authentication
- Protected routes and server actions
- User-specific content and data

## Development

The project uses several Next.js features:
- Server Actions for data mutations
- Server Components for improved performance
- API Routes for backend functionality
- Middleware for authentication

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
