import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/authSlice';
import { useNavigate } from 'react-router';

const CompanyEdit = () => {
    const navigate = useNavigate();
    const token = useSelector(selectToken);

    // Initial form data (replace these values with actual data as needed)
    const [formData, setFormData] = useState({
        companyID: '',
        name: '',
        salutation: '',
        pan: '',
        taxExemptionRequired: false,
        anonymous: false,
        contactPersonName: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            await axios.put(`${import.meta.env.VITE_BASE_URL}user/editProfile`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            navigate('/profile');
        } catch (error) {
            console.error('Error updating company profile:', error.response?.data || error.message);
            setErrors(error.response?.data || {});
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Edit Company Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold text-gray-600">Company ID:</label>
                    <input
                        type="text"
                        name="companyID"
                        value={formData.companyID}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded w-full"
                        placeholder="Enter Company ID"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-600">Company Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded w-full"
                        placeholder="Enter Company Name"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-600">Salutation:</label>
                    <select
                        name="salutation"
                        value={formData.salutation}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded w-full"
                    >
                        <option value="">Select Salutation</option>
                        {['Mr.', 'Ms.', 'Mrs.', 'Dr.'].map((salutation) => (
                            <option key={salutation} value={salutation}>{salutation}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-semibold text-gray-600">PAN:</label>
                    <input
                        type="text"
                        name="pan"
                        value={formData.pan}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded w-full"
                        placeholder="Enter PAN"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-600">Contact Person Name:</label>
                    <input
                        type="text"
                        name="contactPersonName"
                        value={formData.contactPersonName}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded w-full"
                        placeholder="Enter Contact Person Name"
                    />
                </div>

                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="taxExemptionRequired"
                            checked={formData.taxExemptionRequired}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Tax Exemption Required
                    </label>
                </div>

                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="anonymous"
                            checked={formData.anonymous}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Anonymous Donation
                    </label>
                </div>

                <div>
                    <button
                        type="submit"
                        className="p-3 bg-blue-700 text-white rounded hover:bg-blue-800"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CompanyEdit;
