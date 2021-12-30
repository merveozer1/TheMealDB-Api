import React from 'react';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"



function SearchProduct(props) {
  const location = useLocation(); //bulundugumuz yeri tutuyor
  const navigate = useNavigate(); //nereye yonlendirecegimizi belirliyoruz
  console.log(location)

  const urlParams = new URLSearchParams(location.search);
  const [urlQ, setUrlQ] = useState(urlParams.get('q'))

  const [data, setData] = useState([]);
  const setLoading = useState(true)
  function formHandler(event) {
    event.preventDefault();
    setUrlQ(event.target.qInput.value)
    navigate(`/search-product?q=${event.target.qInput.value}`)
  }

  useEffect(() => {

    setTimeout(() => {
      const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s';
      fetch(URL)
        .then(response => response.json())
        .then(json => {
          setData(json.meals)
          console.log(json)
          setLoading(false)
        })
        .catch((error) => console.error('Error:', error))
    }, 500)
  }, [setLoading])

  return <>
    <h1>Search Product</h1>
    <form onSubmit={formHandler}  >
      <div className="mb-3">
        <label htmlFor="search" className="form-label"></label>
        <input name="qInput" type="text" className="form-control" id="search" placeholder='Search' defaultValue={urlQ} />
      </div>
      <button type="submit" className="btn btn-primary">Ara</button>
    </form>

    {
      location.pathname === "/search-product" &&
      <div>
        <h1>Search Results: {urlQ}</h1>

        {
          data.filter((item) =>
            item.strMeal.toLowerCase().includes(urlQ?.toLowerCase())
          ).map((item) => (
            <li key={item.strMeal}>
              {item.strMeal}

              <img src={item.strMealThumb} alt="thumb" />
            </li>
          ))
        }
      </div>
    }
  </>
}

export default SearchProduct
