import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Dishes from "./Dishes";
import { useSelector } from "react-redux";

function Category(props) {
  const [value, setValue] = useState(0);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const state = useSelector((state) => state);
  const dish = props.data[0];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", overflowX: "auto" }}>
        <Tabs
          value={value}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: { background: "red", height: "1px", overflow: "auto" },
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {dish.table_menu_list.map((item, index) => (
            <Tab
              onClick={() => handleChange(index)}
              key={index}
              label={item.menu_category}
              sx={{
                fontWeight: 500,
                fontSize: ".6rem",
                color: "white",
                "&.Mui-selected": {
                  color: "red",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Dishes value={dish.table_menu_list[value]} />
    </Box>
  );
}

export default Category;
