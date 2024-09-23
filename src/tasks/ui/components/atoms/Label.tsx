import React from 'react';

type LabelProps = {
    text: string;
};

const Label: React.FC<LabelProps> = ({ text }) => {
    return (
        <label className="block text-gray-700 mb-2">{text}</label>
    );
};

export default Label;
