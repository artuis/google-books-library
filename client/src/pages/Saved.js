import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SavedBooks from '../components/SavedBooks';


function Saved(props) {
  const [savedBooks, setSavedBooks] = useState([])

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textAlign: "center"
    },
  }));
  useEffect(() => {
    renderBooks();
  }, [])

  function renderBooks() {
    API.getBooks()
      .then(res => setSavedBooks(res.data))
      .catch(err => console.log(err));
  }
  

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <Grid container spacing={0} direction="column" alignItems="center" justify="center">
          <Grid item xs={12}>
            <Typography variant="h2" className={classes.title}>
              Saved Books
            </Typography>
          </Grid>
          {savedBooks.map(e => <SavedBooks key={e._id} book={e} parentMethod={renderBooks}/>)}
        </Grid>
      </React.Fragment>
    );
  }


export default Saved;
