import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
    private tasks: Task[] = [];
    private idCounter = 1;


    createTask(dto: CreateTaskDto): Task {
        const task: Task = {
            id: this.idCounter++,
            title: dto.title,
            description: dto.description,
        };
        this.tasks.push(task);
        return task;
    }


    getAllTasks(): Task[] {
        return this.tasks;
    }

    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

}
