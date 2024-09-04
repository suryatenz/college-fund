import React from "react";

const UserDetails = ({ user }) => {
  if (!user) {
    return <div>Loading user details...</div>;
  }

  const { user: userDetails, individual, company } = user;

  return (
    <div className="w-1/2 bg-white p-6 shadow-md">
      <h2 className="text-blue-700 font-bold text-lg mb-4">Your Details</h2>
      <div className="space-y-4">
        {individual && (
          <div>
            <h3 className="text-gray-800 font-semibold mb-2">Individual Information</h3>
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">Full Name:</span>
              <div className="mt-2">{individual.name || "N/A"}</div>
            </div>
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">Phone Number:</span>
              <div className="mt-2">{userDetails.phoneNumber || "N/A"}</div>
            </div>
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">WhatsApp Number:</span>
              <div className="mt-2">
                {userDetails.whatsappCompatible ? userDetails.phoneNumber : "N/A"}
              </div>
            </div>
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">PAN:</span>
              <div className="mt-2">{individual.pan || "N/A"}</div>
            </div>
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">Residency:</span>
              <div className="mt-2">{individual.residency || "N/A"}</div>
            </div>
          </div>
        )}

        {company && (
          <div>
            <h3 className="text-gray-800 font-semibold mb-2">Company Information</h3>
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">Company Name:</span>
              <div className="mt-2">{company.name || "N/A"}</div>
            </div>
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">Phone Number:</span>
              <div className="mt-2">{userDetails.phoneNumber || "N/A"}</div>
            </div>
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">WhatsApp Number:</span>
              <div className="mt-2">
                {userDetails.whatsappCompatible ? userDetails.phoneNumber : "N/A"}
              </div>
            </div>
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">Company PAN:</span>
              <div className="mt-2">{company.pan || "N/A"}</div>
            </div>
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">Contact Person Name:</span>
              <div className="mt-2">{company.contactPersonName || "N/A"}</div>
            </div>
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">Company ID:</span>
              <div className="mt-2">{company.companyID || "N/A"}</div>
            </div>
          </div>
        )}

        <div className="mb-4">
          <h3 className="text-gray-800 font-semibold mb-2">General User Information</h3>
          <div className="mb-2">
            <span className="block font-semibold text-gray-600">Email:</span>
            <div className="mt-2">{userDetails.email || "N/A"}</div>
          </div>
          <div className="mb-2">
            <span className="block font-semibold text-gray-600">Tax Exemption Required:</span>
            <div className="mt-2">{userDetails.taxExemptionRequired ? "Yes" : "No"}</div>
          </div>
          <div className="mb-2">
            <span className="block font-semibold text-gray-600">Anonymous:</span>
            <div className="mt-2">{userDetails.anonymous ? "Yes" : "No"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
