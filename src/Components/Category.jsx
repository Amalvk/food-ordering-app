import React, { useState } from "react";
import {Tab,Tabs,Box} from "@mui/material";
import Dishes from "./Dishes";

function Category(props) {
  const [value, setValue] = useState(0);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
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
