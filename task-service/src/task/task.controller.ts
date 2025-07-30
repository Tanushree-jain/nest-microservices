import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }
    @MessagePattern('create_task')
    createTask(@Payload() dto: CreateTaskDto): Task {
        return this.taskService.createTask(dto);
    }

    @MessagePattern('get_tasks')
    getTasks(): Task[] {
        return this.taskService.getAllTasks();
    }

    @MessagePattern('delete_task')
    deleteTask(@Payload() id: number): void {
        this.taskService.deleteTask(id);
    }
}
