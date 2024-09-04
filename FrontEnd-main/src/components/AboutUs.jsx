import React from 'react';
import imag from '../assets/AAhublogo.png';
import imag2 from '../assets/image226.png';
const AboutUs = () => {
  return (
    <div id="about" className="w-full py-10 pl-9">
      <h2 className="text-center text-[#06038D] font-semibold text-3xl mb-8">About</h2>
      <div className="flex flex-col items-center px-8">
        <div className=" flex flex-row border-4 border-[#06038D] p-6 rounded-md w-3/4 mb-8">
          <img src={imag2} alt="APS CHE Logo" className=" h-44 w-44 mx-auto" />
          <p className="text-center text-md font-medium">
          The A P State Council of Higher Education (APSCHE) came into existence w.e.f. 20.05.1988 through Act 16 of 1988 to advise the Government in matters relating to Higher Education in the State and to oversee its development with perspective planning and for matters connected therewith and incidental thereto. The Andhra Pradesh State Council of Higher Education, the first of its kind in the country, was set up as per the recommendations of the National Education Policy 1986, 
          is primarily a coordinating body between the University Grants Commission (UGC), the State Government and the Universities. It is the general duty of the Council to coordinate and determine standards in institutions of Higher Education, Research, Scientific and Technical Institutions in accordance with the guidelines issued by the University Grants Commission from time to time.
          </p>
        </div>
        <div className=" flex flex-row border-4 border-[#06038D] p-6 rounded-md w-3/4">
        <p className="text-center text-md font-medium">
        Andhra University Technology Start-Up Incubation Centre has hit the ground running by bringing several growth stage startups on board. It is a collaborative initiative intended to help create next gen technology startups and promote entrepreneurship to solve some of the problems commonly associated with running a startup by providing workspace, seed funding support, mentoring, and training to grow their business. 
        The focus shall be on the use of Next Gen Technologies for multiple critical sectors -  Pharma, Marine, Rural/Tribal Supply Chain Development, Talent development, Skill Development and e-Learning, Manufacturing, Automation and Robotics, etc.  It also promotes entrepreneurship by providing an incubation facility for peer-to-peer learning and the benefit of an industrial environment.  The services offered by the center include business advisory, market access, financial support, 
        legal compliance & IP, physical infrastructure, knowledge support, mentoring and training.
        </p>
          <img src={imag} alt="University Logo" className=" h-52 w-52 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
