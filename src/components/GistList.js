import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Gist from './Gist';
const GistList = () => {
    const gists = useSelector((state) => state.gists.gists);
    return(
        <>
         <div>
  
      {gists.length === 0 ? (
        <p>No gists found.</p>
      ) : (
        
        <div style={{marginTop:'20px', marginLeft:'456px'}} className=''>
          {gists.map((gist) => (
            <Gist key={gist.id} gist={gist} />
          ))}
        </div>
      )}
    </div>
        </>
    )
}


export default GistList
