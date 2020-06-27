import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Day from './Components/Card';
import getPosition from './Services/Geolocation';
import getWeather from './Services/ServiceWeather';
import './main.css';

const App = () => {
  const [result, setResult] = useState([]);
  const [place, setPlace] = useState('');

  useEffect(() => {
    getPosition().then((value) => {
      const { latitude, longitude, city } = value;
      setPlace(city);
      getWeather(latitude, longitude).then((weather) => {
        setResult(weather);
      });
    });
  }, []);

  return (
    <Layout className="weather__wrapper">
      <h1 className="wether__city">
        {place}
      </h1>
      <div className="weather__cards">
        {result.map((value, index) => (
          <Day data={value} key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default App;
