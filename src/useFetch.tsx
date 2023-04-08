import React, { useState, useEffect } from 'react'

const useFetch = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('./public/recipes.json')
        .then(res => res.json())
        .then(data => {
          setData(data['recipes'])
        });
    }, []);
  
    return data;
  }
  
  export default useFetch;



