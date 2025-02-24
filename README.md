# Twitter Clone - User Registration System

A simple user registration system built with modern web technologies. The application features a clean UI with real-time user updates and MongoDB integration.

## 🚀 Features

- User registration with name, email, and password
- Real-time user list updates
- Newest users appear at the top
- MongoDB database integration
- Modern responsive UI
- Form validation
- Error handling

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3 (with Flexbox)
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## 📦 Installation

1. Clone the repository:

bash
git clone https://github.com/yourusername/twitter-clone.git
cd twitter-clone

2. Install server dependencies:
```bash
cd server
npm install
```

3. Create a `.env` file in the server directory with the following content:
```env
MONGODB_URI=mongodb://localhost:27017/twitter_clone
PORT=3000
```

## 🚀 Running the Application

1. Start MongoDB server on your local machine

2. Start the backend server:
```bash
cd server
npm start
```

3. Open the frontend:
- Navigate to the `client` directory
- Open `index.html` in your web browser

## 📁 Project Structure

```
twitter-clone/
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── server/
    ├── models/
    │   └── User.js
    ├── .env
    ├── package.json
    └── server.js
```

## 💻 API Endpoints

- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /` - Welcome message

## 🔒 Security Considerations

This is a basic implementation for learning purposes. For production use, consider implementing:

- Password hashing
- Input validation
- JWT authentication
- HTTPS
- Rate limiting
- Environment variable management
- Production-grade database configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- MongoDB documentation
- Express.js documentation
- Node.js community

## 📧 Contact

ROHIT SHARMA- [@rohitsharma716](https://x.com/rohit_716)
Project Link: [TWITTER CLONE](https://github.com/rohitsharma716/twitterClone/tree/main)