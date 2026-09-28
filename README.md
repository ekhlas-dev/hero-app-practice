# 📱 App Store — Next.js

A modern and responsive **App Store web application** built with **Next.js**, **React**, **Tailwind CSS**, and **Context API**.

Users can browse apps, view app details, install apps, and see their installed applications in a separate page.

## 🚀 Live Project

> Add your deployed project URL here.

## 📸 Project Overview

This project is designed as a practice project for learning and applying modern **Next.js App Router** concepts.

### Main Features

* 🏠 Home page
* 📱 Browse all apps
* 🔍 App details page
* 📥 Install apps
* 🚫 Prevent duplicate app installation
* 📦 Installed apps page
* 🔔 Toast notification after installation
* ❌ Empty state when no apps are installed
* 📱 Fully responsive design
* ⚡ Next.js App Router
* 🧠 Context API for global state management
* 🔄 Dynamic routing with app IDs
* 🎨 Responsive Tailwind CSS UI

---

## 🛠️ Technologies Used

* **Next.js**
* **React**
* **JavaScript**
* **Tailwind CSS**
* **Context API**
* **React Toastify**
* **JSON data / API**
* **Next.js App Router**

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── apps/
│   │   ├── [id]/
│   │   │   └── page.jsx
│   │   └── page.jsx
│   │
│   ├── installation/
│   │   └── page.jsx
│   │
│   ├── layout.js
│   └── page.jsx
│
├── components/
│   ├── apps/
│   │   ├── InstallApp.jsx
│   │   └── ...
│   │
│   ├── shared/
│   │   ├── AppCard.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   └── ...
│
├── contex/
│   └── AppProvider.jsx
│
└── ...
```

> If your actual folder name is `context` instead of `contex`, use `context` consistently throughout the project.

---

## 🧠 Context API

The project uses **React Context API** to manage installed apps globally.

The main context contains:

```jsx
const [installApp, setInstallApp] = useState([]);
```

The data is shared through:

```jsx
<AppContext.Provider
  value={{
    installApp,
    setInstallApp
  }}
>
  {children}
</AppContext.Provider>
```

This allows different components and pages to access the installed apps without passing props through multiple components.

---

## 📥 Install App

When the user clicks the **Install App** button, the application checks whether the app has already been installed.

```jsx
const alreadyInstalled = installApp.some(
  (item) => item.id === app.id
);
```

If the app is already installed:

```jsx
if (alreadyInstalled) {
  return;
}
```

Otherwise, the app is added:

```jsx
setInstallApp([...installApp, app]);
```

This prevents duplicate apps from appearing in the installed apps page.

---

## 🔔 Toast Notification

The project uses **React Toastify** to show installation notifications.

Example:

```jsx
toast.success("Install successfully", {
  position: "top-center",
  autoClose: 5000,
});
```

---

## 🔎 Dynamic Route

App details use a dynamic route:

```text
/apps/[id]
```

For example:

```text
/apps/1
/apps/2
/apps/3
```

The `id` is used to find the specific app from the application data.

---

## 📦 Installed Apps

The installation page displays all installed apps.

```jsx
{installApp.length > 0 ? (
  installApp.map((app) => (
    <AppCard
      key={app.id}
      app={app}
    />
  ))
) : (
  <p>No installed app</p>
)}
```

The project uses `map()` to render multiple app cards.

---

## 🧩 Array Methods Used

This project also practices several important JavaScript array methods.

### `map()`

Used to render every app:

```jsx
installApp.map((app) => (
  <AppCard
    key={app.id}
    app={app}
  />
))
```

### `filter()`

Can be used to create a new array containing only apps that match a condition.

```js
const videoApps = apps.filter(
  (app) => app.category === "Video"
);
```

### `find()`

Used to find a specific app:

```js
const app = apps.find(
  (item) => item.id === id
);
```

### `some()`

Used to check whether an app already exists:

```js
const alreadyInstalled = installApp.some(
  (item) => item.id === app.id
);
```

---

## 💻 Getting Started

First, clone the project:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd your-project-name
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📦 Important Dependencies

Install React Toastify if it is not already installed:

```bash
npm install react-toastify
```

---

## 🎯 Learning Goals

This project was built to practice:

* Next.js App Router
* Dynamic Routes
* Server Components
* Client Components
* `"use client"`
* Context API
* `useContext`
* `useState`
* Array methods
* Conditional rendering
* Responsive Tailwind CSS
* Component reusability
* State management
* Toast notifications

---

## 🔮 Future Improvements

Possible future improvements:

* 🔐 User authentication
* 💾 Save installed apps to a database
* ❤️ Favorite apps
* 🔎 Search functionality
* 🏷️ Category filtering
* ⭐ App rating system
* 📊 App statistics
* 🗑️ Uninstall app functionality
* 🌙 Dark mode
* 📄 Pagination
* 🔄 API-based app data
* 👤 User profile

---

## 👨‍💻 Author

**Ekhlas Uddin**

Frontend / Full-Stack Web Development Learner

### Skills

* HTML
* CSS
* JavaScript
* React
* Next.js
* Tailwind CSS
* TypeScript
* Git & GitHub

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for learning and educational purposes.
