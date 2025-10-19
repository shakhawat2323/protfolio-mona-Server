# 🧑‍💻 Shakhawat Portfolio System

A **Full-Stack Personal Portfolio** System built with Next.js (Frontend) and Express.js (Backend) — featuring dynamic content management for blogs, projects, skills, and about sections.

This system includes both Admin Dashboard and Public Portfolio View, making it perfect for developers who want full control over their personal site.

---

## ✨ Features

- 🔑 **⚡ Next.js (TypeScript) with Tailwind CSS & App Router**
- 🛡 **Role-based Authorization**
- 👛 **ISR (Incremental Static Regeneration) for Blogs Projects**
- 💸 **🔐 Owner Dashboard — create, update, delete blogs & projects**
- 📜 **📱 Fully Responsive UI (ShadCN + Tailwind components)**
- 👑 **Admin Controls**: Blog Create , Post,
- 📧 **✨ Rich UX: modals, skeleton loading, Framer Motion animations, react-hot-toast notifications**

---

## 🚀 Live Demo

🔗 **Live API**: [Protfolio](https://protfolio-mona.vercel.app)

---

## 🛠 Tech Stack

| Layer      | Technology              |
| ---------- | ----------------------- |
| Backend    | Node.js, Express.js     |
| Language   | TypeScript              |
| Database   | PostgreSQL + Prisma ORM |
| Validation | Zod                     |
| Auth       | JWT + Next-auth         |
| Deployment | Vercel                  |
| Tools      | Postman, VS Code,       |

---

## 📌 API Endpoints

### 🏠 Root

| Method | Endpoint | Description      |
| ------ | -------- | ---------------- |
| GET    | `/`      | API Health Check |

---

## 📝 Example Request

## 📌 User Registration API

- Route

# 1️⃣ Clone the repository

```http
https://github.com/shakhawat2323/protfolio-mona-Server.git
```

# 2️⃣ Navigate into folder

```http
cd Protfolio
```

# 3️⃣ Install dependencies

```http
pnpm install
```

# 4️⃣ Setup environment variables

```http
cp .env.example .env
```

# 5️⃣ Run Prisma migrations

```http
pnpm prisma migrate dev
```

# 6️⃣ Start the server

```http
pnpm run dev
```
