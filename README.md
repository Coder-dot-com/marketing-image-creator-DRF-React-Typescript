# Marketing Image Creator

A full-stack marketing image creator application built with **Django REST Framework**  and **React**. Users can upload images, add text and borders, save images, and view their saved creations.

---

## Requirements

* **Python** >= 3.14
* **Node.js** (latest LTS recommended)
* **npm**
* **pipenv**

---

## Setup Instructions

### Backend

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install Python dependencies with pipenv:

```bash
pipenv install
```

3. Run the Django development server:

```bash
pipenv run python manage.py runserver
```

The backend will be available at `http://localhost:8000` or `http://127.0.0.1:8000` (windows default).

---

### Frontend

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install JavaScript dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

The frontend will be available at `http://localhost:3000`.

---

## Running the App

* Make sure the **backend server** is running before starting the frontend.
* Users can log in, create marketing images, save and view saved images in a separate page.

---

## Project Structure

```
backend/          # Django backend
frontend/         # React frontend
```

* **Backend**: Django REST Framework, JWT authentication, image storage
* **Frontend**: React, Bootstrap 5.3, Canvas image creation

---
