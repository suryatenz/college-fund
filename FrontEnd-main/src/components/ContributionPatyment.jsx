import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/authSlice';
import { useNavigate } from 'react-router';

const ContributionPayment = () => {
    const [profileData, setProfileData] = useState(null);
    const [amount, setAmount] = useState('');
    const token = useSelector(selectToken);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}user/getUser`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(response.data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfileData();
    }, [token]);

    const handlePaymentSubmit = () => {
        console.log('Payment submitted with amount:', amount);
        navigate('/');
    };

    if (!profileData) return <div>Loading...</div>;

    const { user, individual, company } = profileData;
    const userDetails = individual || company || {};

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Payment</h2>
            <div className="flex justify-between">
                <div className="w-1/2 pr-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Details</h3>
                    <div className="border-t border-gray-300 pt-4">
                        {userDetails && (
                            <>
                                <div className="mb-4">
                                    <span className="block font-semibold text-gray-600">Full Name:</span>
                                    <div className="mt-2">{userDetails.name || 'N/A'}</div>
                                </div>
                                <div className="mb-4">
                                    <span className="block font-semibold text-gray-600">Phone Number:</span>
                                    <div className="mt-2">{user.phoneNumber || 'N/A'}</div>
                                </div>
                                <div className="mb-4">
                                    <span className="block font-semibold text-gray-600">WhatsApp Number:</span>
                                    <div className="mt-2">{user.whatsappCompatible ? user.phoneNumber : 'N/A'}</div>
                                </div>
                                <div className="mb-4">
                                    <span className="block font-semibold text-gray-600">PAN:</span>
                                    <div className="mt-2">{userDetails.pan || 'N/A'}</div>
                                </div>
                                <div className="mb-4">
                                    <span className="block font-semibold text-gray-600">Email:</span>
                                    <div className="mt-2">{user.email || 'N/A'}</div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="w-1/2 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment</h3>
                    <div className="border-t border-gray-300 pt-4">
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-600" htmlFor="amount">Amount:</label>
                            <select
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="mt-2 p-2 border border-gray-300 rounded w-full"
                            >
                                <option value="" disabled>Select Amount</option>
                                <option value="1 lakh">1 Lakh</option>
                                <option value="2 lakh">2 Lakhs</option>
                                <option value="3 lakh">3 Lakhs</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-600" htmlFor="cardNumber">Card Number:</label>
                            <input
                                type="text"
                                id="cardNumber"
                                className="mt-2 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-600" htmlFor="cvv">CVV:</label>
                            <input
                                type="text"
                                id="cvv"
                                className="mt-2 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-600" htmlFor="expiryDate">Expiry Date:</label>
                            <input
                                type="text"
                                id="expiryDate"
                                className="mt-2 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-600" htmlFor="country">Country:</label>
                            <input
                                type="text"
                                id="country"
                                className="mt-2 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-6">
                <button
                    className="bg-[#06038D] text-lg text-white py-2 px-10"
                    onClick={handlePaymentSubmit}
                >
                    Proceed
                </button>
            </div>
        </div>
    );
};

export default ContributionPayment;
