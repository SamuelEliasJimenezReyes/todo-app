import { TaskRepository } from '../domain/repositories/taskRepository';
import { Task } from '../domain/entities/task';

export class CreateTaskUseCase {
    constructor(private taskRepository: TaskRepository) { }

    async execute(title: string, description?: string): Promise<void> {
        const newTask = new Task(title, description || '');
        await this.taskRepository.save(newTask);
    }
}
