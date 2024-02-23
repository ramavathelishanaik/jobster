import { useEffect } from 'react';
import Job from './job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { getAllJobs } from '../features/alljobs/alljobsSlice';
import PaginationContainer from './PaginationContainer';

const Jobcontainer = () => {
  const {
    jobs,
    isLoading,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
    page
  } = useSelector((store) => store.alljobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, searchStatus, searchType, sort,page]);

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
      <h5>
        {totalJobs} job{jobs?.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>

      {numOfPages > 1 && <PaginationContainer />}
    </Wrapper>
  );
};

export default Jobcontainer;
