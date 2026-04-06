## Render + Vercel Deployment

### Backend on Render

Create a new Render Web Service from this repository.

- Runtime: `Python`
- Build Command: `pip install -r backend/requirements.txt`
- Start Command: `cd backend && uvicorn server:app --host 0.0.0.0 --port $PORT`
- Health Check Path: `/api/`

Set these environment variables in Render:

```env
MONGO_URL=your-mongodb-atlas-connection-string
DB_NAME=panshi_restaurant
JWT_SECRET=your-long-random-secret
APP_ENV=production
CORS_ALLOW_ORIGINS=https://your-frontend-domain.vercel.app
COOKIE_SECURE=true
COOKIE_SAMESITE=none
CREATE_ADMIN_ON_STARTUP=false
ENABLE_SEEDING=false
WRITE_TEST_CREDENTIALS=false
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=your-strong-admin-password
```

Optional:

- `COOKIE_DOMAIN` only if you intentionally need a fixed cookie domain.

### Frontend on Vercel

Create a Vercel project from the same repository and set the Root Directory to `frontend`.

Set this environment variable in Vercel:

```env
REACT_APP_BACKEND_URL=https://your-render-backend.onrender.com
```

### Important Notes

- Rotate your MongoDB password before production if the current one has been shared.
- Use the final Vercel production domain in `CORS_ALLOW_ORIGINS`.
- If you also want Vercel preview deployments to work against the backend, add those preview domains to `CORS_ALLOW_ORIGINS` as a comma-separated list.
