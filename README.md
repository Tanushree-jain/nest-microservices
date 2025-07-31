## 📝 Task Management Microservice with Redis and NestJS

This project demonstrates a basic microservices architecture using NestJS and Redis as the transport layer. It includes:

📡 API Gateway (HTTP server)

🔧 Task Microservice (handles task logic)

🔁 Redis for communication between services

### 📁 Project Structure

```lua
.
├── api-gateway/
│   ├── main.ts
│   ├── app.module.ts
│   └── tasks/
│       ├── task.controller.ts
│       ├── task.service.ts
│       ├── task.module.ts
│       └── dto/
│           └── create-task.dto.ts
│
├── task-service/
│   ├── main.ts
│   ├── app.module.ts
│   └── tasks/
│       ├── task.controller.ts
│       ├── task.service.ts
│       ├── task.module.ts
│       ├── task.model.ts
│       └── dto/
│           └── create-task.dto.ts
```

### ⚙️ How It Works
1. Client sends an HTTP request to api-gateway.

2. api-gateway forwards the message to task-service using Redis.

3. task-service performs logic (create/get/delete task) and sends the response back to the gateway.

4. api-gateway returns the response to the client.

### 🚀 Running the Project
Prerequisites
Node.js v18+ or v20

Redis (running on localhost:6379)

NestJS CLI (npm i -g @nestjs/cli)

1. Start Redis

```bash
# On Ubuntu
sudo systemctl start redis

# Or use Docker
docker run -d -p 6379:6379 redis
```
2. Start Task Microservice

```bash
cd task-service
npm install
npm run start
```

3. Start API Gateway

```bash
cd api-gateway
npm install
npm run start
```

### 📫 API Endpoints (API Gateway - Port 3000)
| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/tasks`     | Create a new task |
| GET    | `/tasks`     | Get all tasks     |
| DELETE | `/tasks/:id` | Delete task by ID |

### 📦 Example Request (POST /tasks)

```json
{
  "title": "Learn Redis Microservices",
  "description": "Understand message patterns in NestJS"
}
```

### 🛠 Tech Stack
- NestJS
- Redis (as message broker)
- RxJS (for async messaging)
- Docker (optional for Redis)

### 🧑‍💻 Author
Tanushree Gangwal