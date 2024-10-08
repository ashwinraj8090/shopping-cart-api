import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShoppingCart.css';
import NavBar from './NavBar';

const ViewAllProducts = () => {
  const [data, fetchData] = useState([])
  const fetchDataFromAPI = () => {
    axios.get('https://fakestoreapi.com/products').then(
      (response) => {
        fetchData(response.data)
      }
    ).catch()
  }

  useEffect(() => { fetchDataFromAPI() }, [])
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table shopping-cart-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Rate</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(
                    (value, index) => {
                      return <tr key={index} className="cart-item-row">
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.price}</td>
                        <td>{value.description}</td>
                        <td>{value.category}</td>
                        <td>
                          <img src={value.image} alt={value.title} style={{ width: '50px', height: '50px' }} />
                        </td>
                        <td>{value.rating?.rate}</td>
                        <td>{value.rating?.count}</td>
                      </tr>
                    }
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllProducts
