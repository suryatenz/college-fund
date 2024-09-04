import React, { useState, useEffect } from 'react';
import LessThanIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { selectToken } from '../redux/authSlice';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompanyRegister = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const [formData, setFormData] = useState({
    role: 'COMPANY',
    salutation: '',
    name: '',
    contactPersonName:'',
    email: '',
    phoneNumber: '',
    whatsappNumber: '',
    pan: '',
    companyID: '',
    password: '',
    confirmPassword: '',
    taxExemptionRequired: 'no',
    anonymous: 'no',
    whatsappCompatible: false,
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'whatsappCompatible') {
      setFormData({
        ...formData,
        [name]: checked,
        whatsappNumber: checked ? formData.phoneNumber : '',
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const validateForm = () => {
    let formErrors = {};

    if (formData.taxExemptionRequired === 'yes') {
      if (!formData.pan.trim()) {
        formErrors.pan = 'PAN number is required for tax exemption.';
      }
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    axios.post(`${BASE_URL}auth/registerCompany/`, formData, {
      withCredentials: true,
    })
      .then((response) => {
        toast.success(`Company registered successfully! 👌 ${response.data.slug}`, {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        navigate('/signin');
      })
      .catch((error) => {
        toast.error(error.response?.data.message || 'An error occurred during registration', {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      });
  };

  
  

  useEffect(() => {
    const validateForm = () => {
      const { name, phoneNumber, password, confirmPassword, whatsappNumber , companyID } = formData;
      const isFormValid =
        name &&
        phoneNumber &&
        password &&
        confirmPassword &&
        whatsappNumber &&
        companyID &&
        password === confirmPassword &&
        (formData.taxExemptionRequired === 'no' || (formData.pan.trim()));
      return isFormValid;
    };

    setIsFormValid(validateForm() && Object.keys(errors).length === 0);
  }, [formData, errors]);

  return (
    <>
    <ToastContainer/>
      <div className="flex flex-col ml-5 mt-3 mb-2">
        <div className="flex flex-row hover:cursor-pointer" onClick={() => navigate('/register')}>
          <LessThanIcon className='text-2xl text-gray-800 cursor-pointer mt-2' />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Now Register as a Company:</h2>
        </div>
        <p className="mb-2 text-xl text-gray-600 ml-6">Please fill the form</p>
      </div>
      <div className="flex justify-center items-center h-full mt-2 ml-3">
        <div className="w-full px-8">
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <p className="mb-2 font-semibold text-gray-800">Select Salutation</p>
              <div className="flex space-x-4">
                {['Mr.', 'Ms.', 'Mrs.', 'Dr.'].map((salutation) => (
                  <label key={salutation} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="salutation"
                      value={salutation}
                      checked={formData.salutation === salutation}
                      onChange={handleChange}
                      className="form-radio text-gray-700"
                    />
                    <span>{salutation}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <p className="mb-2 font-semibold text-gray-800">Company Name</p>
              <input
                type="text"
                name="name"
                placeholder="Enter Company Name *"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="email"
                name="email"
                placeholder="E-Mail Id *"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="contactPersonName"
                placeholder="Contact Person Name *"
                value={formData.contactPersonName}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <div className="flex space-x-2 items-center">
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number *"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded flex-1"
                />
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="whatsappCompatible"
                  checked={formData.whatsappCompatible}
                  onChange={handleChange}
                  className="mr-1.5 ml-2"
                />
                <label htmlFor="whatsappCompatible" className="text-sm text-gray-700 mb-0.5">WhatsApp number same as phone number</label>
              </div>
              <input
                type="number"
                name="whatsappNumber"
                placeholder="WhatsApp Number *"
                value={formData.whatsappNumber}
                onChange={handleChange}
                disabled={formData.whatsappCompatible}
                className={`p-2 border border-gray-300 rounded ${formData.whatsappCompatible ? 'bg-gray-200' : ''}`}
              />
              <input
                type="password"
                name="password"
                placeholder="Password *"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password *"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="pan"
                placeholder="PAN (optional)"
                value={formData.pan}
                onChange={handleChange}
                className={`p-2 border border-gray-300 rounded ${errors.pan ? 'border-red-500' : ''}`}
              />
              {errors.pan && (
                <p className="text-red-500 text-sm mt-1 col-span-2">{errors.pan}</p>
              )}
              <input
                type="text"
                name="companyID"
                placeholder="UIN"
                value={formData.companyID}
                onChange={handleChange}
                className={`p-2 border border-gray-300 rounded ${errors.companyID ? 'border-red-500' : ''}`}
              />
              {errors.companyID && (
                <p className="text-red-500 text-sm mt-1 col-span-2">{errors.companyID}</p>
              )}
            </div>

            <div className="mb-4">
              <p className="font-semibold text-gray-800">Are you looking for TAX exemption receipt? (Under Section 80G)</p>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="taxExemptionRequired"
                    value="yes"
                    checked={formData.taxExemptionRequired === 'yes'}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="taxExemptionRequired"
                    value="no"
                    checked={formData.taxExemptionRequired === 'no'}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>No</span>
                </label>
              </div>
              {formData.taxExemptionRequired === 'yes' && (
                <p className="text-red-600 mt-2 text-sm">
                  Note - If Yes, PAN and UIN Number are mandatory
                </p>
              )}
            </div>

            <div className="mb-6">
              <p className="font-semibold text-gray-800">Do you want to keep your identity anonymous?</p>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="anonymous"
                    value="yes"
                    checked={formData.anonymous === 'yes'}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="anonymous"
                    value="no"
                    checked={formData.anonymous === 'no'}
                    onChange=                    {handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-1/5 p-3 mb-2 text-lg bg-blue-900 text-white rounded transition-transform"
                disabled={!isFormValid}
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyRegister;
