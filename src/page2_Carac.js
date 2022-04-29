import React from "react";
import { useState, useEffect } from "react";

export function Characters() {
  const [data, setData] = useState([])
  const dataApi = [data];

    
  useEffect(() =>{
    fetch('https://swapi.dev/api/people')
    .then((response) => response.json())
    .then(setData);
  }, []);

  console.log(data);
  
  if (data) {
    return (
      <div>
        <h1>Character List</h1>
        <table>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Gender</th>
        </tr>

        {dataApi.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.height}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })}
      </table>
      </div>
    )
  }
}