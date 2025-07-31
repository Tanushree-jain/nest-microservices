import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
   @ApiOperation({ summary: 'Create a new task' })
  create(@Body() dto: CreateTaskDto) {
    console.log('Creating task with DTO:', dto);
    return this.taskService.createTask(dto);
  }

  @Get()
   @ApiOperation({ summary: 'Get all tasks' })
  getAll() {
    return this.taskService.getTasks();
  }

  @Delete(':id')
   @ApiOperation({ summary: 'Delete a task by ID' })
  @ApiParam({ name: 'id', example: 'abc123' })
  delete(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
