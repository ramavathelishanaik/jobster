import { useEffect } from 'react';
import Job from './job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { getAllJobs } from '../features/alljobs/alljobsSlice';

const Jobcontainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.alljobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
       <Loading center />
      </Wrapper>
    );
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

 
  return (
    <Wrapper>
    <h5>jobs info</h5>
    <div className='jobs'>
      {jobs.map((job) => {
        return <Job key={job._id} {...job} />;
      })}
    </div>
  </Wrapper>
  )
}

export default Jobcontainer
