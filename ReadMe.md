##  Key Technical Decisions

### 1. Backend Framework (Flask)
Flask was chosen for the backend due to its simplicity and lightweight nature. It allows quick development of REST APIs without unnecessary complexity, making the code easy to read and maintain.


### 2. Frontend Framework (React with Vite)
React was used to build a dynamic and responsive user interface. Vite was selected for faster development and build performance compared to traditional setups like Create React App.


### 3. Database Choice (SQLite)
SQLite was used as a relational database because it is lightweight, easy to set up, and requires no external configuration. This makes it ideal for a small-scale application and local development.


### 4. API Communication (Axios)
Axios was used for communication between frontend and backend. It provides a clean and promise-based approach for handling HTTP requests, improving code readability.


### 5. Separation of Concerns
The project is structured into separate frontend and backend folders. This ensures clear boundaries between UI logic and server logic, improving maintainability and scalability.


### 6. Input Validation
Basic validation was implemented on both frontend and backend:
- Frontend prevents empty inputs
- Backend validates incoming JSON data
This ensures invalid data is not stored in the database.


### 7. CORS Handling
Flask-CORS was used to allow communication between the React frontend and Flask backend running on different ports. This ensures smooth API interaction during development.


### 8. State Management (React Hooks)
React Hooks (`useState`, `useEffect`) were used for managing component state and side effects. This keeps the code simple and avoids unnecessary complexity.


### 9. Error Handling
Error handling was implemented:
- Backend uses try-catch blocks
- Frontend shows user-friendly alerts
This improves debugging and user experience.


### 10. Scalability Consideration
The architecture allows easy extension:
- Authentication can be added
- Database can be upgraded (e.g., PostgreSQL)
- AI features can be expanded
