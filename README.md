Notes App 📝
A full-stack notes application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring drag-and-drop functionality for easy note organization.
✨ Features

Create Notes: Add new notes with title and content
View Notes: Browse all your notes in a responsive grid layout
Edit Notes: Update existing notes with real-time editing
Delete Notes: Remove notes with confirmation prompts
Drag & Drop: Reorder notes by dragging and dropping (with persistent backend storage)
Responsive Design: Works seamlessly on desktop and mobile devices
Real-time Feedback: Toast notifications for all actions
Rate Limiting Protection: Built-in rate limiting with user-friendly error handling

🚀 Tech Stack
Frontend

React - User interface library
React Router - Client-side routing
React DnD - Drag and drop functionality
Axios - HTTP client for API requests
React Hot Toast - Toast notifications
Tailwind CSS - Utility-first CSS framework
DaisyUI - Tailwind CSS component library
Lucide React - Icon library

Backend

Node.js - Runtime environment
Express.js - Web framework
MongoDB - NoSQL database
Mongoose - MongoDB ODM

📁 Project Structure
notes-app/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteCard.jsx       # Individual note component with drag/drop
│   │   │   ├── NotesList.jsx      # Notes container with reordering logic
│   │   │   ├── Navbar.jsx         # Navigation component
│   │   │   ├── RateLimitedUI.jsx  # Rate limit error component
│   │   │   └── NotesNotFound.jsx  # Empty state component
│   │   ├── pages/
│   │   │   ├── HomePage.jsx       # Main notes dashboard
│   │   │   ├── CreatePage.jsx     # Note creation page
│   │   │   └── NoteDetailPage.jsx # Note editing page
│   │   ├── lib/
│   │   │   ├── axios.js          # API configuration
│   │   │   └── utils.js          # Utility functions
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # App entry point with DnD provider
│   └── package.json
├── server/                 # Backend Express app
│   ├── controllers/
│   │   └── notesController.js    # Note CRUD operations + reordering
│   ├── models/
│   │   └── Note.js              # MongoDB note schema
│   ├── routes/
│   │   └── notesRoutes.js       # API route definitions
│   └── package.json
└── README.md
🛠️ Installation & Setup
Prerequisites

Node.js (v14 or higher)
MongoDB (local installation or MongoDB Atlas)
npm or yarn package manager

Backend Setup

Clone the repository
bashgit clone <your-repo-url>
cd notes-app/server

Install dependencies
bashnpm install

Environment Variables
Create a .env file in the server directory:
envMONGODB_URI=mongodb://localhost:27017/notes-app
PORT=5001

Start the server
bashnpm start
# or for development with auto-reload
npm run dev


Frontend Setup

Navigate to client directory
bashcd ../client

Install dependencies
bashnpm install

Start the development server
bashnpm run dev

Open your browser
Navigate to http://localhost:5173 (or the port shown in your terminal)

🎯 API Endpoints
MethodEndpointDescriptionGET/api/notesGet all notesGET/api/notes/:idGet note by IDPOST/api/notesCreate new notePUT/api/notes/:idUpdate existing noteDELETE/api/notes/:idDelete notePATCH/api/notes/reorderReorder notes (drag & drop)
🎨 Key Components
NoteCard Component

Displays individual notes with title, content, and metadata
Implements drag source and drop target functionality
Includes edit and delete action buttons
Responsive design with hover effects

NotesList Component

Manages the collection of note cards
Handles drag and drop reordering logic
Persists new order to backend
Implements optimistic UI updates with error rollback

Drag & Drop Implementation

Uses react-dnd with HTML5 backend
Smooth visual feedback during dragging
Real-time reordering with backend persistence
Error handling with automatic rollback on failure

🔧 Database Schema
javascriptconst noteSchema = {
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: Date,
  updatedAt: Date
}
🚦 Features in Detail
Drag & Drop Functionality

Visual Feedback: Notes become semi-transparent when dragging
Hover Detection: Smart hover zones for precise positioning
Backend Persistence: New order automatically saved to database
Error Handling: Failed reorders are automatically reverted
Optimistic Updates: UI updates immediately for better UX

Rate Limiting

Built-in rate limiting protection
User-friendly error messages
Graceful degradation when limits are exceeded

Responsive Design

Mobile-first approach with Tailwind CSS
Grid layout that adapts to screen size
Touch-friendly interface for mobile devices

🔄 Development Workflow

Make changes to components or backend logic
Test drag and drop functionality thoroughly
Check console for any error messages
Test API endpoints using browser dev tools
Verify database updates are persisting correctly

🐛 Troubleshooting
Drag & Drop Not Working

Ensure DndProvider is properly wrapped around the app
Check that react-dnd and react-dnd-html5-backend are installed
Verify backend reorder endpoint is responding correctly

Backend Errors

Check MongoDB connection string
Ensure all environment variables are set
Verify the Note model schema matches the controller expectations

API Connection Issues

Confirm backend server is running on correct port
Check axios.js configuration for correct base URL
Verify CORS settings if running on different ports

📝 Notes

The drag and drop functionality uses optimistic updates for better UX
Notes are sorted by their order field for consistent positioning
Rate limiting helps prevent API abuse
All user actions include toast notifications for feedback

🤝 Contributing

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

Built with ❤️ using the MERN stack and React DnD
