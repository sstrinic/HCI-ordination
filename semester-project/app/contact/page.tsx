'use client';
import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  useEffect(() => {
    if (isSuccess) {
      const timeoutId = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [isSuccess]);

  const handleOkClick = () => {
    setIsSuccess(false);
  };

  return (
    <div className="max-w-[900px] mx-auto mt-8 bg-white p-6 max-md:py-0 md:rounded-md md:shadow-md relative">
      <h1 className="text-4xl font-bold mb-6 md:text-center">Contact Us</h1>
      <p className={isSuccess ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-md mb-4 text-center text-5xl" : "hidden"}>
        Email sent successfully.
        <button onClick={handleOkClick} className="bg-[#1563B2] text-white px-4 py-2 rounded-md ml-4 hover:bg-blue-600 transition duration-300">
          OK
        </button>
      </p>
      <p className="text-gray-700 mb-6 text-center">
        Have questions or need assistance? Use the form below to get in touch with us.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
          <div className="mb-4 col-span-2">
            <label htmlFor="doctor" className="block text-sm font-semibold text-gray-600">Choose a department/doctor</label>
            <select id="doctor" name="doctor" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-[#1563B2]" required>
              <option value="NewPatient">Reception</option>
              <option value="DrSarahPatel">Dr. Sarah Patel</option>
              <option value="DrJamesNguyen">Dr. James Nguyen</option>
            </select>
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required />
          </div>

          <div className="mb-4 col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required />
          </div>

          <div className="mb-4 col-span-2">
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-600">Subject</label>
            <input type="text" id="subject" name="subject" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required />
          </div>

          <div className="mb-4 col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-600">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500" required></textarea>
          </div>

          <div className="col-span-2">
            <button type="submit" className="w-full bg-[#1563B2] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Submit
            </button>
          </div>
        </form>

        <div className="md:grid-rows-3 grid">
          <div></div>
          <div className='space-y-4'>

            <div className="flex items-center">
              <FaPhone className="text-[#1563B2] mr-2" />
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <p className="text-sm text-gray-600">(123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="text-[#1563B2] mr-2" />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <p className="text-sm text-gray-600">info@example.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#1563B2] mr-2" />
              <div>
                <p className="text-sm font-semibold">Address</p>
                <p className="text-sm text-gray-600">123 Main St, Cityville, USA</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
