# PrepVision

## Tech Stack

| Layer          | Technology                        |
|----------------|-----------------------------------|
| Frontend       | React.js, Tailwind CSS            |
| Backend        | Python Flask                      |
| File Storage   | Cloudinary                        |
| Database       | MongoDB (Atlas)                   |


## Prerequisites

- Node.js (v16+)  
- npm or yarn  
- Python 3.9+  
- pip  
- MongoDB Atlas account   
- Cloudinary account  



### Environment Variables (.env)

Create `.env` in `backend/`:

```env

# MongoDB
MONGODB_URI=mongodb_connection_string

# Cloudinary
CLOUD_NAME=your_cloud_name
YOUR_API_KEY=your_api_key
YOUR_API_SECRET=your_api_secret
```


### Running the Project

1. Start backend:

python main.py

2. Start frontend:

cd frontend
npm run dev

3. Open `http://localhost:5173`







