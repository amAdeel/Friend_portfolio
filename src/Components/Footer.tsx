import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'; // Import Font Awesome icons

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-6 border-t-2 border-[#BEC0BF]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pr-5 pl-5">
        {/* Left Side: Footer Text */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>

        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>Designed by Usman</p>
        </div>

        {/* Right Side: Icons */}
        <div className="flex space-x-4">
          {/* Example Icons */}
          <a href='https://www.linkedin.com/in/ch-usman-213807309?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT7%2FLp3UxRXG3xaGRSMZa3A%3D%3D'>
          <div className="bg-[#FCCC1C] p-3 rounded-full">
           <FaLinkedinIn style={{ color: '#000000', fontSize: '15px' }} />
          </div>
          </a>
          <a href='https://github.com/Usman-145'>
          <div className="bg-[#FCCC1C] p-3 rounded-full">
            <FaGithub style={{ color: '#000000', fontSize: '15px' }} />
          </div>
          </a>
          <a href='https://www.instagram.com/usman_wcc1_/profilecard/?igsh=MWc1ZXNwbWpteHdzaQ=='>
            <div className="bg-[#FCCC1C] p-3 rounded-full">
              <FaInstagram style={{ color: '#000000', fontSize: '15px' }} />
            </div>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
