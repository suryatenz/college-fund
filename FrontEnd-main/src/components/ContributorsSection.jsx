import React from 'react';

const ContributorsSection = () => {
  return (
    <div className="bg-white py-10 mt-5">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-[#06038D]">Individual Contributors</h2>
        <div className="flex justify-center gap-52 mt-12 mb-9">
          {[
            { name: 'John Doe', amount: '₹3,00,000', img: 'https://via.placeholder.com/100' },
            { name: 'Smith', amount: '₹5,00,000', img: 'https://via.placeholder.com/100' },
            { name: 'David', amount: '₹4,00,000', img: 'https://via.placeholder.com/100' },
            { name: 'Thomas', amount: '₹1,00,000', img: 'https://via.placeholder.com/100' },
            { name: 'Ellyse', amount: '₹5,00,000', img: 'https://via.placeholder.com/100' },
          ].map((contributor, index) => (
            <div key={index} className="text-center">
              <img
                src={contributor.img}
                alt={contributor.name}
                className="rounded-full w-24 h-24 mx-auto"
              />
              <h3 className="mt-2 font-medium">{contributor.name}</h3>
              <p className="text-sm">{contributor.amount}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-[#06038D]">Company Contributors</h2>
        <div className="flex justify-center gap-52 mt-12 mb-5">
          {[
            { name: 'Dabur India', amount: '₹5,00,000', img: 'https://via.placeholder.com/100' },
            { name: 'Kirloskar Oil', amount: '₹4,00,000', img: 'https://via.placeholder.com/100' },
            { name: 'Gayatri Pros', amount: '₹6,00,000', img: 'https://via.placeholder.com/100' },
            { name: 'Virsa Corpo', amount: '₹4,00,000', img: 'https://via.placeholder.com/100' },
            { name: 'Mindbowl', amount: '₹3,00,000', img: 'https://via.placeholder.com/100' },
          ].map((company, index) => (
            <div key={index} className="text-center">
              <img
                src={company.img}
                alt={company.name}
                className="rounded-full w-24 h-24 mx-auto"
              />
              <h3 className="mt-2 font-medium">{company.name}</h3>
              <p className="text-sm">{company.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributorsSection;
