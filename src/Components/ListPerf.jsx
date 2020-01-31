import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListPerf.css';

const ListPerf = () => {

  const [listPerf, setListPerf] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/performance')
      .then((result) => {
        if (result.data) {
          setListPerf(result.data.sort(compare));
        }
      })
      .then((error) => {
        if (error) {
          console.log(error);
        }
      })
  }, []);

  const addVote = (id) => {
    let vote = listPerf[id].vote;
  };

  const compare = (a, b) => {
    const voteA = a.vote;
    const voteB = b.vote;

    let comparison = 0;
    if (voteA > voteB) {
      comparison = 1;
    } else if (voteA < voteB) {
      comparison = -1;
    }

    return -1 * comparison;
  }

  return (
    <div className='container'>
      {listPerf.map((perf, key) => {
        const style = {
          background: `url(${perf.image_url})`
        };
        return <div className='perf' style={style}>
          <div>
            <h3>{perf.name}</h3>
            <p>{perf.description}</p>
            <button>Voter pour ce numéro</button>
            <p>Nombre de votes: {perf.vote}</p>
          </div>
        </div>
      })}

    </div>
  );
}

export default ListPerf;