import React, { useState } from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import { useDispatch } from 'react-redux';
import { fetchGistsFailure, fetchGistsStart, fetchGistsSuccess, searchGists } from '../redux/gistsSlice';
import { getGistForUser } from '../services/gistService';
const Search = () => {
  const [username,setUsername]= useState('');
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    searchGists(e.target.value); // Call the search function whenever the input value changes
  };

  const searchGists = async (username) => {
    if (username.trim() === '') {
      // Clear the gists if the input value is empty
      dispatch(fetchGistsSuccess([]));
      return;
    }

    dispatch(fetchGistsStart());

    try {
      const response = await getGistForUser(username);
      dispatch(fetchGistsSuccess(response.data));
      console.log(response.data);
    } catch (error) {
      dispatch(fetchGistsFailure(error.message));
    }
  };

  return (
    <>
       <Wrapper>
      <InputBox>
      <Octicon name="search" />
      <Input placeholder="Search Gists for the username" type="text" value={username} onChange={handleUsernameChange} />
      </InputBox>
     
    </Wrapper>
    {/* <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter username" />
      <button type="submit">Search</button>
    </form> */}
    </>
 
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search
