# MyNotes App

MyNotes App is a full-stack note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to create, edit, and delete notes seamlessly.

## Features
- 📒 Create, edit, and delete notes
- 🔒 Secure backend with Node.js and Express
- 📦 MongoDB for data storage
- ⚡ Fast and responsive React frontend

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/UmerI02/MyNotes-App.git
cd MyNotes-App
```

### 2. Install dependencies
#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 3. Run the project
#### Start the backend server
```bash
cd backend
nodemon app.js
```

#### Start the frontend server
```bash
cd ../frontend
npm run dev
```

The frontend should now be running on `http://localhost:3000` and the backend on `http://localhost:5000` (or your specified port).

## Folder Structure
```
MyNotes-App/
│
├── backend/                # Node.js and Express server
│   ├── app.js              # Main application file
│   ├── routes/             # API routes
│   └── models/             # Database models
│
├── frontend/               # React app
│   ├── src/                # React components and pages
│   └── public/             # Static assets
│
└── README.md               # Project documentation
```

## Technologies Used
- **Frontend:** React, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other:** Nodemon, dotenv

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

---

⭐ **Star this repo** if you found it useful!

