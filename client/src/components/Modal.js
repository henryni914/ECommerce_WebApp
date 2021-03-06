import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { useStoreContext } from "../utils/GlobalState";
import API from '../utils/API';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    padding: theme.spacing(2, 4, 3),
    width: "500px"
  },
}));

export default function TransitionsModal(props) {

  const [state, dispatch] = useStoreContext()

  function saveCart() {
    // console.log(state.currentUser.id);
    // console.log(state.shoppingCart)
    API.saveCart(state.currentUser.id, state.shoppingCart).then(res => console.log("saved to cart", res.data)).then(dispatch({
      type: "SET_USER",
      user: {
        ...state.currentUser,
        shoppingCart: state.shoppingCart
      }
    }))
  }



  function addToCart(id) {
    // console.log(quantityRef.current.value)
    if (quantityRef.current.value === undefined) {
      alert("Error! Please select a quantity!")
    } else {
      API.getProduct(id).then(res => dispatch({ type: "ADD_TO_CART", product: { ...res.data, Quantity: parseInt(quantityRef.current.value) } }))
      setTimeout(() => {
        handleClose();
      }, 500)
    }
  }

  useEffect(() => {
    saveCart();
  }, [state.shoppingCart])

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const quantityRef = useRef();

  const quantity = [
    {
      value: 1,
      label: 1
    },
    {
      value: 2,
      label: 2
    },
    {
      value: 3,
      label: 3
    },
    {
      value: 4,
      label: 4
    },
    {
      value: 5,
      label: 5
    }
  ]

  const sizes = [
    {
      value: 'Small',
      label: 'Small'
    },
    {
      value: 'Medium',
      label: 'Medium'
    },
    {
      value: 'Large',
      label: 'Large'
    }
  ]

  return (
    <div>
      <Button size="small" variant="contained" color="secondary" type="button" onClick={handleOpen}>
        Learn More
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.name}</h2>
            <img alt={props.name} src={props.Image} height='200px'></img>
            <p id="transition-modal-description">{props.description}</p>
            <h2>${props.price}</h2>
            <p>Inventory: {props.quantity} </p>
            <TextField
              style={{"marginRight": '5px'}}
              label="Quantity"
              id={props.id}
              variant="outlined"
              size="small"
              select
              label={"Size"}
            // inputRef={quantityRef}
            >
              {sizes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Quantity"
              id={props.id}
              variant="outlined"
              size="small"
              select
              label={"Qty."}
              inputRef={quantityRef}
            >
              {quantity.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="contained" color="primary" onClick={() => addToCart(props.id)} style={{ "marginLeft": "50px" }}>
              Add to Cart
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}