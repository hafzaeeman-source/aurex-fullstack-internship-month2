# Product Management API Dashboard

## AUREX Full Stack Development Internship — Month 2, Week 2

A responsive Product Management Dashboard built using React.js and Vite. The application integrates two public APIs to fetch and display products with search, category filtering, pagination, and detailed product information.

## Live Demo

https://aurex-week-2-api-dashboard.vercel.app/

## GitHub Repository

https://github.com/hafzaeeman-source/aurex-fullstack-internship-month2/tree/main/week-2-api-dashboard

## Features

- Fetches and displays 40 products from two APIs
- Product search by title
- Category-based filtering
- Pagination with 8 products per page
- Product details displayed in a right-side drawer
- Product images, prices, ratings, descriptions, and available product information
- Loading and error handling
- Responsive layout for desktop, tablet, and mobile
- Cream and Terracotta modern UI theme

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- Fetch API
- Git and GitHub
- Vercel

## APIs Used

1. Fake Store API — https://fakestoreapi.com/
2. DummyJSON API — https://dummyjson.com/

## Project Structure

```text
week-2-api-dashboard/
├── public/
│   ├── images/
│   └── placeholder.svg
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── ProductList.jsx
│   │   └── SearchFilter.jsx
│   ├── services/
│   │   └── productApi.js
│   ├── styles/
│   │   └── main.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/hafzaeeman-source/aurex-fullstack-internship-month2.git
```

Navigate to the project directory:

```bash
cd aurex-fullstack-internship-month2/week-2-api-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Deployment

The application is deployed on Vercel. The project uses Vercel rewrites to proxy requests to Fake Store API and DummyJSON.

## Internship Details

**Internship:** AUREX Full Stack Development Internship

**Month:** 2

**Week:** 2

**Task:** Product Management API Dashboard

**Status:** Completed

---

Developed as part of the AUREX Full Stack Development Internship.