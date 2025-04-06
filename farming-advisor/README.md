# 🌾 AI Farming

AI Farming is a smart agricultural advisory system that provides data-driven insights to farmers. It leverages AI to analyze soil conditions, weather patterns, and market trends to offer personalized farming strategies.

## 🚀 Tech Stack

### Backend:
- **FastAPI** (Python-based web framework)
- **SQLite** (Database for storing farmer & market data)
- **Ollama** (AI model for generating farming insights)
- **Unsplash API** (For fetching farming-related images)
- **Uvicorn** (ASGI server for running FastAPI app)

### Frontend:
- **React.js** (For building the UI)
- **Tailwind CSS** (For styling and responsive design)
- **Axios** (For API calls to the backend)

---

## 🛠️ Backend Setup (FastAPI)

### Local Setup:
```sh
# Clone the repository
git clone https://github.com/your-username/ai-farming.git
cd ai-farming

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Deployed API:
> **Base URL:** [https://ai-farm.onrender.com/](https://ai-farm.onrender.com/)

#### API Endpoints:
- `POST /upload/farmer_data` → Upload farmer data
- `POST /upload/market_data` → Upload market data
- `GET /farmers` → Fetch all farmer data
- `GET /markets` → Fetch all market data
- `GET /advise/{farm_id}` → Get AI-powered farming advice

---

## 🖥️ Frontend Setup (React)

### Local Setup:
```sh
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the React app
npm run dev
```

### Deployed Frontend:
> **Live URL:** [https://ai-sustainable-farming.vercel.app/](https://ai-sustainable-farming.vercel.app/)

---

## 🔗 Resources & APIs Used
- [FastAPI](https://fastapi.tiangolo.com/)
- [SQLite](https://www.sqlite.org/)
- [Ollama AI](https://ollama.com/)
- [Unsplash API](https://unsplash.com/developers)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### 📌 Contributors
- **AbhishekKuntare** - [GitHub](https://github.com/Abhishekkuntare)

### 📜 License
This project is licensed under the MIT License.

---

## 🌱 Future Improvements
- 🌍 Integrate real-time weather data
- 📊 Improve AI models for better yield prediction
- 📈 Expand market insights with price forecasting

