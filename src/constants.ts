const baseUrl = `https://api.open-meteo.com/v1/forecast`;

const images = {
  rainyImage:
    "https://w7.pngwing.com/pngs/684/802/png-transparent-heavy-rain-rain-rainy-weather-cloudy-rainy-raining-3d-icon-thumbnail.png",
  sunnyImage:
    "https://w7.pngwing.com/pngs/487/562/png-transparent-sun-logo-sunlight-silhouette-thumbnail.png",
};

const citiesData = [
  { name: "Lagos", latitude: 6.5244, longitude: 3.3792 },
  { name: "Abuja", latitude: 9.0765, longitude: 7.3986 },
  { name: "Kano", latitude: 12.0022, longitude: 8.5919 },
  { name: "Port Harcourt", latitude: 4.8156, longitude: 7.0498 },
  { name: "Ibadan", latitude: 7.3775, longitude: 3.947 },
  { name: "Benin City", latitude: 6.3382, longitude: 5.6257 },
  { name: "Jos", latitude: 9.8965, longitude: 8.8583 },
  { name: "Enugu", latitude: 6.5243, longitude: 7.5103 },
  { name: "Zaria", latitude: 11.0855, longitude: 7.7199 },
  { name: "Abeokuta", latitude: 7.1503, longitude: 3.348 },
];

const worldCitiesData = [
  {
    name: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
    flag: "https://flagcdn.com/w320/jp.png",
  },
  {
    name: "Delhi",
    latitude: 28.7041,
    longitude: 77.1025,
    flag: "https://flagcdn.com/w320/in.png",
  },
  {
    name: "Shanghai",
    latitude: 31.2304,
    longitude: 121.4737,
    flag: "https://flagcdn.com/w320/cn.png",
  },
  {
    name: "São Paulo",
    latitude: -23.5505,
    longitude: -46.6333,
    flag: "https://flagcdn.com/w320/br.png",
  },
  {
    name: "Mexico City",
    latitude: 19.4326,
    longitude: -99.1332,
    flag: "https://flagcdn.com/w320/mx.png",
  },
  {
    name: "Cairo",
    latitude: 30.0444,
    longitude: 31.2357,
    flag: "https://flagcdn.com/w320/eg.png",
  },
  {
    name: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
    flag: "https://flagcdn.com/w320/in.png",
  },
  {
    name: "Beijing",
    latitude: 39.9042,
    longitude: 116.4074,
    flag: "https://flagcdn.com/w320/cn.png",
  },
  {
    name: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
    flag: "https://flagcdn.com/w320/bd.png",
  },
  {
    name: "Osaka",
    latitude: 34.6937,
    longitude: 135.5023,
    flag: "https://flagcdn.com/w320/jp.png",
  },
  {
    name: "New York City",
    latitude: 40.7128,
    longitude: -74.006,
    flag: "https://flagcdn.com/w320/us.png",
  },
  {
    name: "Karachi",
    latitude: 24.8607,
    longitude: 67.0011,
    flag: "https://flagcdn.com/w320/pk.png",
  },
  {
    name: "Buenos Aires",
    latitude: -34.6037,
    longitude: -58.3816,
    flag: "https://flagcdn.com/w320/ar.png",
  },
  {
    name: "Chongqing",
    latitude: 29.563,
    longitude: 106.5516,
    flag: "https://flagcdn.com/w320/cn.png",
  },
  {
    name: "Istanbul",
    latitude: 41.0082,
    longitude: 28.9784,
    flag: "https://flagcdn.com/w320/tr.png",
  },
  {
    name: "Kolkata",
    latitude: 22.5726,
    longitude: 88.3639,
    flag: "https://flagcdn.com/w320/in.png",
  },
  {
    name: "Manila",
    latitude: 14.5995,
    longitude: 120.9842,
    flag: "https://flagcdn.com/w320/ph.png",
  },
  {
    name: "Lagos",
    latitude: 6.5244,
    longitude: 3.3792,
    flag: "https://flagcdn.com/w320/ng.png",
  },
  {
    name: "Rio de Janeiro",
    latitude: -22.9068,
    longitude: -43.1729,
    flag: "https://flagcdn.com/w320/br.png",
  },
  {
    name: "Tianjin",
    latitude: 39.3434,
    longitude: 117.3616,
    flag: "https://flagcdn.com/w320/cn.png",
  },
  {
    name: "Kinshasa",
    latitude: -4.4419,
    longitude: 15.2663,
    flag: "https://flagcdn.com/w320/cd.png",
  },
  {
    name: "Guangzhou",
    latitude: 23.1291,
    longitude: 113.2644,
    flag: "https://flagcdn.com/w320/cn.png",
  },
  {
    name: "Los Angeles",
    latitude: 34.0522,
    longitude: -118.2437,
    flag: "https://flagcdn.com/w320/us.png",
  },
  {
    name: "Moscow",
    latitude: 55.7558,
    longitude: 37.6173,
    flag: "https://flagcdn.com/w320/ru.png",
  },
  {
    name: "Shenzhen",
    latitude: 22.5431,
    longitude: 114.0579,
    flag: "https://flagcdn.com/w320/cn.png",
  },
  {
    name: "Lahore",
    latitude: 31.5497,
    longitude: 74.3436,
    flag: "https://flagcdn.com/w320/pk.png",
  },
  {
    name: "Bangalore",
    latitude: 12.9716,
    longitude: 77.5946,
    flag: "https://flagcdn.com/w320/in.png",
  },
  {
    name: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
    flag: "https://flagcdn.com/w320/fr.png",
  },
  {
    name: "Bogotá",
    latitude: 4.711,
    longitude: -74.0721,
    flag: "https://flagcdn.com/w320/co.png",
  },
  {
    name: "Jakarta",
    latitude: -6.2088,
    longitude: 106.8456,
    flag: "https://flagcdn.com/w320/id.png",
  },
];

export default worldCitiesData;

export { citiesData, worldCitiesData, images, baseUrl };
