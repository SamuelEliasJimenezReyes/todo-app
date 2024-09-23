import { TaskRepository } from '../../domain/repositories/taskRepository';
import { Task } from '../../domain/entities/task';

export class TaskRepositoryImpl implements TaskRepository {
    private tasks: Task[] = [];

    async save(task: Task): Promise<void> {
        const existingTaskIndex = this.tasks.findIndex(t => t.id === task.id);
        if (existingTaskIndex >= 0) {
            this.tasks[existingTaskIndex] = task;
        } else {
            this.tasks.push(task);
        }
    }

    async findById(id: string): Promise<Task | null> {
        return this.tasks.find(task => task.id === id) || null;
    }

    async findAll(): Promise<Task[]> {
        return this.tasks;
    }

    async findByStatus(status: 'pending' | 'completed'): Promise<Task[]> {
        return this.tasks.filter(task => task.status === status);
    }

    async delete(task: Task): Promise<void> {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
    }
}
