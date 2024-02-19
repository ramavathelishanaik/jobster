import mainImg from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage.js';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <Link to='/register' className='btn btn-hero'>
          login/register
            
          </Link>
        </div>
        <img
          src={mainImg}
          alt='mainLogo'
          className='img main-img
            '
        />
      </div>
    </Wrapper>
  );
};

export default Landing;
