import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import API from '../../utils/API';

function SavedBooks(props) {

    console.log()

const useStyles = makeStyles({
    
    root: {
        alignContent: "center",
        maxWidth: 1000,
        minWidth: 1000,
        marginBottom: 12,
        margin: "auto"
    },
    title: {
      fontSize: 14,
    }
  });

  const classes = useStyles();

  function handleDelete() {
    API.deleteBook(props.book._id).then(err => {
        props.parentMethod();
    }) 
  }

  function handleView() {
    window.location.href = props.book.link;
  }

  return (
    <Grid item xs={12}>
        <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.book.title}
            </Typography>
            <img src={props.book.image} alt={props.book.title}/>
            <Typography variant="body2" component="p">
              {props.book.description ? props.book.description : "No description found."}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleDelete}>Delete</Button>
            <Button size="small" onClick={handleView}>View</Button>
        </CardActions>
        </Card>
    </Grid>
  );
}
export default SavedBooks
  