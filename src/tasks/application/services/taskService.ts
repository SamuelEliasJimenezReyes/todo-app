import { TaskRepository } from '../../domain/repositories/taskRepository';
import { Task } from '../../domain/entities/task';

export class TaskService {
    constructor(private taskRepository: TaskRepository) { }

    async getPendingTasks(): Promise<Task[]> {
        return await this.taskRepository.findByStatus('pending');
    }

    async getCompletedTasks(): Promise<Task[]> {
        return await this.taskRepository.findByStatus('completed');
    }

    async renameTask(taskId: string, newTitle: string): Promise<void> {
        const task = await this.taskRepository.findById(taskId);
        if (!task) {
            throw new Error('Task not found');
        }

        task.updateTitle(newTitle);
        await this.taskRepository.save(task);
    }
}
