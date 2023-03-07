import { Box } from "@mui/material";
import React from "react";

function Answer(props) {
  const { data } = props;
  return (
    <Box
      sx={{
        borderLeft: "1px solid grey",
        padding: 2,
      }}
    >
      {data.map((val) => (
        <>
          <Box
            sx={{
              padding: 2,
              boxShadow: "2px 2px 2px #ECF2FF",
              margin: "5px 0",
            }}
          >
            <h4>{val.heading}</h4>
            <div style={{fontSize:'24px'}} dangerouslySetInnerHTML={{ __html: val.answer }}></div>
          </Box>
        </>
      ))}
    </Box>
  );
}

export default Answer;
