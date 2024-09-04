import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignInEmail = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/check/otp');
        console.log('Email submitted:', email);
    };

    return (
        <div className="">
            <div className="flex justify-center items-center h-screen bg-gray-200">
                <div className="bg-white p-16 rounded-lg shadow-2xl w-1/3">
                    <h2 className="text-3xl font-bold mb-10 text-gray-800">Sign In</h2>
                    <form onSubmit={handleSubmit} className="">
                        <div className="mb-8">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="w-full p-3 rounded bg-gray-200 border border-gray-200 focus:outline-none focus:border-gray-500"
                            />
                        </div>
                        <button type="submit" className="w-full p-3 bg-gray-800 text-white font-bold rounded">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInEmail;
