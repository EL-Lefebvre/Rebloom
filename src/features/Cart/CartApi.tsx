// import axios from "axios";

// const baseURL = "https://api.openweathermap.org/data/2.5";

// const getWeatherBasedOnLocation = async (location) => {
//   try {
//     const apiCall = await axios
//       .get(
//         `${baseURL}/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_APP_API}&units=metric`
//       )
//       .then((res) => res.data);
//     return apiCall;
//   } catch (e) {
//     console.log(e);
//   }
// };

// const getForecast = async (lat, lon) => {
//   try {
//     const singleApiCall = await axios
//       .get(
//         `${baseURL}/onecall?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_WEATHER_APP_API}&units=metric`
//       )
//     //   .then((res) => res.data);
//     return singleApiCall;
//   } catch (e) {
//     alert("Invalid Location");
//   }
// };

// export { getWeatherBasedOnLocation, getForecast };

const CartApi = () => {};
export default CartApi;
