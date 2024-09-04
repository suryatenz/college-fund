import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import LessThanIcon from '@mui/icons-material/ChevronLeft';
import { selectToken, setMail, setToken } from '../redux/authSlice';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState('individual');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleClicks = () => {
    navigate('/');
  };

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}auth/login/`, formData, {
        withCredentials: true,
      });

      if (response && response.data) {
        const { token, individualData, companyData } = response.data;
        dispatch(setToken(token));

        if (individualData) {
          dispatch(setMail(individualData.name));
        } else if (companyData) {
          dispatch(setMail(companyData.name));
        }

        toast.success(`Promise resolved 👌 ${response.data.slug}`, {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      } else {
        toast.error('Unexpected response structure');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-row hover:cursor-pointer mt-20 ml-52" onClick={handleClicks}>
        <LessThanIcon className="text-2xl text-gray-800 cursor-pointer mt-2" />
        <h2 className="text-3xl font-medium text-[#06038D]">Sign In</h2>
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="w-full max-w-md p-8 border border-gray-300 shadow-2xl">
          <div className="flex justify-around mb-6">
            <h2
              className={`cursor-pointer text-lg pb-2 border-b-2 ${selectedTab === 'individual' ? 'border-blue-900 text-blue-900 font-bold' : 'border-transparent'}`}
              onClick={() => setSelectedTab('individual')}
            >
              Individual
            </h2>
            <h2
              className={`cursor-pointer text-lg pb-2 border-b-2 ${selectedTab === 'company' ? 'border-blue-900 text-blue-900 font-bold' : 'border-transparent'}`}
              onClick={() => setSelectedTab('company')}
            >
              Company
            </h2>
          </div>
          <div className="flex flex-col">
            <div className="">
              <h2 className="text-sm text-left text-[#8E8E8E] mb-3">Enter Details</h2>
            </div>
            <input
              type="email"
              name="email"
              placeholder="E-Mail Id"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <div className="flex justify-between items-center w-full mb-4">
              <div className="text-sm">
                <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
              </div>
            </div>
            <button
              className="w-full p-3 text-md bg-blue-900 text-white font-semibold rounded"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
