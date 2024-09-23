// src/ui/components/templates/TaskPage.tsx

import React from 'react';
import TaskForm from '../molecules/TaskForm';
import TaskList from '../organisms/TaskList';

type TaskPageProps = {
    tasks: { id: string; title: string; description?: string }[];
    onAddTask: (title: string, description?: string) => void;
    onCompleteTask: (id: string) => void;
    onEditTask: (id: string, newTitle: string, newDescription?: string) => void;
};

const TaskPage: React.FC<TaskPageProps> = ({ tasks, onAddTask, onCompleteTask, onEditTask }) => {
    return (
        <div className="p-6 max-w-md mx-auto">
            <TaskForm onAddTask={onAddTask} />
            <TaskList
                tasks={tasks}
                onCompleteTask={onCompleteTask}
                onEditTask={onEditTask}
            />
        </div>
    );
};

export default TaskPage;
