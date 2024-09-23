import { Task } from '../entities/task';

export interface TaskRepository {
    save(task: Task): Promise<void>;
    findById(id: string): Promise<Task | null>;
    findAll(): Promise<Task[]>;
    findByStatus(status: string): Promise<Task[]>;
    delete(task: Task): Promise<void>;
}
