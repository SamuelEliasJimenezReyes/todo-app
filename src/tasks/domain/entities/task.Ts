// src/tasks/domain/entities/task.ts

export class Task {
    constructor(
        public id: string,
        public title: string,
        public description: string = '',
        public status: 'pending' | 'completed' = 'pending',

    ) { }

    complete() {
        this.status = 'completed';
    }

    updateTitle(newTitle: string) {
        if (!newTitle || newTitle.trim().length === 0) {
            throw new Error('Title cannot be empty');
        }
        this.title = newTitle;
    }
}

