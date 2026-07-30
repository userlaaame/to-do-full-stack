# 📝 Todo List Application

A full-stack todo list application built with React and Express.js, featuring real-time task management with MongoDB persistence.

## ✨ Features

- ✅ **Create Todos** - Add new tasks to your todo list
- ✏️ **Update Todos** - Toggle completion status with a checkbox
- 🗑️ **Delete Todos** - Remove completed or unwanted tasks
- 📱 **Real-time Updates** - Changes reflect instantly across the app
- 💾 **Persistent Storage** - All todos saved to MongoDB

## 🛠️ Tech Stack

### Frontend
- **React 19.2** - UI library with hooks for state management
- **Vite 8.2** - Lightning-fast build tool
- **CSS** - Custom styling

### Backend
- **Express.js 5.2** - RESTful API server
- **Node.js** - JavaScript runtime
- **MongoDB** - NoSQL database for data persistence
- **Mongoose 9.8** - MongoDB object modeling

### Additional
- **CORS** - Cross-origin resource sharing for frontend-backend communication
- **dotenv** - Environment variable management

## 📦 Project Structure

```
todo-full-stack/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── App.jsx          # Main component with todo logic
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Styles
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
│
├── backend/                  # Express backend server
│   ├── index.js             # Main server file with API routes
│   ├── db.js                # MongoDB connection setup
│   ├── models/
│   │   └── todo.js          # Todo schema definition
│   ├── .env                 # Environment variables
│   └── package.json         # Backend dependencies
│
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd todo-full-stack
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Configuration

1. **Set up environment variables** in `backend/.env`:
   ```
   MONGO_URL=mongodb+srv://your_username:your_password@cluster.mongodb.net/database_name?appName=Cluster0
   ```

2. **Ensure MongoDB connection string is valid** in your MongoDB Atlas dashboard

### Running the Application

**Terminal 1 - Start Backend Server:**
```bash
cd backend
npm start
```
Backend runs on `http://localhost:3000`

**Terminal 2 - Start Frontend Development Server:**
```bash
cd frontend
npm run dev
```
Frontend runs on `http://localhost:5173`

Open your browser and navigate to `http://localhost:5173` to use the app!

## 📡 API Endpoints

### GET - Retrieve All Todos
```
GET http://localhost:3000/api/todos
```
**Response:** Array of all todos

### POST - Create a New Todo
```
POST http://localhost:3000/api/todos
Content-Type: application/json

{
  "text": "Your todo text here"
}
```
**Response:** Created todo object with `_id`, `text`, and `completed` status

### PUT - Update a Todo
```
PUT http://localhost:3000/api/todos/:id
Content-Type: application/json

{
  "text": "Updated text",
  "completed": true
}
```
**Response:** Updated todo object

### DELETE - Delete a Todo
```
DELETE http://localhost:3000/api/todos/:id
```
**Response:** Deleted todo object

## 💡 How It Works

1. **Frontend** (React) fetches all todos on initial load
2. **User interactions** (add, update, delete) trigger API calls
3. **Backend** (Express) processes requests and interacts with MongoDB
4. **MongoDB** stores todo data persistently
5. **Frontend** updates UI based on server responses

## 🎯 Features in Detail

### Adding a Todo
- Type text in the input field
- Click "Submit" or press Enter
- Todo appears immediately in the list

### Updating a Todo
- Click the checkbox next to a todo
- Completion status updates on the server
- UI reflects the change in real-time

### Deleting a Todo
- Click the "x" button next to a todo
- Todo is removed from both server and UI

## 🔧 Available Scripts

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linter (oxlint)
- `npm run preview` - Preview production build

**Backend:**
- `npm start` - Start server
- `npm test` - Run tests (if configured)

## 🐛 Troubleshooting

**Backend won't start:**
- Verify MongoDB connection string in `.env`
- Ensure MongoDB Atlas cluster is active
- Check that port 3000 is available

**Frontend can't connect to backend:**
- Verify backend is running on port 3000
- Check browser console for CORS errors
- Ensure both servers are running

**Todos not persisting:**
- Verify MongoDB connection is successful
- Check backend logs for database errors

## 📝 Environment Variables

Create a `.env` file in the `backend/` directory:

```
MONGO_URL=your_mongodb_connection_string
```

## 🚀 Future Enhancements

- [ ] User authentication and accounts
- [ ] Todo categories/tags
- [ ] Due dates and reminders
- [ ] Priority levels
- [ ] Search and filter functionality
- [ ] Dark mode theme
- [ ] Todo sharing between users
- [ ] Mobile app version

## 📄 License

This project is open source and available for educational purposes.

---

**Happy todo-ing!** 🎉
