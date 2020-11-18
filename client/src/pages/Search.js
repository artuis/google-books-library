import React, { useState } from "react";
import API from "../utils/API";
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import SearchedBooks from '../components/SearchedBooks';

function Search() {
  // Setting our component's initial state
  const [searchedBooks, setSearchedBooks] = useState([])
  const [searchState, setSearchState] = useState("")

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    setSearchState(event.target.value)
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (searchState.trim().length > 0) {
      API.searchBooks(searchState.trim())
      .then(res => 
        setSearchedBooks(res.data.items)
      )
      .catch(err => console.log(err));
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textAlign: "center"
    },
    form : {
      textAlign: "center"
    },
    button: {
      position : "absolute",
      top: "50%"
    }
  }));

  const classes = useStyles();

  return (
      <React.Fragment>
      <CssBaseline />
        <Grid container spacing={0} direction="column" alignItems="center" justify="center">
          <Grid item xs={12}>
            <Typography variant="h2" className={classes.title}>
              (React) Google Books Search
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleFormSubmit} className={classes.form} noValidate autoComplete="off">
              <TextField onChange={handleInputChange} id="standard-basic" label="Search" />
              <Button onClick={handleFormSubmit} className={classes.title}>Search</Button>
            </form>
          </Grid>
          {searchedBooks.map(e => <SearchedBooks key={e.id} book={e.volumeInfo}/>)}
        </Grid>
      </React.Fragment>
    );
  }


export default Search;
