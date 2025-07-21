import React from 'react';

interface InputBoxProps {
  label?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const InputBox = ({label,type = 'text',name,value,onChange,placeholder = '',required = false,className = '',}:InputBoxProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-1 font-medium text-text">
          {label } <span className='text-red-600'>{required && " *"}</span>
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-text"
      />
    </div>
  );
};

export default InputBox;
