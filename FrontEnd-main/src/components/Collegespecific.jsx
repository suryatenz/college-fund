import React, { useState, useEffect } from "react";
import axios from "axios";
import Steps from "./Steps";
import UserDetails from "./UserDetails";
import DistrictSelection from "./DistrictSelection";
import CollegeSelection from "./CollegeSelection";
import PaymentForm from "./PaymentForm";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/authSlice";

function Collegespecific() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const token = useSelector(selectToken);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}user/getUser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data. Please try again later.");
      }
    };

    fetchUserData();
  }, []);

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderRightComponent = () => {
    switch (currentStep) {
      case 1:
        return (
          <DistrictSelection
            setSelectedDistrict={setSelectedDistrict}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <CollegeSelection
            district={selectedDistrict}
            setSelectedCollege={setSelectedCollege}
            setCurrentStep={setCurrentStep}
            goBack={goBack}
          />
        );
      case 3:
        return (
          <PaymentForm 
            goBack={goBack} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-6">
      <Steps currentStep={currentStep} />
      <div className="flex">
        {user ? (
          <UserDetails user={user} />
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div>Loading user details...</div>
        )}
        {renderRightComponent()}
      </div>
    </div>
  );
}

export default Collegespecific;
