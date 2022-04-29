import React from "react";
import { useState, useEffect } from "react";

export function Movies() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/films/1')
    .then((response) => response.json())
    .then(setData);
  })

  if (data){
    return (
      <div>
        <h1>Movie List</h1>  
        <table>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Release Date</th>
          </tr>
          <tr>
            <td>{data.title}</td>
            <td>{data.director}</td>
            <td>{data.release_date}</td>            
          </tr>          
        </table> 
      </div>
    )
  }
}
