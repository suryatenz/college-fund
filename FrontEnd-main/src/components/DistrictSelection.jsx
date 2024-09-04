import React from "react";
import Select from "react-select";

const DistrictSelection = ({ setSelectedDistrict, setCurrentStep }) => {
  const districts = [
    { value: "Alluri Sitharama Raju", label: "Alluri Sitharama Raju" },
    { value: "Anakapalli", label: "Anakapalli" },
    { value: "Ananthapuramu", label: "Ananthapuramu" },
    { value: "Annamayya", label: "Annamayya" },
    { value: "Bapatla", label: "Bapatla" },
    { value: "Chittoor", label: "Chittoor" },
    { value: "Dr. B.R. Ambedkar Konaseema", label: "Dr. B.R. Ambedkar Konaseema" },
    { value: "East Godavari", label: "East Godavari" },
    { value: "Eluru", label: "Eluru" },
    { value: "Guntur", label: "Guntur" },
    { value: "Kakinada", label: "Kakinada" },
    { value: "Krishna", label: "Krishna" },
    { value: "Kurnool", label: "Kurnool" },
    { value: "Nandyal", label: "Nandyal" },
    { value: "NTR", label: "NTR" },
    { value: "Palnadu", label: "Palnadu" },
    { value: "Parvathipuram Manyam", label: "Parvathipuram Manyam" },
    { value: "Prakasam", label: "Prakasam" },
    { value: "Sri Potti Sriramulu Nellore", label: "Sri Potti Sriramulu Nellore" },
    { value: "Sri Sathya Sai", label: "Sri Sathya Sai" },
    { value: "Srikakulam", label: "Srikakulam" },
    { value: "Tirupati", label: "Tirupati" },
    { value: "Visakhapatnam", label: "Visakhapatnam" },
    { value: "Vizianagaram", label: "Vizianagaram" },
  ];

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption.value);
    setCurrentStep(2);
  };

  return (
    <div className="w-1/2 bg-white p-6 shadow-md">
      <h2 className="text-blue-700 font-bold text-lg mb-4">Select District</h2>
      <Select
        options={districts}
        onChange={handleDistrictChange}
        placeholder="Search and select a district"
        className="text-black"
      />
    </div>
  );
};

export default DistrictSelection;
