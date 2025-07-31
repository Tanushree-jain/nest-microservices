import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(@Inject('TASK_SERVICE') private client: ClientProxy) {}

  async createTask(dto: CreateTaskDto) {
    return this.client.send('create_task', dto);
  }

  async getTasks() {
    return this.client.send('get_tasks', {});
  }

  async deleteTask(id: string) {
    return this.client.send('delete_task', { id });
  }
}
