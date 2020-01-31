import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
  },
}));

const Admin = () => {

  const classes = useStyles();

  const [formA, setFormA] = useState({
    prenom: '',
    nom: '',
    age: 0,
    nation: '',
    profile_pic: '',
    type: ''
  });

  const [formP, setFormP] = useState({
    name: '',
    description: '',
    type: '',
    image_url: '',
    vote: 0,
    artist_id: 0
  });

  const [listA, setListA] = useState([]);

  const handleInputA = (event) => {
    setFormA({...formA, [event.target.name]: event.target.value});
  };

  const handleInputP = (event) => {
    if (event.target.name === 'artist_id') {
      setFormP({...formP, [event.target.name]: parseInt(event.target.value, 10)});
    } else {
      setFormP({...formP, [event.target.name]: event.target.value});
    }
  };

  const submitFormA = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/artist', formA)
      .then((response) => {
        if (response.data) {
          console.log('Artiste ajouté à la BDD !');
          setFormA({
            prenom: '',
            nom: '',
            age: 0,
            nation: '',
            profile_pic: '',
            type: ''
          });
        }
      })
      .then((error) => {
        if (error) {
          console.log(error);
        }
      })
  };

  const submitFormP = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/performance', formP)
      .then((response) => {
        if (response.data) {
          console.log('Numéro ajouté à la BDD !');
          setFormP({
            name: '',
            description: '',
            type: '',
            image_url: '',
            vote: 0,
            artist_id: 0
          });
        }
      })
      .then((error) => {
        if (error) {
          console.log(error);
        }
      })
  };

  useEffect(() => {
    axios.get('http://localhost:8080/artist')
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          setListA(response.data);
        }
      })
      .then((error) => {
        if (error) {
          console.log(error);
        }
      })
  }, [])

  return (
    <>
    {localStorage.getItem('isLogged') ? 
      <div className='forms'>
      <div className='artistForm'>
        <h3>Ajouter un artiste</h3>
        <form>
          <label>Prénom:
            <input type='text' name='prenom' value={formA.prenom} onChange={handleInputA}></input>
          </label>
          <label>Nom:
            <input type='text' name='nom' value={formA.nom} onChange={handleInputA}></input>
          </label>
          <label>Age:
            <input type='number' name='age' value={formA.age} onChange={handleInputA}></input>
          </label>
          <label>Nationalité:
            <input type='text' name='nation' value={formA.nation} onChange={handleInputA}></input>
          </label>
          <label>Image de profil:
            <input type='text' name='profile_pic' value={formA.profile_pic} onChange={handleInputA}></input>
          </label>
          <label>Type:
            <input type='text' name='type' value={formA.type} onChange={handleInputA}></input>
          </label>
          <button onClick={submitFormA}>Envoyer !</button>
        </form>
      </div>
        <div className='performanceForm'>
          <h3>Ajouter un numéro d'artiste</h3>
          <form>
            <label>Nom:
              <input type='text' name='name' value={formP.name} onChange={handleInputP}></input>
            </label>
            <label>Description:
              <input type='text' name='description' value={formP.description} onChange={handleInputP}></input>
            </label>
            <label>Type:
              <input type='text' name='type' value={formP.type} onChange={handleInputP}></input>
            </label>
            <label>Image:
              <input type='text' name='image_url' value={formP.image_url} onChange={handleInputP}></input>
            </label>
            <label>Artiste:
              {listA[0] ?               
                <select name='artist_id' onChange={handleInputP}>
                  {listA.map((artist) => {
                  return <option value={artist.id}>{artist.prenom}</option>
                  })}
                </select>
              :
                <select>
                  <option value='nope'></option>
                </select>
              }
            </label>
            <button onClick={submitFormP}>Envoyer !</button>
          </form>
        </div>
      </div>
    :
      <h1>Not authorized</h1>
    }
    </>
  );
}

export default Admin;