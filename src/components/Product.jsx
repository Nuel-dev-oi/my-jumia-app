import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdFlashOn } from 'react-icons/md';
import styled from 'styled-components';
import sponsors from '../scripts/sponsoredList.js';
import dataList from '../scripts/dataList.js';
import FlashSale from './FlashSale.jsx';
import Ratings from './Rating';
import items from '../scripts';
import { IoPaperPlane } from 'react-icons/io5';
import { TbBox, TbRefresh, TbTruckDelivery } from 'react-icons/tb';
import axios from 'axios';
import CartButton from './CarttButton.jsx';
import Paragraph from './Paragraph.jsx';
import CartButton0 from './CartButton0.jsx';

const Div = styled.div`
  font-size: 1rem;
  font-weight: normal;
  display: grid;
  grid-template-columns: calc(75% - 10px) calc(25% - 10px);
  grid-template-rows: repeat(10, max-content);
  grid-gap: 20px;
  height: max-content;
  background-color: #eeededff;
  grid-column-start: 2;
  grid-column-end: span 2;
  position: relative;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const Main = styled.main`
  background-color: #fff;
  grid-column: 1 / span 1;
  grid-row: 1 / 4;
  box-shadow: 0px 0px 5px 2px #eeededf3;
  width: 100%;
  display: flex;
  height: 725px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    height: max-content;
  }
`;

const Detail = styled.article`
  background-color: #fff;
  grid-column: 1 / span 1;
  grid-row: 4 / span 3;
`;

const Specification = styled.article`
  background-color: #fff;
  grid-column: 1 / span 1;
  grid-row: 7 / span 1;
`;

const Customer = styled.article`
  background-color: #fff;
  grid-column: 1 / span 1;
  grid-row: 8 / span 1;
`;

const FeedBack = styled.article`
  background-color: #fff;
  grid-column: 1 / span 1;
  grid-row: 9 / span 1;
`;

const Viewed = styled.article`
  background-color: #fff;
  grid-column: 1 / span 2;
  grid-row: 10 / span 1;
`;

const Mini = styled.article`
  background-color: #ede8e8ff;
  grid-column: 2 / span 1;
  grid-row: 4 / span 2;
  height: max-content;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 2px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Seller = styled.article`
  background-color: #fff;
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
`;

const Delivery = styled.article`
  background-color: #fff;
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 600px;
`;

const Img = styled.img`
  width: 345px;
  height: 350px;
`;

const Para = styled.div`
  width: 100%;
  margin: 0px;
  height: 110px;
  font-size: 1.2em;
  box-shadow: 0px 1px 1px 1px #eee;
`;
const InnerDiv = styled.div`
  width: 500px;
  height: 100%;
  position: relative;
  padding: 5px;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
`;

const FloatSpan = styled.span`
  background-color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    background-color: #ffcff2ff;
  }
`;

const Select = styled.select`
  width: 95%;
  height: 50px;
  border: 1px solid;
  align-self: center;
  outline: none;
  margin-bottom: 20px;
  border-radius: 4px;

  &:hover {
    border: double 2px orange;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  height: max-content;
`;

function handleDiscount(formerPrice, price) {
  let oldPrice = Number(formerPrice?.replace(/,/g, ''));
  let newPrice = Number(price?.replace(/,/g, ''));
  return (((newPrice - oldPrice) / oldPrice) * 100).toFixed(2);
}

const Product = () => {
  const location = useLocation();
  const ref = useRef();
  const miniRef = useRef();
  const productRef = useRef();
  const feedRef = useRef();
  const specRef = useRef();
  const [product, setProduct] = useState();
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState({ top: '0', pos: 'static' });
  const navigate = useNavigate();
  const [loggedIn, _] = useState(
    JSON.parse(localStorage.getItem('loggedIn')) || false
  );

  const [pos, setPos] = useState({ top: '500px', pos: 'static' });
  const cartRef = useRef();

  useEffect(() => {
    const pathname = location.pathname;
    const handleScroll = () => {
      const rect = cartRef.current.getBoundingClientRect();
      let isScrolling = true;
      if (isScrolling) {
        if (rect.y < 60 && rect.y >= -1100) {
          setPos({
            pos: 'fixed',
            top: '80%',
            left: `5px`,
          });
        } else {
          setPos({
            pos: 'absolute',
            top: '1280px',
            left: `5px`,
          });
        }
      }
      isScrolling = false;
    };
    window.innerWidth <= 700 && pathname.includes('product/')
      ? window.addEventListener('scroll', handleScroll)
      : null;

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (!loggedIn) {
      navigate('/sign_in', { replace: true });
    }
  }, [navigate, loggedIn]);

  useEffect(() => {
    const handleScroll = () => {
      const rect = productRef.current.getBoundingClientRect();
      let isScrolling = true;
      if (isScrolling) {
        if (rect.y <= 85) {
          setPosition({
            pos: 'fixed',
            top: '90px',
            right: '67px',
            width: '22%',
          });
        } else {
          setPosition({ pos: 'static', width: '' });
        }

        if (rect.y <= -280) {
          setPosition({
            pos: 'absolute',
            top: `395px`,
            right: '0px',
            width: '100%',
          });
        }
      }
      isScrolling = false;
    };

    window.innerWidth > 700
      ? window.addEventListener('scroll', handleScroll)
      : null;

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          'https://fakestoreapi.com/products/category/electronics'
        );
        setLoading(false);
        setDetails(res.data[0]);
      } catch (Error) {
        setDetails(`${Error.message}: Product details not Found`);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const handleRefresh = () => {
      const locationPath = location.pathname;
      const path = locationPath.substring(locationPath.lastIndexOf('/') + 1);
      ref.current = items;
      const products = ref.current;
      const productId = JSON.parse(localStorage.getItem('productId'));
      const item =
        productId !== path
          ? products.find((item) => item.id === path)
          : products.find((item) => item.id === productId);
      setProduct(item);

      if (item) {
        localStorage.removeItem('product');
        localStorage.setItem('product', JSON.stringify(item));
      }

      if (!item) {
        let product_item = JSON.parse(localStorage.getItem('product'));
        setProduct(product_item);
      }
    };

    handleRefresh();
  }, [location.pathname]);

  return (
    <Div>
      <Main ref={cartRef}>
        <Img src={product?.picture} alt="product Image" />
        <InnerDiv>
          <Para>
            <div>
              <span
                style={{
                  margin: '10px 0px',
                  display: 'inline-block',
                  backgroundColor: 'rgba(31, 41, 83, 1)',
                  color: '#fff',
                  fontSize: '.6em',
                  padding: '3px',
                  boxShadow: '0px 0px 5px 1px',
                  borderRadius: '2px',
                  marginRight: '0px',
                }}
              >
                Official store
              </span>
              <span
                style={{
                  margin: '10px',
                  display: 'inline-block',
                  backgroundColor: 'rgba(111, 188, 220, 1)',
                  color: '#fff',
                  fontSize: '.6em',
                  padding: '3px',
                  boxShadow: '0px 0px 5px 1px',
                  borderRadius: '2px',
                }}
              >
                Non-returnable
              </span>
            </div>
            {product?.item}
            <p
              style={{
                fontSize: '.8em',
              }}
            >
              Brand: {product?.item}
            </p>
          </Para>
          <FloatSpan
            style={{
              position: 'absolute',
              top: '10px',
              right: '12px',
              cursor: 'pointer',
            }}
          >
            <MdFavoriteBorder size={25} color="orange" />
          </FloatSpan>
          <p
            style={{
              backgroundColor: 'rgba(255, 0, 0, 1)',
              color: '#fff',
              padding: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              borderRadius: '4px',
              fontSize: '.9em',
              width: `${window.innerWidth <= 700 ? `${window.innerWidth - 25}px` : '99%'}`,
              alignItems: 'center',
              boxShadow: '0px 0px 5px 1px rgba(255, 0, 0, 0.5)',
              marginTop: '10px',
            }}
          >
            <span>
              <MdFlashOn
                size={25}
                color="orange"
                style={{
                  verticalAlign: 'middle',
                }}
              />
              Flash Sales
            </span>
            <span>Start on: 2nd Jan, 10am</span>
          </p>
          <Price>
            <span
              style={{
                color: '#000',
                marginRight: '5px',
                fontSize: '1.5em',
                fontWeight: '500',
              }}
            >
              {'\u20a6'} {product?.price}
            </span>
            <span
              style={{
                color: '#000',
                marginRight: '5px',
                fontSize: '.9em',
                fontWeight: '400',
                textDecoration: 'line-through',
              }}
            >
              {'\u20a6'} {product?.formerPrice}
            </span>
            <span
              style={{
                fontSize: '.8em',
                backgroundColor: '#ffcff2ff',
                padding: '4px',
                color: 'rgba(255, 155, 4, 1)',
                borderRadius: '5px',
              }}
            >
              {handleDiscount(product?.formerPrice, product?.price)}%
            </span>
          </Price>
          <span
            style={{
              fontSize: '.7em',
              fontWeight: '200',
            }}
          >
            in stock
          </span>{' '}
          <br />
          <span
            style={{
              fontSize: '.8em',
              fontWeight: '200',
              color: '#000',
            }}
          >
            + shipping from{' '}
            <b
              style={{
                fontWeight: '500',
                fontSize: '.9em',
              }}
            >
              {'\u20a6'} 750{' '}
            </b>
            from Church (Alimosho)
          </span>
          <br />
          <Ratings favorite={product?.favorite} />
          <span
            style={{
              color: 'rgba(55, 91, 253, 1)',
              display: 'inline-block',
              fontSize: '.9em',
              fontWeight: '400',
              marginTop: '4px',
            }}
          >
            (5000 verified ratings)
          </span>
          <CartButton
            style={{
              width: `${window.innerWidth <= 700 ? `${window.innerWidth - 25}px` : '99%'}`,
              position: `${window.innerWidth <= 700 ? pos.pos : 'static'}`,
              top: `${pos.top}`,
              left: `${pos.left}`,
              zIndex: '10',
            }}
          />
          <div>
            <h2
              style={{
                fontSize: '1em',
                fontWeight: '400',
                marginTop: '4px',
                marginBottom: '0px',
              }}
            >
              PROMOTIONS
            </h2>
            <p
              style={{
                fontSize: '.9em',
                fontWeight: '200',
                marginTop: '0px',
                color: 'rgba(30, 30, 243, 1)',
              }}
            >
              Call 07071961353 To Place Your Order
            </p>
            <p
              style={{
                fontSize: '.9em',
                fontWeight: '200',
                marginTop: '0px',
                color: 'rgba(30, 30, 243, 1)',
              }}
            >
              Enjoy cheaper shipping fees when you select a Pickup station at
              checkout
            </p>
          </div>
        </InnerDiv>
      </Main>
      <Viewed>
        <FlashSale
          products={sponsors}
          name="Recently Viewed"
          style={{
            backgroundColor: '#fff',
          }}
          color={{
            color: '#000',
            fontWeight: '200',
          }}
          see={false}
        />
      </Viewed>
      <Delivery>
        <Para
          style={{
            height: 'max-content',
            fontSize: '.9em',
            padding: '10px',
            fontWeight: '300',
            color: '#000',
          }}
        >
          DELIVERY & RETURNS
        </Para>
        <Para
          style={{
            height: 'max-content',
            fontSize: '.9em',
            padding: '7px',
            fontWeight: '300',
            color: '#000',
          }}
        >
          <h3
            style={{
              fontWeight: '400',
              fontSize: '.9em',
              padding: '4px',
              margin: '0px',
            }}
          >
            JUMIA
            <span
              style={{
                color: 'rgba(255, 7, 7, 1)',
              }}
            >
              <IoPaperPlane
                style={{
                  verticalAlign: '-1px',
                }}
              />
              EXPRESS
            </span>
          </h3>
          <p
            style={{
              margin: '0px',
              fontSize: '12.3px',
            }}
          >
            The BEST products, delivered faster. Now PAY on DELIVERY, Cash or
            Bank Transfer Anywhere, Zero Wahala!
          </p>
        </Para>
        <h2
          style={{
            fontSize: '1.1em',
            fontWeight: '400',
            padding: '0px',
            marginBlock: '10px',
            paddingLeft: '5px',
          }}
        >
          Choose your Location
        </h2>
        <Select>
          <option>Lagos</option>
          <option>Abuja</option>
        </Select>
        <Select>
          <option>ALIMOSHO</option>
          <option>AJAH</option>
        </Select>

        <Para
          style={{
            height: 'max-content',
          }}
        >
          <Flex
            style={{
              border: 'none',
            }}
          >
            <span
              style={{
                border: '1px solid #000',
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 5px 1px #eee',
                margin: '10px',
                flex: '1 0 auto',
                borderRadius: '4px',
              }}
            >
              <TbBox
                size={30}
                style={{
                  verticalAlign: 'middle',
                }}
              />
            </span>
            <div>
              <h3
                style={{
                  fontWeight: '400',
                  fontSize: '.7em',
                  padding: '4px',
                  margin: '0px',
                }}
              >
                Pick up Station
              </h3>
              <p
                style={{
                  fontWeight: '200',
                  fontSize: '.6em',
                  padding: '4px',
                  margin: '0px',
                  height: 'max-content',
                  color: '#000',
                }}
              >
                Delivery Fees <bold>{'\u20a6'} 750</bold> ready for pickup
                between <bold>02 January</bold> and <bold>09 January</bold> if
                you place your order within the next <bold>9hrs 53mins </bold>
              </p>
            </div>
          </Flex>

          <Flex
            style={{
              border: 'none',
            }}
          >
            <span
              style={{
                border: '1px solid #000',
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 5px 1px #eee',
                margin: '10px',
                flex: '1 0 auto',
                borderRadius: '4px',
              }}
            >
              <TbTruckDelivery
                size={30}
                style={{
                  verticalAlign: 'middle',
                }}
              />
            </span>
            <div>
              <h3
                style={{
                  fontWeight: '400',
                  fontSize: '.7em',
                  padding: '4px',
                  margin: '0px',
                }}
              >
                Door Dellivery
              </h3>
              <p
                style={{
                  fontWeight: '200',
                  fontSize: '.6em',
                  padding: '4px',
                  margin: '0px',
                  height: 'max-content',
                  color: '#000',
                }}
              >
                Delivery Fees <bold>{'\u20a6'} 1,710</bold> Ready for delivery
                between <bold>02 January</bold> and <bold>09 January</bold>
                if you place your order within the next{' '}
                <bold>9hrs 53mins </bold>
              </p>
            </div>
          </Flex>
        </Para>
        <Flex
          style={{
            border: 'none',
          }}
        >
          <span
            style={{
              border: '1px solid #000',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 5px 1px #eee',
              margin: '10px',
              flex: '1 0 auto',
              borderRadius: '4px',
            }}
          >
            <TbRefresh
              size={30}
              style={{
                verticalAlign: 'middle',
              }}
            />
          </span>
          <div>
            <h3
              style={{
                fontWeight: '400',
                fontSize: '.8em',
                padding: '4px',
                margin: '0px',
              }}
            >
              Return Policy
            </h3>
            <p
              style={{
                fontWeight: '200',
                fontSize: '.8em',
                padding: '4px',
                margin: '0px',
                height: 'max-content',
                color: '#000',
              }}
            >
              Free return within 7 days for ALL eligible items
            </p>
          </div>
        </Flex>
      </Delivery>
      <Seller>
        <Para
          style={{
            height: 'max-content',
            fontSize: '.9em',
            padding: '8px',
          }}
        >
          SELLER INFORMATION
        </Para>
        <div>
          <p
            style={{
              fontWeight: '200',
              fontSize: '.8em',
              padding: '4px',
              margin: '5px',
              height: 'max-content',
              color: '#000',
            }}
          >
            Jumia
          </p>
          <p
            style={{
              fontWeight: '200',
              fontSize: '.8em',
              padding: '4px',
              margin: '5px',
              height: 'max-content',
              color: '#000',
            }}
          >
            <bold
              style={{
                fontWeight: '500',
                fontSize: '1em',
                padding: '0px',
                margin: '0px',
                height: 'max-content',
                color: '#000',
              }}
            >
              100
            </bold>
            % Seller Score
          </p>
        </div>
      </Seller>
      <Mini
        className="mini"
        ref={miniRef}
        style={{
          top: `${position.top}`,
          position: `${position.pos}`,
          right: `${position.right}`,
          width: `${position.width}`,
        }}
      >
        <div
          style={{
            flex: '0 0 auto',
            height: 'max-content',
            backgroundColor: '#fff',
          }}
        >
          <Paragraph
            refer={{
              detail: productRef,
              specification: specRef,
              feedback: feedRef,
            }}
          />
        </div>
        <div
          style={{
            flex: '0 0 auto',
            height: 'max-content',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              height: '70%',
            }}
          >
            <img
              src={product?.picture}
              alt="prouct img"
              style={{
                width: '40%',
                height: '100px',
              }}
            />
            <div
              style={{
                margin: '0px',
                marginInline: '10px',
                width: '60%',
              }}
            >
              <p
                style={{
                  margin: '0px',
                  padding: '5px',
                  paddingBottom: '0px',
                }}
              >
                {product?.item}
              </p>
              <p
                style={{
                  margin: '0px',
                  padding: '5px',
                  paddingBottom: '0px',
                  fontWeight: '500',
                }}
              >
                {'\u20a6'} {product?.price}
              </p>
              <p
                style={{
                  margin: '0px',
                  padding: '5px',
                  paddingTop: '0px',
                  textDecoration: 'line-through',
                  fontSize: '.8em',
                  fontWeight: '200',
                  display: 'inline-block',
                }}
              >
                {'\u20a6'} {product?.formerPrice}
              </p>
              <span
                style={{
                  fontSize: '.7em',
                  backgroundColor: '#ffcff2ff',
                  padding: '4px',
                  color: 'rgba(255, 155, 4, 1)',
                  borderRadius: '5px',
                  textDecoration: 'none',
                }}
              >
                {handleDiscount(product?.formerPrice, product?.price)}%
              </span>
            </div>
          </div>
          <CartButton0 />
        </div>
      </Mini>
      <Detail ref={productRef}>
        <Para
          style={{
            height: 'max-content',
            padding: '10px',
          }}
        >
          Product details
        </Para>
        <div
          style={{
            padding: '10px',
            fontSize: '.9em',
          }}
        >
          {loading ? (
            <p> Loading ...</p>
          ) : (
            <p>{details.description || details}.</p>
          )}
        </div>
      </Detail>
      <Specification ref={specRef}>
        <Para
          style={{
            height: 'max-content',
            padding: '10px',
          }}
        >
          Specifications
        </Para>
        <div
          style={{
            padding: '10px',
            fontSize: '.9em',
          }}
        >
          {loading ? (
            <p> Loading ...</p>
          ) : (
            <p>{details.title || 'Product Specs not Found'}.</p>
          )}
        </div>
      </Specification>
      <Customer>
        <FlashSale
          products={dataList}
          name="Customers who viewed this also viewed "
          style={{
            backgroundColor: '#fff',
          }}
          color={{
            color: '#000',
            fontWeight: '200',
          }}
          see={true}
        />
      </Customer>
      <FeedBack ref={feedRef}>
        <Para
          style={{
            height: 'max-content',
            padding: '10px',
            fontSize: '.9em',
          }}
        >
          Verified Customer Feedback
        </Para>
        <p
          style={{
            padding: '5px',
          }}
        >
          Ratings: <Ratings favorite={product?.favorite} />
        </p>
      </FeedBack>
    </Div>
  );
};

export default Product;
