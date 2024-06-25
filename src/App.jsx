import React, { useState } from 'react';
import './App.css'; // Import your Tailwind CSS styles
import 'tailwindcss/base.css'; // Import Tailwind CSS base styles
import 'tailwindcss/components.css'; // Import Tailwind CSS component styles
import 'tailwindcss/utilities.css'; // Import Tailwind CSS utility styles
import Header from '../components/Header.jsx';

const App = () => {
  const [formData, setFormData] = useState({
    dividend: '',
    pe: '',
    industryPE: '',
    assets: '',
    liabilities: '',
    type: '',
    promotor: '',
    pb: '',
  });

  const [shr, setShr] = useState(0);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let shrValue = 0;

    if (formData.dividend === "Y") {
      shrValue += 5;
    } 
    if (formData.pe >= formData.industryPE) {
      shrValue += 5;
    }
    if (formData.assets > formData.liabilities) {
      shrValue += 3;
      if (formData.assets > 2 * formData.liabilities) {
        shrValue += 5;
      }
    }
    if (formData.type === "M") {
      shrValue += 10;
    } else if (formData.type === "D") {
      shrValue += 5;
    }
    if (formData.promotor >= 75) {
      shrValue += 7;
    } else if (formData.promotor >= 50) {
      shrValue += 5;
    }
    if (formData.pb <= 2) {
      shrValue += 5;
    } else if (formData.pb > 3) {
      shrValue -= 7;
    }

    setShr(shrValue);
    setSubmitMessage('Form submitted successfully!');
  };

  return (
    <>
      <Header />
      <div className="width=100%">
        <h1 className="block text-4xl align-center justify-center font-medium text-red-500 m-3">Check out Fundamentals</h1>
        <form onSubmit={handleSubmit} className="bg-indigo-300 p-20 rounded-md shadow-lg">
          <div className="mb-4">
            <label htmlFor="dividend" className="block text-sm font-medium text-gray-600">
              DIVIDEND (Y if company gives dividend else N)
            </label>
            <input
              type="string"
              id="dividend"
              name="dividend"
              value={formData.dividend}
              onChange={handleChange}
              className="mt-1 p-2 w-full text-black border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pe" className="block text-sm font-medium text-gray-600">
              PE
            </label>
            <input
              type="number"
              id="pe"
              name="pe"
              value={formData.pe}
              onChange={handleChange}
              className="mt-1 p-2 w-full border text-black rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="industryPE" className="block text-sm font-medium text-gray-600">
              Industry PE
            </label>
            <input
              type="number"
              id="industryPE"
              name="industryPE"
              value={formData.industryPE}
              onChange={handleChange}
              className="mt-1 p-2 w-full text-black border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="assets" className="block text-sm font-medium text-gray-600">
              Assets
            </label>
            <input
              type="number"
              id="assets"
              name="assets"
              value={formData.assets}
              onChange={handleChange}
              className="mt-1 p-2 w-full text-black border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="liabilities" className="block text-sm font-medium text-gray-600">
              Liabilities
            </label>
            <input
              type="number"
              id="liabilities"
              name="liabilities"
              value={formData.liabilities}
              onChange={handleChange}
              className="mt-1 p-2 w-full text-black border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-600">
              Company Type (M for monopoly D for duopoly and N for normal)
            </label>
            <input
              type="string"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 p-2 w-full text-black border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="promotor" className="block text-sm font-medium text-gray-600">
              Promotor Share (in %)
            </label>
            <input
              type="number"
              id="promotor"
              name="promotor"
              value={formData.promotor}
              onChange={handleChange}
              className="mt-1 p-2 w-full text-black border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pb" className="block text-sm font-medium text-gray-600">
              PB ratio
            </label>
            <input
              type="number"
              id="pb"
              name="pb"
              value={formData.pb}
              onChange={handleChange}
              className="mt-1 p-2 w-full text-black border rounded-md"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
        {submitMessage && (
          <div className="mt-4 text-1xl text-center text-red-100 font-semibold">
            {submitMessage}
          </div>
        )}
        
            
          
        {shr !== 0 && (
          <div className="mt-4 p-4 bg-white rounded-md shadow-md text-center text-2xl font-semibold">
          Stock Score Value: {shr}
          <br />

            {shr > 25 && <p className="text-green-500">You can invest in this stock !!</p>}
            {shr > 15 && shr <= 25 && <p className="text-violet-500">It's kinda average stock !!</p>}
            {shr <= 15 && <p className="text-red-500">Don't consider this stock, it's fundamentally weak !!</p>}
          </div>
        )}
  

          
        
      </div>
    </>
  );
};

export default App;
``