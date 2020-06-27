import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const Day = (props) => {
  const { data } = props;

  const getData = () => {
    const dates = new Date(data.observation_time.value);
    const day = dates.getDay();
    return day;
  };

  const number = getData();

  return (
    <Card tabIndex="0" className="weather__card">
      <Meta
        avatar={<Avatar src={`../src/Assets/images/${data.weather_code.value}.svg`} className="weather__description" />}
        title={days[number]}
        description={`${data.temp[1].max.value} °C`}
      />
    </Card>
  );
};

Day.prototype = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Day;
