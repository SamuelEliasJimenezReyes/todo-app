import React from 'react';

type InputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, type = 'text' }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="border border-gray-300 rounded px-4 py-2 w-full"
        />
    );
};

export default Input;
