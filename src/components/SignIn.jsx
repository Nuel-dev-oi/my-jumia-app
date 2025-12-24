import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/jumia.svg';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';

const Div = styled.div`
  width: 101%;
  height: max-content;
  grid-column: 1/-1;
  grid-row: 1 / span 3;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const H1 = styled.h1`
  font-size: 1.3rem;
  font-weight: 400;
`;

const P = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

const Input = styled.input`
  height: 50px;
  font-size: 0.5em;
  width: 30%;
  caret-color: orange;
  border-radius: 5px;
  border: solid 1px #000;
  padding: 5px;
  margin-bottom: 25px;
  flex: 0 0 50px;

  &:focus {
    outline: none;
    border: solid 2px orange;
  }
`;

const Submit = styled.input`
  width: 30%;
  height: 50px;
  color: #fff;
  background-color: orange;
  outline: none;
  border: none;
  margin-top: 40px;
  border-radius: 5px;
  font-size: 0.6em;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  flex: 0 0 50px;
`;

const InnerDiv = styled.div`
  font-size: 0.7em;
  margin-top: 40px;
  background-color: rgba(97, 145, 255, 1);
  color: #fff;
  font-weight: 400;
  width: 30%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
`;

const EmailDiv = styled.div`
  background-color: #fff;
  color: #000;
  font-weight: 100;
  font-size: 0.5em;
  position: absolute;
  top: 223px;
  left: 480px;
  transition:
    color 0.5s linear,
    top 0.5s linear;
  opacity: 1;
`;

const PasswordDiv = styled.div`
  background-color: #fff;
  color: #000;
  font-weight: 100;
  font-size: 0.5em;
  position: absolute;
  top: 300px;
  left: 480px;
  transition:
    color 0.5s linear,
    top 0.5s linear;
  opacity: 1;
`;

const SignIn = ({ appName }) => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({
    top: '223px',
    color: '#000',
    fontSize: '.5em',
  });
  const [absolute, setAbsolute] = useState({
    top: '300px',
    color: '#000',
    fontSize: '.5em',
  });
  const [loggedIn, _] = useState(
    JSON.parse(localStorage.getItem('loggedIn')) || false
  );

  const ref = useRef();
  const secondRef = useRef();

  useEffect(() => {
    if (loggedIn) navigate('/');
  }, [loggedIn, navigate]);

  const handleFocus = () => {
    if (ref.current.matches(':focus')) {
      setPosition({ top: '205px', color: 'orange', fontSize: '.4em' });
    }
    if (secondRef.current.matches(':focus')) {
      setAbsolute({ top: '280px', color: 'orange', fontSize: '.4em' });
    }
  };

  const handleBlur = () => {
    if (ref.current.matches(':not(:focus)') && !ref.current.value) {
      setPosition({ top: '223px', color: '#000', fontSize: '.5em' });
    }
    if (secondRef.current.matches(':not(:focus)') && !secondRef.current.value) {
      setAbsolute({ top: '300px', color: '#000', fontSize: '.5em' });
    }
  };

  const handleSubmit = () => {
    let done = null;
    const email = ref.current.value || false;
    const password = secondRef.current.value || false;
    if (email && password) {
      localStorage.clear();
      localStorage.setItem('user', JSON.stringify({ email, password }));
      done = true;
    }

    if (done) {
      localStorage.setItem('loggedIn', JSON.stringify(true));
      navigate('/', { replace: true });
    }
  };

  return (
    <Div>
      <Img src={logo} />
      <H1>Welcome to {appName}</H1>
      <P>Use youe email or phone to log in or sign up.</P>

      <Input
        name="sign-in"
        type="email"
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={ref}
      />
      <div className="emailValid"></div>
      <EmailDiv
        className="email"
        style={{
          top: `${position.top}`,
          color: `${position.color}`,
          fontSize: `${position.fontSize}`,
        }}
      >
        Enter your Email*
      </EmailDiv>

      <Input
        name="password"
        type="password"
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={secondRef}
      />
      <div className="passwordValid"></div>
      <PasswordDiv
        className="passowrd"
        style={{
          top: `${absolute.top}`,
          color: `${absolute.color}`,
          fontSize: `${absolute.fontSize}`,
        }}
      >
        Enter your Password*
      </PasswordDiv>

      <Submit type="submit" value="Continue" onClick={handleSubmit} />
      <InnerDiv>
        <img
          src={facebook}
          alt="google"
          style={{
            width: '50px',
          }}
        />
        Log in with Facebook
      </InnerDiv>
      <InnerDiv>
        <img
          src={google}
          alt="google"
          style={{
            width: '50px',
            marginLeft: '-15px',
          }}
        />
        Log in with Google
      </InnerDiv>
      <P>Need help? Visit our Help center or contact us on 57643.</P>
      <div
        style={{
          fontWeight: '400',
        }}
      >
        {String(appName).toUpperCase()}
        <img
          src={logo}
          alt="logo"
          style={{
            width: '20px',
            verticalAlign: 'middle',
          }}
        />
      </div>
    </Div>
  );
};

export default SignIn;
