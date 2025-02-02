# Realtime-ChatApp

## Installation Steps

### 1. Clone the Repository
```sh
git clone https://github.com/DilipKhunti/Realtime-ChatApp.git
cd Realtime-ChatApp
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
PORT=5001

CLIENT_URL=http://localhost:5173

MONGODB_URI=mongodb://127.0.0.1:27017/chat-app

JWT_SECRET=your_secret_key

NODE_ENV=production

CLOUDINARY_CLOUD_NAME=your_clodinary_cloud_name
CLOUDINARY_API_KEY=your_clodinary_cloud_api_key
CLOUDINARY_API_SECRET=your_clodinary_cloud_api_secret
```


### 4. Run Buid Process
```sh
npm run build
```

### 5. Start the Server
```sh
npm run start
```
The backend server will run on `http://localhost:5001/`



## Directory Structure
```
Directory structure:
└── dilipkhunti-realtime-chatapp/
    ├── README.md
    ├── LICENSE
    ├── package.json
    ├── backend/
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── .env.example
    │   └── src/
    │       ├── index.js
    │       ├── config/
    │       │   └── db.js
    │       ├── controllers/
    │       │   ├── auth.controller.js
    │       │   ├── message.controller.js
    │       │   └── user.controller.js
    │       ├── lib/
    │       │   ├── claudinary.lib.js
    │       │   └── socket.io.lib.js
    │       ├── middleware/
    │       │   └── auth.middleware.js
    │       ├── models/
    │       │   ├── message.model.js
    │       │   └── user.model.js
    │       ├── routes/
    │       │   ├── auth.route.js
    │       │   ├── message.route.js
    │       │   └── user.route.js
    │       ├── seeds/
    │       │   └── user.seed.js
    │       └── utils/
    │           ├── jwt.utils.js
    │           └── password.utils.js
    └── frontend/
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── tailwind.config.js
        ├── vite.config.js
        ├── public/
        └── src/
            ├── App.jsx
            ├── index.css
            ├── main.jsx
            ├── components/
            │   ├── AuthImagePattern.jsx
            │   ├── ChatContainer.jsx
            │   ├── ChatHeader.jsx
            │   ├── MessageInput.jsx
            │   ├── Navbar.jsx
            │   ├── NoChatSelected.jsx
            │   ├── Sidebar.jsx
            │   └── skeletons/
            │       ├── MessageSkeleton.jsx
            │       └── SidebarSkeleton.jsx
            ├── constants/
            │   └── index.js
            ├── lib/
            │   ├── axios.js
            │   └── utils.js
            ├── pages/
            │   ├── HomePage.jsx
            │   ├── LogInPage.jsx
            │   ├── ProfilePage.jsx
            │   ├── SettingsPage.jsx
            │   └── SignUpPage.jsx
            └── store/
                ├── useAuthStore.js
                ├── useChatStore.js
                └── useThemeStore.js

```