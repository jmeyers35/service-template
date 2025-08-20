# Service Template

A modern, production-ready service template with Next.js frontend, FastAPI backend, and Supabase database. Designed for rapid development and easy deployment.

## 🚀 Features

- **Frontend**: Next.js 15 with TypeScript, Tailwind CSS, and TanStack Query
- **Backend**: FastAPI with Python 3.11+ and async/await support
- **Database**: Supabase with PostgreSQL, Auth, and Real-time subscriptions
- **Development**: Docker Compose for local development with hot reload
- **Tooling**: mise for task automation and environment management
- **Testing**: Jest for frontend, pytest for backend
- **Deployment**: Ready for Vercel (frontend) and Railway (backend)
- **Type Safety**: Full TypeScript support across the stack

## 📋 Prerequisites

- [mise](https://mise.jdx.dev/) - For tool and environment management
- [Docker](https://docker.com) - For local development
- [Supabase CLI](https://supabase.com/docs/guides/cli) - For database management

## 🏁 Quick Start

1. **Clone and setup**:
   ```bash
   git clone <your-repo>
   cd service-template
   mise install
   ```

2. **Initialize Supabase** (if not already done):
   ```bash
   supabase init
   ```

3. **First-time setup**:
   ```bash
   mise setup
   ```

4. **Start development**:
   ```bash
   mise dev
   ```

5. **Visit your services**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - Supabase Studio: http://localhost:54323

## 🛠 Development

### Available Commands

Run `mise help` to see all available commands:

```bash
# Development
mise dev      # Start all services in Docker
mise local    # Run frontend/backend locally (faster)
mise stop     # Stop all services
mise reset    # Reset database and containers

# Quality Assurance
mise test     # Run all tests
mise lint     # Run all linting
mise typecheck # Run type checking
mise check    # Run lint + typecheck + test

# Dependencies
mise deps     # Install all dependencies
mise deps-update # Update all dependencies
```

### Project Structure

```
service-template/
├── frontend/                 # Next.js application
│   ├── app/                 # Next.js 15 app router
│   ├── components/          # Reusable components
│   ├── lib/                 # Utilities and configs
│   └── __tests__/           # Frontend tests
├── backend/                 # FastAPI application
│   ├── src/                 # Python source code
│   └── tests/               # Backend tests
├── supabase/                # Database configuration
│   ├── migrations/          # Database migrations
│   └── config.toml          # Supabase settings
├── scripts/                 # Automation scripts
├── docker-compose.yml       # Local development orchestration
├── mise.toml               # Development tooling configuration
└── .env.example            # Environment variables template
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Supabase (auto-configured by setup script)
NEXT_PUBLIC_SUPABASE_URL=http://host.docker.internal:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key

# Application
APP_NAME=Service Template
APP_URL=http://localhost:3000
API_URL=http://localhost:8000

# External services (add as needed)
# OPENAI_API_KEY=your-openai-key
# STRIPE_SECRET_KEY=your-stripe-key
```

### Database Migrations

Create a new migration:
```bash
supabase migration new your_migration_name
```

Apply migrations:
```bash
supabase db reset  # Apply all migrations
```

## 🚢 Deployment

### Frontend (Vercel)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-production-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-production-anon-key
   ```
3. Deploy automatically on push to main

### Backend (Railway)

1. Connect your repository to Railway
2. Set the start command: `uv run python -m src.main`
3. Set environment variables:
   ```
   SUPABASE_URL=your-production-supabase-url
   SUPABASE_SERVICE_KEY=your-production-service-key
   ENVIRONMENT=production
   ```
4. Deploy automatically on push to main

### Database (Supabase)

1. Create a new project at [supabase.com](https://supabase.com)
2. Link your local project:
   ```bash
   supabase link --project-ref your-project-id
   ```
3. Push your schema:
   ```bash
   supabase db push
   ```

## 🧪 Testing

### Frontend Tests
```bash
cd frontend
npm test                # Run tests once
npm run test:watch     # Run tests in watch mode
```

### Backend Tests
```bash
cd backend
uv run pytest         # Run all tests
uv run pytest -v      # Verbose output
uv run pytest tests/test_main.py  # Run specific test file
```

## 🔧 Customization

### Frontend
- Modify `frontend/app/page.tsx` for your landing page
- Add components in `frontend/components/`
- Configure Tailwind in `frontend/tailwind.config.ts`

### Backend
- Add routes in `backend/src/main.py`
- Create new modules in `backend/src/`
- Configure dependencies in `backend/pyproject.toml`

### Database
- Add migrations in `supabase/migrations/`
- Configure Supabase in `supabase/config.toml`

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and add tests
4. Run quality checks: `mise check`
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Supabase Documentation](https://supabase.com/docs)
- [mise Documentation](https://mise.jdx.dev/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [troubleshooting section](#troubleshooting)
2. Search existing issues
3. Create a new issue with detailed information

### Troubleshooting

**Docker containers won't start:**
- Ensure Docker is running
- Try `mise clean` to reset containers

**Supabase connection issues:**
- Verify Supabase is running: `supabase status`
- Check environment variables in `.env.local`

**Port conflicts:**
- Stop other services using ports 3000, 8000, 54321-54324
- Or modify ports in docker-compose.yml and configs

**Permission errors:**
- Ensure Docker has proper permissions
- On Linux/Mac, you may need to run with sudo