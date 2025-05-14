# ClearCut - AI Background Remover

Welcome to **ClearCut**! This project allows you to instantly remove image backgrounds using AI, featuring:

* **Next.js** frontend
* **FastAPI** backend
* **MODNet** deep learning model for portrait background removal

---

## 📂 Project Structure

```
root/
├── frontend/   # Next.js app
├── backend/    # FastAPI app (Dockerized)
└── README.md
```

---

## 📦 Backend Setup (FastAPI + MODNet)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/clearcut.git
cd clearcut/backend
```

### 2. Install Requirements (Locally)

```bash
pip install -r requirements.txt
```

> Or using Docker (Recommended):

### 3. Build Docker Image

```bash
docker build -t clearcut-rembg .
```

### 4. Run Docker Container

```bash
docker run -p 8000:8000 clearcut-rembg
```

Backend will be available at:

```
http://localhost:8000
```

---

## 🌍 Frontend Setup (Next.js)

### 1. Navigate to frontend

```bash
cd clearcut/frontend
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

## 🖋️ Notes

* Upload images from the frontend, they will be sent to the FastAPI server for background removal.
* Make sure you have the MODNet `.ckpt` model weights in the `/backend` folder.
* If running inside Docker, remember to set the proper `PYTHONPATH`.

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
# Run backend in Docker
docker build -t clearcut-rembg .
docker run -p 8000:8000 clearcut-rembg

# In another terminal
cd frontend
npm install
npm run dev
```

Access frontend: [http://localhost:3000](http://localhost:3000)
Access backend: [http://localhost:8000](http://localhost:8000)

---

## 🌟 Credits

* Frontend: **Next.js + TailwindCSS**
* Backend: **FastAPI + Torch**
* AI Model: **MODNet**

---

## 🌐 License

This project is licensed under the **MIT License**.

---

Enjoy removing backgrounds lightning fast! 🌟
