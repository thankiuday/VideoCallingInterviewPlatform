# Video Calling Interview Platform

## Deploy to Render

### 1. Prepare the project
- Make sure the frontend is built successfully.
- Ensure the backend can serve the built React app from the frontend dist folder.

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "Prepare app for Render"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 3. Deploy on Render
1. Go to https://render.com
2. Click New + > Web Service
3. Connect your GitHub repository
4. Choose the repository
5. Render will use the included render.yaml file
6. Click Create Web Service

### 4. Add environment variables in Render
In the Render dashboard, add these variables:
- NODE_ENV = production
- PORT = 10000
- DB_URL = your_mongodb_connection_string

### 5. Start the app
Render will run:
```bash
npm run start --prefix backend
```

Your app will be available at the Render URL.
