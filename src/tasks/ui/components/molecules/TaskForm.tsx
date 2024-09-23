

import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Label from '../atoms/Label';

type TaskFormProps = {
    onAddTask: (title: string, description?: string) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        onAddTask(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <div className="mb-6">
            <Label text="Task Title" />
            <Input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter task title"
            />
            <Label text="Task Description" />
            <Input
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Enter task description"
                type="text"
            />
            <Button
                onClick={handleSubmit}
                label="Add Task"
                className="bg-blue-500 text-white mt-4 hover:bg-blue-600"
            />
        </div>
    );
};

export default TaskForm;
