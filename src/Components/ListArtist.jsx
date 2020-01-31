import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListArtist = () => {

  const [listArtist, setListArtist] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/artist')
      .then((result) => {
        if (result.data) {
          setListArtist(result.data);
        }
      })
      .then((error) => {
        if (error) {
          console.log(error);
        }
      })
  }, []);

  return (
    <>
      {listArtist.map((artist) => {
        return <div>
          <h3>{artist.prenom}</h3>
          <p>{artist.age}</p>
          <p>{artist.nation}</p>
        {/* <img src={artist.profile_pic} alt='perf'></img> */}
          <p>{artist.type}</p>
          <p>Nombre de votes cumulés: </p>
        </div>
      })}
    </>
  );
};

export default ListArtist;