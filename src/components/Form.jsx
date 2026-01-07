import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import data from '../scripts/navList.jsx';
import { useNavigate } from 'react-router-dom';

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #000;
  border-left: none;
  outline: none;
  font-size: 1.1rem;
  border-radius: 2px;
  flex: 1 0 auto;

  @media (max-width: 700px) {
    font-size: 1em;
  }
`;

const Form = styled.form`
  display: flex;
  flex: 0 1 750px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: 700px) {
    width: 60%;
    flex-wrap: wrap;
    justify-content: center;
    flex: 0 1 auto;
  }
`;

const FormSearch = ({ tag, style, search }) => {
  const [query, setQuery] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const flag = data.some((datum) => {
      return datum.toLowerCase().includes(query.toLowerCase().substring(0, 3));
    });
    console.log(flag);
    if (flag) {
      if (query.includes('and')) {
        navigate(
          `/${query
            .toLowerCase()
            .replace(/\band\b/g, '_')
            .replace(/\s/g, '')}`
        );
      } else {
        navigate(`/${query.toLowerCase().replace(/\s/g, '_')}`);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div
        style={{
          width: '80%',
          display: 'flex',
          flex: '0 1 auto',
        }}
      >
        <FaSearch
          style={{
            border: '1px solid #000',
            borderRight: 'none',
            height: '45px',
            width: '15%',
            color: '#000',
            padding: '5px',
            flex: '1 0 auto',
            ...search,
          }}
        />
        <label
          htmlFor="search"
          style={{
            width: '90%',
          }}
        >
          <Input
            style={{
              ...style,
            }}
            type="search"
            id="search"
            name="search"
            list="search-options"
            placeholder="Search products, brands and categories"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>{' '}
      </div>
      {tag && (
        <input
          type="submit"
          value="Search"
          style={{
            height: '45px',
            width: '15%',
            borderRadius: '2px',
            backgroundColor: 'orange',
            color: '#fff',
            boxShadow: '0px 0px 5px 1px gray',
            border: 'none',
            padding: '0',
            fontSize: '0.9em',
            cursor: 'pointer',
            display: 'flex',
          }}
        />
      )}
      <datalist id="search-options">
        <option value="Appliances" />
        <option value="Phones and Tablets" />
        <option value="Health and Beauty" />
        <option value="Home and Office" />
        <option value="Electronics" />
        <option value="Computing" />
        <option value="Gaming" />
        <option value="Fashion" />
        <option value="Baby Products" />
        <option value="Supermarket" />
        <option value="Musical Instruments" />
        <option value="Other Categories" />
      </datalist>
    </Form>
  );
};

export default FormSearch;
