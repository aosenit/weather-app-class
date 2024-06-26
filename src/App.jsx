import { useEffect, useState } from "react";
import worldCitiesData, { baseUrl, citiesData, images } from "./constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const App = () => {
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });

  const [data, setData] = useState(citiesData);
  const [selectedCity, setSelectedCity] = useState("My Location");

  const [isWorld, setIsWorld] = useState(true);

  const {
    data: weatherData,
    isFetching,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["weatherData", selectedCity],
    queryFn: async () => {
      const data = await axios(
        `${baseUrl}?latitude=${location.lat}&longitude=${location.log}&current=temperature_2m,wind_speed_10m`
      );
      return data.data;
    },
  });

  function handleSwitch() {
    setIsWorld((prev) => !prev);
    if (data === citiesData) {
      setData(worldCitiesData);
    } else {
      setData(citiesData);
    }
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  if (error) {
    console.log(error);
  }

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
    const selectedCityData = data.find(
      (city) => city?.name?.toLowerCase() === selectedCity.toLowerCase()
    );

    if (selectedCityData.latitude && selectedCityData.latitude) {
      setLocation({
        lat: selectedCityData.latitude,
        log: selectedCityData.longitude,
      });
    }
  };

  return (
    <div className="p-5 grid justify-center gap-y-5 relative">
      <h1 className="text-center font-medium uppercase">Weather app</h1>
      <div className="bg-purple-300 w-[450px] h-[70vh] rounded-2xl p-7">
        <div className="space-y-4">
          <div className="  w-full space-y-2">
            <label htmlFor="nigeria" className="text-purple-700">
              {isWorld ? "Cities in Nigeria" : "  Cities in the World"}
            </label>
            <select
              name=""
              id=""
              value={selectedCity}
              className="h-[70px] w-full bg-purple-100 "
              onChange={handleChange}
            >
              <option value="" disabled className="bg-transparent">
                {isWorld ? "Select a City(Nigeria)" : "   Select a City(World)"}
              </option>
              {data.map((city) => (
                <option
                  key={city.name}
                  value={city.name}
                  className="bg-transparent"
                >
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4 mt-8 grid justify-center text-center text-white">
          <img
            src={
              Number(weatherData?.current?.temperature_2m) > 9
                ? images.sunnyImage
                : images.rainyImage
            }
            alt=""
            className="size-[7rem] mx-auto"
          />
          <h2 className="text-7xl font-extrabold">
            {weatherData?.current?.temperature_2m}{" "}
            <span>{weatherData?.current_units?.temperature_2m}</span>
          </h2>
          <h3 className="text-5xl font-bold">{selectedCity}</h3>
          <h4 className="text-2xl font-bold">
            Wind Speed:{weatherData?.current?.wind_speed_10m} km/h
            <span className=""></span>
          </h4>
        </div>
      </div>

      <button
        onClick={handleSwitch}
        className="absolute bottom-16 rounded-md px-5 py-2 left-1/2 -translate-x-1/2 bg-purple-600 text-white"
      >
        {isWorld ? "World" : "Nigeria"}
      </button>
    </div>
  );
};

export default App;
