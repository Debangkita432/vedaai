<div align="center">

<!-- LOGO / BANNER PLACEHOLDER -->
<img src="./screenshots/banner.png" alt="AssignAI Banner" width="100%" />

<br/>

# ⚡ vedaAI

### *AI-Powered Assignment & Question Paper Generator*

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Redis-BullMQ-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.io-Realtime-010101?style=for-the-badge&logo=socket.io&logoColor=white" />
  <img src="https://img.shields.io/badge/Gemini_/_OpenAI-AI_Core-4285F4?style=for-the-badge&logo=google&logoColor=white" />
</p>

<p align="center">
  <a href="#-demo">View Demo</a> ·
  <a href="#-features">Features</a> ·
  <a href="#-architecture">Architecture</a> ·
  <a href="#-quick-start">Quick Start</a> ·
  <a href="#-api-reference">API Docs</a>
</p>

<br/>

> **AssignAI** is a production-grade SaaS platform that lets educators generate structured, AI-powered assignments and question papers in seconds — with real-time progress tracking, queue-based processing, and beautiful exam-style rendering.

</div>

---

## 📌 Table of Contents

- [Problem Statement](#-problem-statement)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture & Workflow](#-architecture--workflow)
- [Folder Structure](#-folder-structure)
- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)
- [API Flow](#-api-flow)
- [Queue Workflow](#-queue-workflow)
- [WebSocket Explanation](#-websocket-explanation)
- [Why Redis & BullMQ?](#-why-redis--bullmq)
- [Screenshots](#-screenshots)
- [Future Improvements](#-future-improvements)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Problem Statement

Creating high-quality, well-structured assignments and question papers is a time-consuming task for educators. Teachers often spend hours:

- Crafting questions across different difficulty levels
- Ensuring proper coverage of topics and syllabus
- Formatting papers to institutional standards
- Managing multiple class assignments simultaneously

**AssignAI eliminates this bottleneck** by leveraging LLMs (Gemini / OpenAI) to generate fully structured, syllabus-aligned question papers in seconds — all via an intuitive SaaS dashboard with real-time progress updates and professional PDF export.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **AI Generation** | Generate complete question papers using Gemini or OpenAI APIs |
| ⚡ **Real-Time Progress** | Live generation status via WebSocket (Socket.io) |
| 🗂️ **Queue Architecture** | Async job processing with BullMQ + Redis for reliability |
| 📄 **Exam-Style Rendering** | Beautiful, institutional-style question paper UI |
| 📤 **PDF Export** | One-click export to professionally formatted PDF |
| 📁 **File Upload** | Attach syllabus/reference documents to guide AI generation |
| 📊 **Analytics Dashboard** | Cards showing usage stats, generation history, and more |
| 🔒 **Auth & Multi-Tenancy** | Secure teacher accounts with isolated data |
| 📱 **Responsive Design** | Fully mobile-friendly SaaS dashboard |
| 🧠 **Structured JSON Parsing** | Robust AI output parsing into typed data structures |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework with App Router & Server Components |
| **TypeScript** | End-to-end type safety |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Accessible, composable UI components |
| **Framer Motion** | Fluid animations and page transitions |
| **Zustand** | Lightweight global state management |
| **Socket.io Client** | Real-time WebSocket communication |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js + Express** | REST API server |
| **MongoDB + Mongoose** | Primary data persistence |
| **Redis** | Job queue backing store & caching |
| **BullMQ** | Robust async job queue management |
| **Socket.io** | Bidirectional real-time communication |
| **Gemini / OpenAI API** | LLM-powered content generation |
| **Multer** | File upload handling |
| **Puppeteer / jsPDF** | PDF generation and export |

---

## 🏗️ Architecture & Workflow

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENT (Next.js 15)                        │
│                                                                     │
│   ┌─────────────┐    ┌──────────────┐    ┌────────────────────┐    │
│   │ Assignment  │    │  Dashboard   │    │  Exam Paper Viewer │    │
│   │    Form     │    │  Analytics   │    │   (PDF Export)     │    │
│   └──────┬──────┘    └──────────────┘    └────────────────────┘    │
│          │                                          ▲               │
│          │ HTTP POST                    WebSocket   │               │
│          ▼                              Events      │               │
└──────────┼──────────────────────────────────────────┼──────────────┘
           │                                          │
           ▼                                          │
┌─────────────────────────────────────────────────────────────────────┐
│                       BACKEND (Express + Node.js)                   │
│                                                                     │
│   ┌───────────────┐    ┌───────────────┐    ┌──────────────────┐   │
│   │  REST API     │───▶│  BullMQ Queue │    │  Socket.io Server│   │
│   │  /api/v1/...  │    │  (Job Creator)│    │  (Event Emitter) │   │
│   └───────────────┘    └───────┬───────┘    └──────────────────┘   │
│                                │                       ▲            │
│                                ▼                       │            │
│   ┌───────────────────────────────────────────────┐    │            │
│   │              REDIS (Queue Store)              │    │            │
│   │  job:pending → job:active → job:completed     │    │            │
│   └───────────────────────────┬───────────────────┘    │            │
│                                │                       │            │
│                                ▼                       │            │
│   ┌───────────────────────────────────────────────┐    │            │
│   │              WORKER PROCESS                   │────┘            │
│   │  1. Dequeue Job                               │                 │
│   │  2. Call Gemini / OpenAI API                  │                 │
│   │  3. Parse Structured JSON Response            │                 │
│   │  4. Save to MongoDB                           │                 │
│   │  5. Emit Socket.io Events                     │                 │
│   └───────────────────────────────────────────────┘                │
│                                                                     │
│   ┌───────────────────────────────────────────────┐                │
│   │              MONGODB (Atlas)                  │                │
│   │  assignments, users, papers, analytics        │                │
│   └───────────────────────────────────────────────┘                │
└─────────────────────────────────────────────────────────────────────┘
```

### Main Generation Flow

```
Teacher fills form
      │
      ▼
POST /api/v1/assignments
      │
      ▼
Express validates request
      │
      ▼
Job enqueued in BullMQ (Redis)
      │
      ├─── Response: { jobId, status: "queued" }
      │
      ▼                                   ┌──────────────────────────┐
Worker picks up job ─────────────────────▶│  AI API (Gemini/OpenAI)  │
      │                                   │  Returns structured JSON │
      │◀──────────────────────────────────┘
      │
      ▼
Parse + validate JSON schema
      │
      ▼
Save assignment to MongoDB
      │
      ▼
Emit Socket event → client
      │
      ▼
Frontend renders exam-paper UI
```

---

## 📁 Folder Structure

```
assignai/
│
├── apps/
│   ├── web/                          # Next.js 15 Frontend
│   │   ├── app/
│   │   │   ├── (auth)/               # Auth pages (login, register)
│   │   │   ├── (dashboard)/          # Protected dashboard routes
│   │   │   │   ├── page.tsx          # Dashboard home
│   │   │   │   ├── assignments/      # Assignment list + detail
│   │   │   │   ├── create/           # New assignment form
│   │   │   │   └── analytics/        # Analytics view
│   │   │   ├── layout.tsx
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── ui/                   # shadcn/ui primitives
│   │   │   ├── assignment-form/      # Multi-step creation form
│   │   │   ├── exam-paper/           # Exam-style rendering
│   │   │   ├── progress-tracker/     # Real-time generation status
│   │   │   ├── analytics/            # Dashboard cards & charts
│   │   │   └── layout/               # Sidebar, Navbar, etc.
│   │   ├── hooks/
│   │   │   ├── useSocket.ts          # Socket.io connection hook
│   │   │   ├── useAssignment.ts      # Assignment CRUD hook
│   │   │   └── useGeneration.ts      # Real-time generation state
│   │   ├── store/
│   │   │   ├── assignmentStore.ts    # Zustand: assignment state
│   │   │   └── uiStore.ts            # Zustand: UI state
│   │   ├── lib/
│   │   │   ├── api.ts                # Axios instance + interceptors
│   │   │   └── utils.ts
│   │   └── types/
│   │       └── index.ts              # Shared TypeScript types
│   │
│   └── server/                       # Express + Node.js Backend
│       ├── src/
│       │   ├── api/
│       │   │   ├── routes/
│       │   │   │   ├── assignments.ts
│       │   │   │   ├── auth.ts
│       │   │   │   └── analytics.ts
│       │   │   ├── controllers/
│       │   │   │   ├── assignmentController.ts
│       │   │   │   └── authController.ts
│       │   │   └── middleware/
│       │   │       ├── auth.ts
│       │   │       ├── validate.ts
│       │   │       └── upload.ts
│       │   ├── workers/
│       │   │   ├── assignmentWorker.ts  # BullMQ worker
│       │   │   └── pdfWorker.ts         # PDF generation worker
│       │   ├── queues/
│       │   │   ├── assignmentQueue.ts   # BullMQ queue definition
│       │   │   └── index.ts
│       │   ├── services/
│       │   │   ├── aiService.ts         # Gemini / OpenAI integration
│       │   │   ├── parserService.ts     # JSON response parser
│       │   │   └── pdfService.ts        # PDF export service
│       │   ├── models/
│       │   │   ├── Assignment.ts        # Mongoose schema
│       │   │   ├── User.ts
│       │   │   └── Paper.ts
│       │   ├── socket/
│       │   │   └── socketHandler.ts     # Socket.io event handlers
│       │   ├── config/
│       │   │   ├── db.ts                # MongoDB connection
│       │   │   ├── redis.ts             # Redis connection
│       │   │   └── env.ts               # Env validation (Zod)
│       │   └── index.ts                 # App entry point
│       └── package.json
│
├── packages/
│   └── shared/                       # Shared types & schemas
│       ├── types/
│       └── schemas/
│
├── docker-compose.yml                # Local dev: Redis + MongoDB
├── .env.example
├── turbo.json                        # Turborepo config (monorepo)
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18.x
- **pnpm** ≥ 8.x (or npm/yarn)
- **Docker** (for local Redis + MongoDB, recommended)
- Gemini or OpenAI API key

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/assignai.git
cd assignai
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Infrastructure (Redis + MongoDB via Docker)

```bash
docker-compose up -d
```

This spins up:
- **Redis** on `localhost:6379`
- **MongoDB** on `localhost:27017`

### 4. Configure Environment Variables

```bash
cp .env.example apps/web/.env.local
cp .env.example apps/server/.env
```

Fill in the required values (see [Environment Variables](#-environment-variables)).

### 5. Run Development Servers

```bash
# Run everything in parallel (Turborepo)
pnpm dev

# Or individually:
pnpm --filter web dev        # Frontend → http://localhost:3000
pnpm --filter server dev     # Backend  → http://localhost:4000
pnpm --filter server worker  # BullMQ Worker
```

---

## 🔐 Environment Variables

### `apps/web/.env.local`

```env
# Backend API
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1

# WebSocket
NEXT_PUBLIC_SOCKET_URL=http://localhost:4000

# Auth (NextAuth.js or custom)
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### `apps/server/.env`

```env
# Server
PORT=4000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/assignai

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# AI Providers (use one or both)
GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key
AI_PROVIDER=gemini                    # "gemini" | "openai"

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

# File Upload
MAX_FILE_SIZE_MB=10
UPLOAD_DIR=./uploads

# PDF Export
PDF_EXPORT_DIR=./exports
```

---

## 📡 API Flow

### Base URL: `/api/v1`

#### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/auth/register` | Register a new teacher account |
| `POST` | `/auth/login` | Login and receive JWT |
| `POST` | `/auth/logout` | Invalidate session |

#### Assignments

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/assignments` | Create new assignment (enqueues AI job) |
| `GET` | `/assignments` | List all assignments for current user |
| `GET` | `/assignments/:id` | Get assignment detail + generated paper |
| `DELETE` | `/assignments/:id` | Delete assignment |
| `GET` | `/assignments/:id/export` | Export paper as PDF |

#### Jobs

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/jobs/:jobId/status` | Poll job status (fallback for WebSocket) |

#### Analytics

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/analytics/summary` | Usage stats, total generations, etc. |
| `GET` | `/analytics/history` | Time-series generation history |

---

### Assignment Creation Payload

```json
POST /api/v1/assignments
Content-Type: application/json
Authorization: Bearer <token>

{
  "title": "Chapter 5: Organic Chemistry",
  "subject": "Chemistry",
  "class": "Grade 11",
  "totalMarks": 80,
  "duration": "3 hours",
  "difficulty": "medium",
  "questionTypes": ["mcq", "short_answer", "long_answer"],
  "topics": ["Hydrocarbons", "Functional Groups", "IUPAC Nomenclature"],
  "instructions": "All sections are compulsory.",
  "syllabusFileId": "optional_uploaded_file_id"
}
```

### AI Response JSON Schema (parsed from LLM output)

```json
{
  "paperTitle": "Chemistry — Chapter 5 Test",
  "subject": "Chemistry",
  "class": "Grade 11",
  "totalMarks": 80,
  "duration": "3 hours",
  "sections": [
    {
      "sectionName": "Section A — Multiple Choice",
      "marks": 20,
      "questions": [
        {
          "questionNumber": 1,
          "type": "mcq",
          "text": "Which of the following is an alkane?",
          "options": ["C2H4", "C2H6", "C2H2", "C6H6"],
          "answer": "C2H6",
          "marks": 1
        }
      ]
    },
    {
      "sectionName": "Section B — Short Answer",
      "marks": 30,
      "questions": [
        {
          "questionNumber": 21,
          "type": "short_answer",
          "text": "Define IUPAC nomenclature with an example.",
          "marks": 3,
          "expectedWordCount": 80
        }
      ]
    }
  ]
}
```

---

## 🔄 Queue Workflow

AssignAI uses **BullMQ** backed by **Redis** for reliable async job processing.

```
┌─────────────────────────────────────────────────────────────┐
│                     JOB LIFECYCLE                           │
│                                                             │
│  API Request                                                │
│      │                                                      │
│      ▼                                                      │
│  ┌─────────┐    ┌──────────┐    ┌──────────┐    ┌──────┐   │
│  │ waiting │───▶│  active  │───▶│completed │    │failed│   │
│  └─────────┘    └──────────┘    └──────────┘    └──────┘   │
│                      │                               │      │
│               Worker processes              Retry logic     │
│               (max concurrency: 5)          (3 attempts)    │
└─────────────────────────────────────────────────────────────┘
```

#### Queue Configuration (`assignmentQueue.ts`)

```typescript
import { Queue, Worker, QueueEvents } from 'bullmq';
import { redisConnection } from '../config/redis';

export const assignmentQueue = new Queue('assignment-generation', {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: 'exponential', delay: 2000 },
    removeOnComplete: { count: 100 },
    removeOnFail: { count: 50 },
  },
});
```

#### Worker (`assignmentWorker.ts`)

```typescript
export const assignmentWorker = new Worker(
  'assignment-generation',
  async (job) => {
    const { assignmentId, payload } = job.data;

    // Step 1: Update progress
    await job.updateProgress(10);
    emitSocketEvent(assignmentId, 'progress', { step: 'Preparing prompt', progress: 10 });

    // Step 2: Generate with AI
    const rawResponse = await aiService.generate(payload);
    await job.updateProgress(60);
    emitSocketEvent(assignmentId, 'progress', { step: 'AI generating...', progress: 60 });

    // Step 3: Parse structured JSON
    const parsed = parserService.parse(rawResponse);
    await job.updateProgress(80);

    // Step 4: Save to MongoDB
    await Assignment.findByIdAndUpdate(assignmentId, {
      paper: parsed,
      status: 'completed',
    });
    await job.updateProgress(100);

    emitSocketEvent(assignmentId, 'completed', { assignmentId });
  },
  { connection: redisConnection, concurrency: 5 }
);
```

---

## 🔌 WebSocket Explanation

AssignAI uses **Socket.io** for real-time bi-directional communication between the backend worker and the frontend client.

### Connection Flow

```
Client                                      Server
  │                                           │
  │──── connect ──────────────────────────────▶│
  │                                           │
  │──── subscribe:job { jobId } ──────────────▶│  (join room: job:{jobId})
  │                                           │
  │◀─── progress { step, percent } ───────────│  (emitted by worker)
  │◀─── progress { step, percent } ───────────│
  │◀─── completed { assignmentId } ───────────│
  │                                           │
  │  (frontend fetches final paper via REST)  │
```

### Server-Side Event Emission

```typescript
// socket/socketHandler.ts
export const emitSocketEvent = (
  jobId: string,
  event: 'progress' | 'completed' | 'failed',
  data: object
) => {
  io.to(`job:${jobId}`).emit(event, data);
};
```

### Client-Side Hook (`useSocket.ts`)

```typescript
export const useGenerationProgress = (jobId: string) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<'idle' | 'processing' | 'done' | 'error'>('idle');

  useEffect(() => {
    const socket = getSocket();
    socket.emit('subscribe:job', { jobId });

    socket.on('progress', ({ step, percent }) => {
      setProgress(percent);
      setStatus('processing');
    });

    socket.on('completed', () => {
      setProgress(100);
      setStatus('done');
    });

    return () => socket.off();
  }, [jobId]);

  return { progress, status };
};
```

---

## ⚡ Why Redis & BullMQ?

AI generation is **slow and unpredictable** — it can take 5–30 seconds per request. Handling this synchronously in an HTTP request would:

- ❌ Timeout after 30s (most reverse proxies)
- ❌ Block the event loop under concurrent load
- ❌ Lose progress on server restart
- ❌ Provide no retry mechanism on failure

**Redis + BullMQ solves all of these:**

| Challenge | Solution |
|---|---|
| Long-running AI calls | Jobs are async; HTTP returns immediately with `jobId` |
| Server crashes | Jobs persist in Redis; resume automatically on restart |
| High concurrency | Workers process with configurable `concurrency` limit |
| Failures | Automatic exponential-backoff retries (3 attempts) |
| Monitoring | Built-in job states: `waiting → active → completed/failed` |
| Rate limiting | Queue naturally throttles AI API calls |

> BullMQ is chosen over alternatives (Bee-Queue, Agenda, etc.) for its TypeScript-first API, robust retry semantics, job priority support, and active maintenance.



## 🔭 Future Improvements

- [ ] **Multi-language support** — Generate papers in regional languages
- [ ] **Bloom's Taxonomy tagging** — Tag each question by cognitive level
- [ ] **Collaborative editing** — Multiple teachers edit paper in real-time
- [ ] **LMS integrations** — Export to Google Classroom, Moodle, Canvas
- [ ] **Answer key generation** — Auto-generate answer keys and marking rubrics
- [ ] **Image-based questions** — Support diagrams and figures in questions
- [ ] **Question bank** — Save and reuse previously generated questions
- [ ] **Plagiarism check** — Cross-check questions against existing banks
- [ ] **Fine-tuned model** — Domain-specific fine-tuning on educational content
- [ ] **Stripe billing** — Usage-based pricing for SaaS monetization
- [ ] **Admin panel** — Super-admin view for platform management
- [ ] **Email notifications** — Notify teacher when paper is ready
- [ ] **Bull Board UI** — Visual queue monitoring dashboard

---

## 🚢 Deployment

### Docker Compose (Production)

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Environment Setup

| Service | Recommended Platform |
|---|---|
| **Frontend (Next.js)** | Vercel / Railway |
| **Backend (Express)** | Railway / Render / EC2 |
| **Worker** | Railway (separate service) |
| **MongoDB** | MongoDB Atlas |
| **Redis** | Upstash Redis / Redis Cloud |
| **File Storage** | Cloudflare R2 / AWS S3 |

### Vercel Deployment (Frontend)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd apps/web
vercel --prod
```

Set all `NEXT_PUBLIC_*` environment variables in Vercel dashboard.

### Railway Deployment (Backend + Worker)

1. Create two Railway services: `server` and `worker`
2. Connect your GitHub repo
3. Set root directory to `apps/server`
4. Set start commands:
   - **Server**: `pnpm start`
   - **Worker**: `pnpm worker`
5. Add environment variables from `.env.example`
6. Provision Redis and link it (Railway plugin)

### Health Check Endpoint

```
GET /api/v1/health

{
  "status": "ok",
  "timestamp": "2025-01-01T00:00:00.000Z",
  "services": {
    "mongodb": "connected",
    "redis": "connected",
    "queue": "active"
  }
}
```

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

```bash
# 1. Fork the repo
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m 'feat: add amazing feature'

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

Made with ❤️ by educators, for educators.

**[⬆ Back to Top](#-assignai)**

</div>
