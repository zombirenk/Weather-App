const MainMe = ({ city }) => {

  if (!city || !city.main || !city.weather) {
    
    return <p>Şehir bilgisi yükleniyor veya mevcut değil...</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-400 to-green-400">
      <div className="bg-white bg-opacity-75 rounded-lg shadow-md p-6 transition duration-300 hover:bg-gray-200 hover:shadow-xl">
        <h1 className="text-4xl font-bold mb-4 font-krm2">{city.name} İçin Hava Durumu</h1>
        <ul className="font-krm space-y-4 text-xl">
          <li><span className="font-bold">Sıcaklık:</span> {city.main.temp}</li>
          <li><span className="font-bold">Şehir:</span> {city.name}</li>
          <li><span className="font-bold">Hava:</span> {city.weather[0].main}</li>
        </ul>
      </div>
    </div>
  );
};

export default MainMe;
