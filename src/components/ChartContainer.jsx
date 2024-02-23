import { useState } from 'react';
import { AreaChart, BarChart } from '../components';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/ChartsContainer';

const ChartContainer = () => {
  const { monthlyApplications: data } = useSelector((store) => store.alljobs);
  const [barChart, setBarChart] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartContainer;
