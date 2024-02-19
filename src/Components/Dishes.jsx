import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decrementQnty,
  incrementQnty,
  removeFromCart,
} from "../Redux/cartSlice";

function Dishes(prop) {
  const dishes = prop.value;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const cartItems = useSelector((state) => state.cart.items);

  const message = [
    { type: 1, message: "Customization available" },
    { type: 2, message: "Not available" },
    { type: 3, message: "" },
  ];

  const checkDishStatus = (item) => {
    switch (item.dish_Availability) {
      case true:
        if (item.addonCat.length > 0) return 1;
        break;
      case false:
        return 2;

      default:
        return 3;
    }
  };

  const handleItemDecrement = (item) => {
    if (cartItems[item.dish_id].quantity > 1) {
      dispatch(decrementQnty(item));
    } else {
      dispatch(removeFromCart(item));
    }
  };

  return (
    <div className="dish-container">
      {dishes.category_dishes.map((item,index) => {
        const disabled = state.cartCount === 0;

        return (
          <div key={index}>
            <Grid container className="item-box">
              <Grid
                item
                lg={8}
                md={8}
                sm={8}
                xs={8}
                className="display-block"
                sx={{ lineHeight: "1.5rem" }}
              >
                <Box className="display-flex dish-name">
                  <Box
                    class={item.dish_Type === 1 ? "veg-icon" : "nonveg-icon"}
                  ></Box>
                  <Box>{item.dish_name}</Box>
                </Box>
                <Box>
                  {item.dish_currency}: {item.dish_price}
                </Box>
                <Typography className="dish-description" fontSize={".8rem"}>
                  {item.dish_description}
                </Typography>
                {checkDishStatus(item) !== 2 && (
                  <Box className="display-flex count-button">
                    {cartItems[item.dish_id] ? (
                      <>
                        {" "}
                        <Box
                          className={`operator-button ${
                            disabled ? "disabled" : ""
                          }`}
                          onClick={() => {
                            handleItemDecrement(item);
                          }}
                        >
                          -
                        </Box>
                        <Box alignSelf={"center"}>
                          {cartItems[item.dish_id].quantity}
                        </Box>
                        <Box
                          className="operator-button"
                          onClick={() => dispatch(incrementQnty(item))}
                        >
                          +
                        </Box>
                      </>
                    ) : (
                      <Box
                        alignSelf={"center"}
                        textAlign={"center"}
                        onClick={() => {
                          dispatch(addToCart(item));
                        }}
                      >
                        Add item
                      </Box>
                    )}
                  </Box>
                )}
                <Typography class="warning-message">
                  {
                    message.find((msg) => msg.type === checkDishStatus(item))
                      ?.message
                  }
                </Typography>
              </Grid>
              <Grid
                className="display-flex"
                gap={"1rem"}
                item
                lg={4}
                md={4}
                sm={4}
                xs={4}
              >
                <Box pt={"1rem"}>{item.dish_calories} Calories</Box>
                <Box>
                  <img
                    style={{ width: 100, height: 100, borderRadius: ".8rem" }}
                    src={item.dish_image}
                    alt="img"
                  />
                </Box>
              </Grid>
              <Divider />
            </Grid>
            <Divider
              sx={{
                borderBottom: "1px solid #DEDEDE",
                mt: "2rem",
                transform: "scaleY(0.3)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Dishes;
