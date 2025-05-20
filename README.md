# 📘 XperBooks – Frontend (Project1)

**XperBooks** is a user-friendly frontend application built with **React.js** using **Create React App**. It enables users to manage book records—add, edit, and delete entries—through a clean and interactive interface. This is the frontend component of a full-stack book management system, to be connected with a Django backend via REST APIs.

---

## 🚀 Features

- ➕ Add new books with title, author, and description
- 📝 Edit existing book records
- ❌ Delete unwanted books
- 🧾 Form validation to prevent empty inputs
- 🔄 Real-time UI updates using React state
- 🖥️ Clean layout with plain CSS

---

## 🛠️ Tech Stack

| Technology      | Purpose                           |
|-----------------|-----------------------------------|
| React.js        | Frontend framework                |
| Create React App| Project setup & tooling           |
| CSS             | Styling and layout                |
| Axios (planned) | API requests (Django backend)     |
| React Router    | (If routing is used in future)    |

---

## 📁 Folder Structure
```
project1-frontend-xperbooks/
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── BookForm.jsx
│   │   └── BookItem.jsx
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── styles/
│   │   └── app.css
│   │
│   ├── App.jsx
│   └── index.js
│
├── package.json
└── README.md
```
⚙️ Setup Instructions
1. Clone the Repository
```
   git clone https://github.com/your-username/XperBooks-frontend.git
   cd XperBooks-frontend
```
2. Install Dependencies
```
   npm install
```
3. Create .env File
Configure your backend URL:
```
   REACT_APP_API_BASE_URL=http://localhost:8000/api
```
4. Start the Development Server
```
   npm start
```
The app will be available at http://localhost:3000.

🧪 Future Enhancements

   🔍 Search and filter books

   ⏳ Pagination and sorting

   📊 Dashboard analytics

   🧑‍💻 Authentication and user roles

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

📝 License
This project is open-source and available under the MIT License.
   
