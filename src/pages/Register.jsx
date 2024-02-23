import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/RegisterPage';
import { FormRow } from '../components';
import { toast } from 'react-toastify';

//redux tool kit
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';

//navigate
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
};

const Register = () => {
  const [value, setValue] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);

  const handleChange = (e) => {
    setValue((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleMember = () => {
    setValue((pre) => ({
      ...pre,
      isMember: !value.isMember,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = value;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    // setValue(initialState);
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ email, password, name }));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{value.isMember ? 'Login' : 'Register'}</h3>
        {/* name field */}
        {!value.isMember && (
          <FormRow
            name='name'
            value={value.name}
            type='text'
            handleChange={handleChange}
            labelText='name'
          />
        )}

        {/* email field */}
        <FormRow
          name='email'
          value={value.email}
          type='email'
          handleChange={handleChange}
          labelText='email'
        />

        {/* password field */}
        <FormRow
          name='password'
          value={value.password}
          type='password'
          handleChange={handleChange}
          labelText='password'
        />

        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading ? 'loading...' : 'submit'}
        </button>

        <button
          type='button'
          className='btn btn-block btn-hipster'
          disabled={isLoading}
          onClick={() => {
            dispatch(
              loginUser({ email: 'testUser@test.com', password: 'secret' })
            );
          }}
        >
          {isLoading ? 'loading...' : 'demo'}
        </button>

        <p>
          {value.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {value.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
