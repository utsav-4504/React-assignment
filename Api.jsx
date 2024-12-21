import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https:fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 

  return (
    <>
    <h1>useEffect()hook to fetch and display data from an API when the
    component mounts.</h1>
      <Table striped bordered hover variant="dark" border={2} cellPadding={15}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Api;
