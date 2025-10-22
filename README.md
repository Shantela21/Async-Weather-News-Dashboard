<img src="https://socialify.git.ci/Shantela21/Async-Weather-News-Dashboard/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Async-Weather-News-Dashboard" width="640" height="320" />

## 🌦️ Async Weather News Dashboard
A simple Node.js + TypeScript project that demonstrates fetching weather and news data using three different asynchronous programming patterns:
Callbacks, Promises, and Async/Await.

## 🚀 Project Overview
This project showcases how to handle asynchronous operations in JavaScript/TypeScript using real-world examples — fetching weather data and recent news posts.

It includes three versions of implementation:

1. Callback Version – callbackVersion.ts

2. Promise Version – promiseVersion.ts

3. Async/Await Version – asyncAwaitVersion.ts

## 🧠 Learning Goals
* Understand how asynchronous programming works in Node.js.

* Learn to use callbacks, promises, and async/await.

* Explore Promise.all() and Promise.race() for handling multiple async tasks.

* Practice modular TypeScript development.

## 🗂️ Project Structure
```bash
async-weather-news-dashboard/
│
├── src/
│   ├── callbackVersion.ts      # Callback-based version
│   ├── promiseVersion.ts       # Promise-based version
│   ├── asyncAwaitVersion.ts    # Async/Await version
│
├── dist/                       # Compiled JavaScript files
│
├── package.json
├── tsconfig.json
└── README.md
```
## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Shantela21/Async-Weather-News-Dashboard.git
```
```
cd Async-Weather-News-Dashboard
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Build the Project
```
npm run build
```
### 4️⃣ Run Each Version
#### Callback Version:
``` 
ts-node dist/callbackVersion.js
```
#### Promise Version:
```
ts-node dist/promiseVersion.js
```
#### Async/Await Version:
```
ts-node dist/asyncAwaitVersion.js
```

## 🌐 APIs Used

* **Weather API**: Open-Meteo

Fetches hourly temperature data based on latitude and longitude.

* **News API**: DummyJSON Posts

Provides fake post data for testing.

🔑 Replace "YOUR_API_KEY" in the code if using real APIs.

## 🧩 Features

* Fetch and display weather data and latest news.

* Demonstrates three async patterns:

  * Callback chaining

  * Promise chaining

  * Async/Await with error handling

* Includes Promise.all() and Promise.race() examples.