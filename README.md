### 📝 Task Management Microservice with Redis and NestJS

This project demonstrates a basic microservices architecture using NestJS and Redis as the transport layer. It includes:

📡 API Gateway (HTTP server)

🔧 Task Microservice (handles task logic)

🔁 Redis for communication between services

## 📁 Project Structure

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