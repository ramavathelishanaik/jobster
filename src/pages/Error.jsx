import { Link } from 'react-router-dom';
import notFoundImg from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={notFoundImg} alt='not found' />
        <h1>Ohh! Page Not Found</h1>
        <p>We con't seems to find the page you're looking for...</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
