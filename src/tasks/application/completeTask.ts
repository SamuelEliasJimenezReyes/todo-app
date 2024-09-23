import { TaskRepository } from '../domain/repositories/taskRepository';

export class CompleteTaskUseCase {
    constructor(private taskRepository: TaskRepository) { }

    async execute(taskId: string): Promise<void> {
        const task = await this.taskRepository.findById(taskId);
        if (!task) {
            throw new Error('Task not found');
        }

        task.complete();
        await this.taskRepository.save(task);
    }
}
