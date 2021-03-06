import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditProductModal from './EditProductModal';
import { useStoreContext } from "../utils/GlobalState";
import API from '../utils/API';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "40px",
    marginBottom: "40px",
    marginRight: "10px"
  },
  media: {
    height: 140,
  },
});


export default function MediaCard(props) {
  const classes = useStyles();

  const [state, dispatch] = useStoreContext();

  function loadProducts() {
    API.getProducts().then(res => {
      dispatch({
        type: "GET_PRODUCTS",
        products: res.data
      })
    })
    .catch(err => console.log(err));
  };

  // function setCurrentProduct (id) {
  //   API.getProduct(id).then(res => dispatch({type: "SET_CURRENT_PRODUCT", product: res.data}))
  // }


  function deleteItem(id) {
    console.log(id)
    API.deleteProduct(id).then(res => console.log(res));
    setTimeout(() => {
      loadProducts()
    }, 100);
  }



  // function addToCart(id) {
  //   API.getProduct(id).then(res => dispatch({type: "ADD_TO_CART", product: {...res.data, Quantity: 2}}))
  // }

  return (
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.Image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {/* {props.description} */}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary" key={props.id} onClick={() => deleteItem(props.id)}> 
         Delete!
        </Button>
        <EditProductModal
        name={props.name}
        description={props.description}
        price={props.price}
        id={props.id}
        Image={props.Image}
        quantity = {props.quantity}
        gender = {props.gender}
        Type = {props.Type}
        />
      </CardActions>
    </Card>
  );
}
