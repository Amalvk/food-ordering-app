import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import Category from "../Components/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../Redux/homeSlice";
import responseData from './dishes.json'

const Home = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const dishes = useSelector((state) => state.homedata.dishes);
  // const state = useSelector((state) => state);

  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(addItems([responseData]));
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(
    //       "https://run.mocky.io/v3/db0018c8-5982-4d89-a54f-f51fe14d3c89"
    //     );
    //     dispatch(addItems(response.data));
    //     setLoading(false);
    //   } catch (error) {
    //     setError(error);
    //     setLoading(false);
    //   }
    // };
    // fetchData();
  },[]);

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // <Category {...dishes}/>

  const showItems = (items) => {
    const totalQuantity = items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity;
    }, 0);

    return totalQuantity;
    // return Object.keys(items).length
  };

  return (
    <Box>
      <Grid className="header display-between" container>
        <Grid item lg={8} md={8} sm={8} xs={8} className="text-bold resto-name">
          Malabar Hotel
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4} className="display-around">
          <Box>My orders</Box>
          <Box position="relative" display="inline-block">
            <ShoppingCartIcon />
            <span className="count-badge">
              {showItems(Object.values(cartItems))}
            </span>
          </Box>
        </Grid>
      </Grid>
      <Category data={dishes} />
    </Box>
  );
};

export default Home;
