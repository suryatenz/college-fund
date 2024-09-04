import React, { useState } from 'react';

const PaymentForm = ({ goBack }) => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Data:', paymentData);
  };

  return (
    <div className="flex justify-center ml-44">
      <div className="p-4 flex space-x-2">
        <div className="">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Payment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-semibold">Amount</label>
              <input
                type="text"
                name="amount"
                value={paymentData.amount}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="font-semibold">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="font-semibold">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="font-semibold">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="font-semibold">Country</label>
              <input
                type="text"
                name="country"
                value={paymentData.country}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-center justify-between mt-8">
              <button onClick={goBack} type="button" className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
                Back
              </button>
              <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800">
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
