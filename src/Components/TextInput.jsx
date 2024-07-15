import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', handleChangeForm, value, inputKey ,isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (input.current && value) {
            input.current.value = value;
          }
    }, [value]);
    const handleInputChange = (e) => {
        const { value } = e.target;
        handleChangeForm(inputKey, value);
    };
    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
            onChange={handleInputChange}
            required
        />
    );
});
