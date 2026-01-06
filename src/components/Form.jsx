import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

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
  /*width: 60%;*/
  flex-wrap: nowrap;

  @media (max-width: 700px) {
    width: 60%;
    flex-wrap: wrap;
    justify-content: center;
    flex: 0 1 auto;
  }
`;

const FormSearch = ({ tag, style, search }) => {
  return (
    <Form>
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
            placeholder="Search products, brands and categories"
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
    </Form>
  );
};

export default FormSearch;
