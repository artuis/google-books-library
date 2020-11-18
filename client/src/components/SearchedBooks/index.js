import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import API from '../../utils/API';

function SearchedBooks(props) {

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

  function handleSave() {
    console.log("save " + props.book.title);
    const book = {
      title : props.book.title,
      description : props.book.description,
      authors : props.book.authors,
      image : props.book.imageLinks.smallThumbnail,
      link : props.book.previewLink
    }
    API.saveBook(book);
  }

  function handleView() {
    window.location.href = props.book.previewLink;
  }

  return (
    <Grid item xs={12}>
        <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.book.title}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.book.authors ? "By " + props.book.authors.join(", ") : ""}
            </Typography>
            <img alt={props.book.title} src={props.book.imageLinks.smallThumbnail}/>
            <Typography variant="body2" component="p">
              {props.book.description ? props.book.description : "No description found."}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSave}>Save</Button>
            <Button size="small" onClick={handleView}>View</Button>
        </CardActions>
        </Card>
    </Grid>
  );
}
export default SearchedBooks
  