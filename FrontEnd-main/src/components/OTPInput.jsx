import React, { useState } from 'react';
import { useNavigate } from 'react-router';


const OTPInput = () => {
    const navigate = useNavigate();

    const [otp, setOtp] = useState(new Array(6).fill(''));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.nextSibling && element.value !== '') {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/register');
        console.log('OTP entered:', otp.join(''));
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="bg-white p-16 rounded-lg shadow-2xl w-1/3">
                <h2 className="text-3xl font-bold mb-10 text-gray-800">Enter OTP</h2>
                <form onSubmit={handleSubmit} className="flex justify-between">
                    {otp.map((data, index) => {
                        return (
                            <input
                                key={index}
                                type="text"
                                name="otp"
                                maxLength="1"
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                className="w-12 h-12 text-center font-bold text-2xl rounded bg-gray-200 border border-gray-200 focus:outline-none focus:border-gray-500"
                            />
                        );
                    })}
                </form>
                <button
                    onClick={handleSubmit}
                    className="w-full mt-6 p-3 bg-gray-800 text-white font-bold rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default OTPInput;
