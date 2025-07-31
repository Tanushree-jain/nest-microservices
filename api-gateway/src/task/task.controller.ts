import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() dto: CreateTaskDto) {
    console.log('Creating task with DTO:', dto);
    return this.taskService.createTask(dto);
  }

  @Get()
  getAll() {
    return this.taskService.getTasks();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
