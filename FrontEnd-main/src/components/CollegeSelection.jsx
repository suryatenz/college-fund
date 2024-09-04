import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Select from "react-select";
import { selectToken } from "../redux/authSlice";

const CollegeSelection = ({ district, setSelectedCollege, setCurrentStep, goBack }) => {
  const token = useSelector(selectToken);
  const [colleges, setColleges] = useState([]);
  const [error, setError] = useState(null);
  const districts = district.toUpperCase();

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}college/getCollegesByDistrict/${districts}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(districts);
        console.log(response.data);
        setColleges(response.data.map(college => ({
          value: college.collegeName,
          label: college.collegeName,
        })));
      } catch (error) {
        console.error("Error fetching colleges:", error);
        setError("Failed to load colleges. Please try again later.");
      }
    };

    if (district) {
      fetchColleges();
    }
  }, [district, token, districts]);

  const handleCollegeChange = (selectedOption) => {
    setSelectedCollege(selectedOption.value);
    setCurrentStep(3);
  };

  return (
    <div className="w-1/2 p-6">
      <h2 className="text-blue-700 font-bold text-lg mb-4">Select College</h2>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="space-y-4">
          <Select
            options={colleges}
            onChange={handleCollegeChange}
            placeholder="Select a college..."
            className="mb-4"
            classNamePrefix="select"
          />
          {colleges.length === 0 && <div>No colleges found in this district.</div>}
        </div>
      )}
      <div className="flex items-center justify-start mt-8">
        <button onClick={goBack} className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
          Back
        </button>
      </div>
    </div>
  );
};

export default CollegeSelection;
