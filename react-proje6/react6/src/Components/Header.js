import React, { useState } from 'react';
import axios from 'axios';
import MainMe from './MainMe';

const Header = () => {
  const key = "bfb7231f683bb2383424e1a2afac1cf9";
  const [city, setCity] = useState();
  const [aranan, setAranan] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${aranan}&appid=${key}&units=metric`);
      console.log(response);
      setCity(response.data);
    } catch (error) {
      console.error(error);
    }  
   
  };

  return (
    <div>
      <div className='text-6xl font-krm bg-gradient-to-b from-yellow-400 to-cyan-700 py-12 flex justify-between items-center px-36'>
      <div className='text-white transition duration-500 hover:shadow-lg hover:text-yellow-400 rounded-xl'>Weather app</div>

        <div className="flex items-center gap-4">
          <input type="text"
            onChange={(e) => setAranan(e.target.value)}
            placeholder='Şehir Giriniz'
            className="font-krm2 bg-red-500 h-20 w-96 hover:bg-red-600 transition-colors duration-500 rounded-xl focus:outline-none text-4xl text-white placeholder placeholder:text-center placeholder-fuchsia-800" />

          <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 text-4xl hover:bg-blue-600 transition-colors duration-500 rounded-xl">Şehir ara</button>
        </div>
      </div>
      <MainMe city={city}/>
    </div>
  );
}

export default Header;
