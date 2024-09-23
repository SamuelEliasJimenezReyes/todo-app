// src/ui/components/organisms/TaskItem.tsx

import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

type TaskItemProps = {
    title: string;
    description?: string;
    onComplete: () => void;
    onEdit: (newTitle: string, newDescription?: string) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ title, description, onComplete, onEdit }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [newTitle, setNewTitle] = React.useState(title);
    const [newDescription, setNewDescription] = React.useState(description || '');

    const handleEdit = () => {
        onEdit(newTitle, newDescription);
        setIsEditing(false);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
            {isEditing ? (
                <>
                    <Input
                        value={newTitle}
                        onChange={e => setNewTitle(e.target.value)}
                        placeholder="Edit task title"
                    />
                    <Input
                        value={newDescription}
                        onChange={e => setNewDescription(e.target.value)}
                        placeholder="Edit task description"
                        type="text"
                    />
                    <Button
                        onClick={handleEdit}
                        label="Save"
                        className="bg-blue-500 text-white mt-2 hover:bg-blue-600"
                    />
                </>
            ) : (
                <>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    {description && <p className="text-gray-600 mb-4">{description}</p>}
                    <Button
                        onClick={onComplete}
                        label="Complete"
                        className="bg-green-500 text-white mr-2 hover:bg-green-600"
                    />
                    <Button
                        onClick={() => setIsEditing(true)}
                        label="Edit"
                        className="bg-yellow-500 text-white hover:bg-yellow-600"
                    />
                </>
            )}
        </div>
    );
};

export default TaskItem;
