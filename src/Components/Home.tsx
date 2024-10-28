"use client";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import banerImg from "../../public/baner-image.png";
import aboutus from "../../public/AboutUs.png";
import imageone from "../../public/imageone.jpg";
import imagetwo from "../../public/imagetwo.jpg";
import imagethree from "../../public/imagethree.jpg";
import imagefour from "../../public/imagefour.jpg";
import imagefive from "../../public/imagefive.jpg";
import imagesix from "../../public/imagesix.png";
import html from "../../public/html.png";
import css from "../../public/css.png";
import javascript from "../../public/javascript.png";
import nextjs from "../../public/nextjs.png";
import tailwindcss from "../../public/tailwindcss.png";
import reactjs from "../../public/reactjs.png";
import python from "../../public/python.png";
import openAI from "../../public/openAI.png";
import bgimage from "../../public/bgimage.jpg";

// skills array
const skills = [
  { name: "Html", level: "Expert", image: html },
  { name: "Css", level: "Advanced", image: css },
  { name: "Javascript", level: "Advanced", image: javascript },
  { name: "Next.js", level: "Intermediate", image: nextjs },
  { name: "Tailwind Css", level: "Advanced", image: tailwindcss },
  { name: "React.js", level: "Intermediate", image: reactjs },
  { name: "Python", level: "Expert", image: python },
  { name: "OpenAi", level: "Advanced", image: openAI },
];

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", budget: "", message: "",});
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatus("Error submitting the form.");
    }
  };

  return (
    <section className="min-h-screen bg-[#000000] bg-cover bg-center bg-no-repeat w-full h-full" style={{ backgroundImage: `url(${bgimage.src})` }}>
      <div className="container max-w-[1270px] mx-auto pt-[60px]">
        {/* Section 1 */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 h-auto md:h-96">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8 text-center md:text-left pt-0">
            <h1 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
              Hy, I’m <span className="text-[#FCCC1C]">Usman.</span>
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold text-[#FCCC1C] mb-4">
              <Typewriter options={{ strings: ["Full stack Developer.", "Mern stack developer."], autoStart: true, loop: true }} />
            </h1>
            <p className="text-lg text-[#ffffff] mb-4">
              Solving business challenges with effective design strategies, delivering results-driven solutions for 1+ years.
            </p>
            {/* Button */}
            <div className="flex flex-wrap justify-left gap-3 md:gap-3 mt-6">
            <a href="/my-cv.pdf" download className="relative inline-block px-6 py-3 text-white font-medium rounded-lg text-sm border-2 border-[#FCCC1C] transition-all duration-300 overflow-hidden group">
              <span className="absolute inset-0 bg-[#FCCC1C] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10">Download CV</span>
            </a>
            <a href="/portfolio" className="group px-6 py-3 text-sm text-white font-medium rounded-lg transition-transform duration-300 hover:scale-105 flex items-center">
              <span className="relative">View Portfolio
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FCCC1C] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
              <svg className="ml-2 w-8 h-4 transform transition-transform duration-300 group-hover:rotate-90"
                fill="none" stroke="#FCCC1C" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h16M12 5l7 7-7 7"></path>
              </svg>
            </a>
            </div>
          </div>
          {/* Image */}
          <div className="relative inline-block">
            <div className="bg-[#FCCC1C] w-[380px] h-[300px] border-4 border-[#000000] flex justify-center items-center rounded-[5px]">
              <Image src={banerImg} alt={"img"} width={400} height={400} className="w-[400px] h-[400px]" />
            </div>
          </div>
        </div>

        {/* Section 2 About */}
        <div id="About" className="flex flex-col gap-[80px] pt-[100px]">
          <div>
            <h4 className="text-3xl md:text-4xl text-center font-bold text-[#ffffff] mb-4">
              -About <span className="text-[#FCCC1C]">me-</span>
            </h4>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 h-auto md:h-96">
            {/* image */}
            <div className="flex justify-center">
              <div className="h-auto bg-[#FCCC1C] rounded-[3px]" style={{ boxShadow: '5px 0px 100px 0px #F7F7F780' }}>
                <Image src={aboutus} alt="img" width={330} height={330} className="h-auto"/>
              </div>
            </div>

            <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-[#ffffff] mb-4">
                Expert Full-Stack Developer for High- <span className="text-[#FCCC1C]">Performance Web Solutions</span>
              </h1>
              <p className="text-lg text-[#ffffff]">
              I am a full-stack developer with 1+ years of experience building scalable, high-performance web solutions. My expertise covers front-end and back-end technologies, optimizing for speed, security, and efficiency. I deliver dynamic web applications that transform business needs into seamless user experiences.
              </p>
              <div className="flex justify-left">
              <a href="/hire-me" className="relative inline-block w-[100px] mt-6 px-6 py-1 text-white font-medium rounded-lg text-lg border-2 border-[#FCCC1C] transition-all duration-300 overflow-hidden group flex items-center justify-center">
                <span className="absolute inset-0 bg-[#FCCC1C] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10">Hire</span>
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 Projects */}
        {/* Add your project section here */}
        <div id="Projects" className="pt-[101px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[50px]">
        <div>
        <h2 className="text-3xl font-bold text-center mb-4 text-[#ffffff]">-My <span className='text-[#FCCC1C]'>Projects-</span></h2>
        <h2 className="text-3xl font-bold text-center mb-4 text-[#ffffff]">My Creative Works Latest <span className='text-[#FCCC1C]'>Projects</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
          {/* Project 1 */}
          <div className="relative group w-full overflow-hidden bg-white rounded-lg shadow-lg">
            <Image src={imageone} alt={'img'} height={300} className="w-full" />
            {/* Slide-in overlay */}
            <div className="absolute inset-0 bg-[#8BC34A] bg-opacity-80 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
            <div className="flex flex-col items-center p-3">
            <p className="text-lg text-[#ffffff] mb-2 text-center">Natura Pest Control is a provider of high-quality, eco-friendly, and effective pest control solutions based in Vancouver, Washington.</p>
              <a href="https://naturapestcontrol.com/" className="bg-[#C4C4C4] text-[#000000] text-lg font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                View Project
              </a>
            </div>
            </div>  
          </div>

          {/* Project 2 */}
          <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={imagetwo} alt={'img'} height={300} className="w-full" />
            {/* Slide-in overlay */}
            <div className="absolute inset-0 bg-[#001F3F] bg-opacity-80 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
            <div className="flex flex-col items-center p-3">
              <p className="text-lg text-[#ffffff] mb-2 text-center">With an impressive background spanning both military and commercial sectors, Dewayne brings a unique perspective to the ever-evolving world of IT security.</p>
              <a href="https://dewaynehart.com/" className="bg-[#C4C4C4] text-[#000000] text-lg font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                View Project
              </a>
            </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={imagethree} alt={'img'} height={300} className="w-full" />
            {/* Slide-in overlay */}
            <div className="absolute inset-0 bg-[#004080] bg-opacity-80 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
            <div className="flex flex-col items-center p-3">
              <p className="text-lg text-[#ffffff] mb-2 text-center">We can reduce risk exposure for cybersecurity programmatic, technical, and operational challenges ahead of adverse situations.</p>
              <a href="/https://semais.net/" className="bg-[#C4C4C4] text-[#000000] text-lg font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                View Project
              </a>
            </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={imagefour} alt={'img'} height={300} className="w-full" />
            {/* Slide-in overlay */}
            <div className="absolute inset-0 bg-[#03A9F4] bg-opacity-80 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
            <div className="flex flex-col items-center p-3">
              <p className="text-lg text-[#ffffff] mb-2 text-center">ONLY FOR THE BRAVE!THE WORLDS MOST HEALTHY DRINK, UNLIKE ANYTHING YOU EVER EXPERIENCED *ACCORDING TO JEHAE DRINKS BV.</p>
              <a href="https://jehaedrinks.com/" className="bg-[#C4C4C4] text-[#000000] text-lg font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                View Project
              </a>
            </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={imagefive} alt={'img'} height={300} className="w-full" />
            {/* Slide-in overlay */}
            <div className="absolute inset-0 bg-[#e17e1f] bg-opacity-80 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
            <div className="flex flex-col items-center p-3">
              <p className="text-lg text-[#ffffff] mb-2 text-center">Transform your yard with the most trusted lawn care specialists. · Dependable Experts · Done For You Service · Pest-Free Living · Zero Risk to Try.</p>
              <a href="https://scapednotscalped.com/" className="bg-[#C4C4C4] text-[#000000] text-lg font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                View Project
              </a>
            </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={imagesix} alt={'img'} height={300} className="w-full" />
            {/* Slide-in overlay */}
            <div className="absolute inset-0 bg-[#ffc727] bg-opacity-80 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
            <div className="flex flex-col items-center p-3">
              <p className="text-lg text-[#ffffff] mb-2 text-center">Our US-owned company with Mexican factories offers comprehensive support from planning to implementation.</p>
              <a href="https://mademanufacturingsolutions.com/" className="bg-[#C4C4C4] text-[#000000] text-lg font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                View Project
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
        {/* Section 4 Skills */}
        <div id="skills" className="text-white pt-[100px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[40px]">
            <h2 className="text-4xl font-bold text-center mb-8">
              -My <span className="text-[#FCCC1C]">Skills-</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="p-1 rounded-lg bg-gradient-to-r from-[#92929D] via-[#FFFFFF] to-[#FCCC1C] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="border-2 border-transparent bg-[#000000] p-6 rounded-lg">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <Image src={skill.image} alt={`${skill.name} icon`} width={64} height={64} />
                    </div>
                    <h3 className="text-xl font-semibold text-center">{skill.name}</h3>
                    <p className="text-gray-400 mt-2 text-center">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5 Contact */}
        <div id="contact" className="pt-[100px] pb-2 text-white">
        <div className="container mx-auto px-7 flex flex-col gap-[80px]">
          <div className='flex flex-col gap-5'>
            <h2 className="text-4xl font-bold text-center">-Contact <span className='text-[#FCCC1C]'>Us-</span></h2>
            <h2 className="text-4xl font-bold text-center mb-12 text-[#FFFFFF]">Let’s Discuss <span className='text-[#FCCC1C]'>Your Project</span></h2>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left side - Icon boxes */}
          <div className="space-y-8 pt-12  rounded-lg">
            {/* icon box1 */}
            <div className="flex items-center p-6 bg-[#000000] rounded-lg shadow-lg w-full max-w-[400px] mx-auto" style={{ boxShadow: "0 3px 10px #BEC0BF" }}>
              <a href="tel:+123456789"className="flex items-center justify-center p-[16px] bg-[#FCCC1C] rounded-full mr-4">
                <FaPhoneAlt className="text-[#000000] text-2xl" />
              </a>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-[#92929D]">Call me</h3>
                <p className="mt-1 text-[#FFFFFF]">+123 456 789</p>
              </div>
            </div>
              {/* icon box2 */}
            <div className="flex items-center p-6 bg-[#000000] rounded-lg shadow-lg w-full max-w-[400px] mx-auto" style={{ boxShadow: "0 3px 10px #BEC0BF" }}>
              <a href="mailto:usmanaliwcc1@gmail.com"className="flex items-center justify-center p-[16px] bg-[#FCCC1C] rounded-full mr-4">
                <FaEnvelope className="text-[#000000] text-2xl" />
              </a>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-[#92929D]">Email me</h3>
                <p className="mt-1 text-[#FFFFFF]">usmanaliwcc1@gmail.com</p>
              </div>
            </div>
            {/* icon box 3 */}
            <div className="flex items-center p-6 bg-[#000000] rounded-lg shadow-lg w-full max-w-[400px] mx-auto" style={{ boxShadow: "0 3px 10px #BEC0BF" }}>
              <a href="https://maps.app.goo.gl/Lynhb1YHz25edaHz6"target="_blank"rel="noopener noreferrer"className="flex items-center justify-center p-[16px] bg-[#FCCC1C] rounded-full mr-4">
                <FaMapMarkerAlt className="text-[#000000] text-2xl" />
              </a>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-[#92929D]">Location</h3>
                <p className="mt-1 text-[#FFFFFF]">Ali Town, Lahore</p>
              </div>
            </div>
          </div>
              {/* form */}
            <div className="p-8 rounded-lg shadow-lg border border-[#FCCC1C] mb">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-4 justify-between">
                  <div className="flex-grow max-w-[340px]">
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#000000] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCCC1C]"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="flex-grow max-w-[340px]">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#000000] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCCC1C]"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget</label>
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#000000] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCCC1C]"
                    placeholder="Your Budget"
                    required
                  />
                </div>
              
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#000000] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCCC1C]"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
             
                <button type="submit" className="w-[176px] p-3 bg-[#FCCC1C] text-white font-semibold rounded-lg relative overflow-hidden group border-2 border-[#FCCC1C]">
                  <span className="absolute inset-0 bg-[#000000] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative z-10">Send Message</span>
                </button>
                {status && <p className="mt-4 text-sm text-indigo-600">{status}</p>}
              </form>
            </div>
          </div>
          </div>
        </div>
              {/* End */}
      </div>
    </section>
  );
};
export default Home;
