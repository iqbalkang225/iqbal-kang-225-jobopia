import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width='100%'>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type='monotone' dataKey='count' fill='#000000' />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
