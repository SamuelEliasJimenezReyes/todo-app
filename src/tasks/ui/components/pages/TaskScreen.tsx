// src/ui/pages/TaskScreen.tsx

import React, { useState } from 'react';
import TaskPage from '../templates/TaskPage';

const TaskScreen: React.FC = () => {
    const [tasks, setTasks] = useState<{ id: string; title: string; description?: string }[]>([]);

    const addTask = (title: string, description?: string) => {
        const newTask = {
            id: Date.now().toString(), // Generación simple de ID
            title,
            description,
        };
        setTasks([...tasks, newTask]);
    };

    const completeTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id: string, newTitle: string, newDescription?: string) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, title: newTitle, description: newDescription } : task
        ));
    };

    return (
        <TaskPage
            tasks={tasks}
            onAddTask={addTask}
            onCompleteTask={completeTask}
            onEditTask={editTask}
        />
    );
};

export default TaskScreen;
