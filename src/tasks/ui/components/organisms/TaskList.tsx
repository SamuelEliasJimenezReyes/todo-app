// src/ui/components/organisms/TaskList.tsx

import React from 'react';
import TaskItem from '../molecules/TaskItem';

type TaskListProps = {
    tasks: { id: string; title: string; description?: string }[];
    onCompleteTask: (id: string) => void;
    onEditTask: (id: string, newTitle: string, newDescription?: string) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onCompleteTask, onEditTask }) => {
    return (
        <div className="space-y-4">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    onComplete={() => onCompleteTask(task.id)}
                    onEdit={(newTitle, newDescription) => onEditTask(task.id, newTitle, newDescription)}
                />
            ))}
        </div>
    );
};

export default TaskList;
