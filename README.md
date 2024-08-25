# Dashboard Page Project

## Project Overview

This project involves creating a dynamic dashboard page using React. The dashboard allows users to add, remove, and manage widgets within different categories. Users can also search for widgets and dynamically manage categories.

## Features

1. **Dynamic Dashboard**: Build the dashboard and widgets based on a JSON file.
2. **Add/Remove Widgets**: Users can add new widgets and remove existing ones from categories.
3. **Search Widgets**: Search functionality to find widgets based on text.
4. **Category Management**: Users can add new categories and manage widgets within them.
5. **Responsive Layout**: Widgets wrap to the next line if there is no horizontal space available.
6. **Persistent Management**: Changes are managed in the frontend and reflected dynamically.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Bootstrap**: CSS framework for styling.

## Folder Structure

```plaintext
accuknox/
├── App.js
├── backend/
│   └── server.js
├── components/
│   ├── Add.jsx
│   ├── dashboardData.json
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── Sections.jsx
│   ├── SlidePanel.jsx
│   └── Widget.jsx
└── index.js
```

## Setup Instructions

### 1. Clone the Repository

Clone the repository from GitHub:

git clone https://github.com/your-username/your-repo.git
cd your-repo

### 2. Install Dependencies

Install the required npm packages:

npm install

### 3. Start the Development Server

Run the development server:

npm start

The application will be available at `http://localhost:3000`.

### 4. Build for Production

To create a production build of the application:

npm run build

The build will be created in the `build/` directory.

## Usage

### Adding a Widget

1. Click on the "+ Add Widget" button in the desired category.
2. Enter the widget name and text, then click "Add".

### Removing a Widget

1. Click on the "X" icon on the widget you wish to remove.

### Adding a Category

1. Click on the "+ Add Section" button.
2. Enter the section name and click "Add".

### Searching for Widgets

1. Use the search bar in the Navbar to filter widgets by text.

## Development Notes

- **Responsive Design**: Ensure the dashboard layout adapts to different screen sizes.
- **Testing**: The project uses `@testing-library/react` for component testing.


## Contact
This is done by Rohan Dutta
phn no. 9832385294
Email: rohandutta030620@gmail.com

---
