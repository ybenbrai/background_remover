# ClearCut - Background Remover

Welcome to **ClearCut**!
A simple and fast project that allows you to remove image backgrounds easily, featuring:

- **Next.js** frontend (`client/`)
- **FastAPI** backend (`backend/`)

---

## 📂 Project Structure

```
root/
├── client/     # Next.js app (frontend)
├── backend/    # FastAPI app (backend API only)
└── README.md
```

---

## 📦 Backend Setup (FastAPI API)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/clearcut.git
cd clearcut/backend
```

### 2. Install Python Requirements (Locally)

```bash
pip install -r requirements.txt
```

> Or using Docker (Recommended):

### 3. Build Docker Image

```bash
docker build -t clearcut-backend .
```

### 4. Run Docker Container

```bash
docker run -p 8000:8000 clearcut-backend
```

Backend will be available at:

```
http://localhost:8000
```

---

## 🌍 Frontend Setup (Next.js)

### 1. Navigate to client

```bash
cd clearcut/client
```

### 2. Install Node.js dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Frontend will be available at:

```
http://localhost:3000
```

> Make sure the backend (FastAPI) is running on **port 8000**.

---

## 🔋 Notes

- Upload images from the frontend, they will be sent to the FastAPI server for background removal.
- This project focuses on simplicity, speed, and self-hosted control.
- No external AI model is used — only a lightweight backend API.

---

## 📁 Environment Requirements

| Component | Version |
| :-------- | :------ |
| Python    | 3.10    |
| Node.js   | 18+     |
| Docker    | Latest  |

---

## 🚀 Quick Start

```bash
# From root
cd backend
docker build -t clearcut-backend .
docker run -p 8000:8000 clearcut-backend

# In another terminal
cd client
npm install
npm run dev
```

Access frontend: [http://localhost:3000](http://localhost:3000)
Access backend: [http://localhost:8000](http://localhost:8000)

---

## 🌟 Credits

- Frontend: **Next.js + TailwindCSS**
- Backend: **FastAPI**
- Built for simplicity and instant use.

---

## 🌐 License

This project is licensed under the **MIT License**.

---

Enjoy ClearCut! 🚀
Lightning fast, self-hosted, and easy to use. 🔥
