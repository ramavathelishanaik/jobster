import React from 'react'
import { FormRow, FormSelect } from '../components';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useSelector, useDispatch } from 'react-redux';
import { handleSearchJobs,clearFilters } from '../features/alljobs/alljobsSlice';

const SearchContainer = () => {
  const {isLoading,search, searchStatus, searchType, sort, sortOptions} = useSelector((store)=> store.alljobs);
  const {jobTypeOptions,statusOptions} = useSelector((store)=> store.job);
  const dispatch = useDispatch();


  const handleSearch=(e)=>{
    if (isLoading) return;
    dispatch(handleSearchJobs({name:e?.target?.name,value:e?.target?.value}))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(clearFilters());
  }
  return (
    <Wrapper>
      
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          {/* search position */}

          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status */}
          <FormSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          {/* search by type */}
          <FormSelect
            labelText='type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          {/* sort */}
          <FormSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
   
    </Wrapper>
  )
}

export default SearchContainer
