import React from 'react';
import styled from 'styled-components';
import logo from '../assets/jumia.svg';
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaCcPaypal,
  FaGooglePay,
  FaApplePay,
} from 'react-icons/fa';

const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #1b1118ff;
  align-item: space-around;
`;

const FirstDiv = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Div = styled.div`
  color: #fff;
  white-space: nowrap;
`;

const SecondDiv = styled.div`
  display: flex;
  background-color: #615468ff;
  justify-content: space-around;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Img = styled.img`
  vertical-align: middle;
  width: 25px;
`;

const H1 = styled.h1`
  margin-top: 15px;
  font-size: 0.8em;
`;
const P = styled.p`
  font-size: 0.7em;
`;
const Form = styled.form`
  div {
    font-size: 0.8em;
    color: orangered;
  }

  input[type='email'] {
    width: 230px;
    height: 40px;
    margin-right: 5px;
    border-radius: 4px;
    border: 2px solid #fff;
  }

  input[type='submit'] {
    -webkit-appearance: none;
    appearance: none;
    width: 115px;
    height: 40px;
    margin-right: 5px;
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 4px;
  }

  label {
    font-size: 0.8em;
    margin-top: 25px;

    input[type='checkbox'] {
      width: 15px;
      height: 15px;
      vertical-align: middle;
      margin-right: 5px;
      border: 2px solid #fff;
      cursor: pointer;

      &:checked {
        accent-color: green;
      }
    }
  }
`;

const P1 = styled.p`
  margin-top: 0.02em;
  margin-bottom: 0.2em;
  font-size: 0.7em;
`;

const Hr = styled.hr`
  width: 90%;
  height: 0px;
`;

const Footer = ({ style, logoName }) => {
  return (
    <Foot
      style={{
        ...style,
      }}
    >
      <FirstDiv>
        <Div>
          <div
            style={{
              marginTop: '15px',
              fontSize: '1.6em',
            }}
          >
            {String(logoName).toUpperCase()}
            <Img src={logo} />
          </div>
        </Div>

        <Div>
          <H1>NEW TO JUMIA?</H1>
          <P>
            Subscribe to our newsletter to get updated on our latest offers!
          </P>

          <Form>
            <input
              type="email"
              name="email"
              placeholder="Enter E-mail Address"
            />
            <input type="submit" value="Subscribe" />
            <label
              style={{
                display: 'block',
              }}
            >
              <input type="checkbox" />
              {window.innerWidth > 700 ? (
                <>
                  I agree to Jumia's Privacy and Cookie Policy. You can
                  unsubcribe from newsletters at <br /> any time.
                </>
              ) : (
                <>
                  I agree to Jumia's Privacy and Cookie Policy. You can
                  unsubcribe
                  <br />
                  from newsletters at any time.
                </>
              )}
              <div>I accept the Legal Terms</div>
            </label>
          </Form>
        </Div>
        <Div>
          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: '30px',
                height: '30px',
                verticalAlign: 'middle',
                backgroundColor: 'orangered',
                display: 'inline-block',
                marginTop: '15px',
                marginRight: '10px',
                borderRadius: '5px',
              }}
            />
            <span
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '30px',
                marginTop: '15px',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  marginTop: '0px',
                  fontSize: '.7em',
                }}
              >
                DOWNLOAD JUMIA FREE APP
              </span>
              <span
                style={{
                  fontSize: '.6em',
                }}
              >
                Get across to exclusive offers
              </span>
            </span>
          </span>

          <div
            style={{
              marginTop: '-10px',
            }}
          >
            <span
              style={{
                marginRight: '10px',
              }}
            >
              <FaApple
                size={25}
                style={{
                  verticalAlign: 'middle',
                  marginTop: '15px',
                }}
              />
              <span
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    marginTop: '0px',
                    fontSize: '.5em',
                  }}
                >
                  Downlaod on the
                </span>
                <span
                  style={{
                    fontSize: '.7em',
                  }}
                >
                  App Store
                </span>
              </span>
            </span>

            <span>
              <FaGooglePlay
                size={25}
                style={{
                  verticalAlign: 'middle',
                  marginTop: '15px',
                }}
              />
              <span
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    marginTop: '0px',
                    fontSize: '.5em',
                  }}
                >
                  Get it on
                </span>
                <span
                  style={{
                    fontSize: '.7em',
                  }}
                >
                  Google Play
                </span>
              </span>
            </span>
          </div>
        </Div>
      </FirstDiv>

      <SecondDiv>
        <Div>
          <H1>NEED HELP?</H1>
          <P1>Chat with us</P1>
          <P1>Help Center</P1>
          <P1>Contact Us</P1>
          <H1>USEFUL LINkS</H1>
          <P1>Service Center</P1>
          <P1>How to shop on Jumia?</P1>
          <P1>Chat with us</P1>
          <P1>Deliverery Options and timeslines</P1>
          <P1>How to return products on jumia?</P1>
          <P1>Corporate and bulk purchases</P1>
          <P1>Report a Product</P1>
          <P1>Dispute Resolution Policy</P1>
          <P1>Returns & Refund Timeline</P1>
          <P1>Refund Policy</P1>
          <P1>Pickup Stations</P1>
          <P1>Jumia Delivery</P1>
        </Div>

        <Div>
          <H1>ABOUT JUMIA</H1>
          <P1>About Us</P1>
          <P1>Jumia Careers</P1>
          <P1>Corporate Website</P1>
          <P1>Terms and Conditions</P1>
          <P1>Privacy Notice</P1>
          <P1>Jumia Store Credit & Conditions</P1>
          <P1>Jumia Payment Information Guidelines</P1>
          <P1>Cookie Notice</P1>
          <P1>Official Stores</P1>
          <P1>Flash Sales</P1>
          <P1>Black Friday</P1>
        </Div>

        <Div>
          <H1>MAKE MONEY WITH JUMIA</H1>
          <P1>Sell on Jumia</P1>
          <P1>Vendor Hub</P1>
          <P1>Become a Sales Consultant</P1>
        </Div>

        <Div>
          <H1>JUMIA INTERNATIONAL</H1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <P1>Algeria</P1>
              <P1>Egypt</P1>
              <P1>Ghana</P1>
              <P1>Ivory Coast</P1>
            </div>
            <div>
              <P1>Kenya</P1>
              <P1>Morocco</P1>
              <P1>Senegal</P1>
              <P1>Uganda</P1>
            </div>
          </div>
        </Div>
      </SecondDiv>
      <Div
        style={{
          flexDirection: `${window.innerWidth <= 700 ? 'column' : 'row'}`,
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          backgroundColor: '#615468ff',
          padding: `${window.innerWidth <= 700 ? '30px' : '0px'}`,
        }}
      >
        <div>
          <H1>JOIN US ON</H1>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              width: '100%',
              justifyContent: `${window.innerWidth <= 700 ? 'flex-start' : 'space-around'}`,
              backgroundColor: '#615468ff',
              gap: `${window.innerWidth <= 700 ? '10px' : '20px'}`,
            }}
          >
            <FaFacebook size={30} />
            <FaYoutube size={30} />
            <FaInstagram size={30} />
            <FaXTwitter size={30} />
            <FaTiktok size={30} />
          </div>
        </div>
        <div>
          <H1>PAYMENT METHODS</H1>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              width: '100%',
              justifyContent: `${window.innerWidth <= 700 ? 'flex-start' : 'space-around'}`,
              backgroundColor: '#615468ff',
              gap: `${window.innerWidth <= 700 ? '10px' : '20px'}`,
            }}
          >
            <FaCcVisa size={30} />
            <FaCcMastercard size={30} />
            <FaCcAmex size={30} />
            <FaCcDiscover size={30} />
            <FaCcPaypal size={30} />
            <FaGooglePay size={30} />
            <FaApplePay size={30} />
          </div>
        </div>
      </Div>
      <div
        style={{
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'space-around',
          backgroundColor: '#615468ff',
        }}
      >
        <Hr />
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <span>OPAY</span>{' '}
          <span>
            <Img
              src={logo}
              alt="logo"
              style={{
                width: '15px',
                height: '15px',
                marginTop: '-4px',
                marginLeft: '15px',
              }}
            />
            DELIVERY
          </span>
        </div>
      </div>
    </Foot>
  );
};

export default Footer;
