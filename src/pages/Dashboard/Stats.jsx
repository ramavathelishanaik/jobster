import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../../features/alljobs/alljobsSlice';
import { StatsContainer, ChartContainer } from '../../components';
import Loading from '../../components/Loading';

const Stats = () => {
  const { monthlyApplications, isLoading } = useSelector(
    (store) => store.alljobs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading) {
    return (
   
        <Loading center />
    
    );
  }
  return (
    <div>
      <StatsContainer />
      {monthlyApplications.length > 0 && (
        <ChartContainer monthlyApplications={monthlyApplications} />
      )}
    </div>
  );
};

export default Stats;
