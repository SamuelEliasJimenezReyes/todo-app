import { TaskRepository } from '../domain/repositories/taskRepository';
import { Task } from '../domain/entities/task';

export class GetTasksUseCase {
    constructor(private taskRepository: TaskRepository) { }

    async execute(): Promise<Task[]> {
        return await this.taskRepository.findAll();
    }
}
