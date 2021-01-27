import React, {useState} from 'react';


const Form = props => {
    const [value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSubmit = () => {
        const {getWeatherAction} = props;

        getWeatherAction(value);
    };

    return (
        <div>
            <input value={value} onChange={handleChange} />
            <button onClick={handleSubmit}>Find</button>
        </div>
    )
};

export default Form;
