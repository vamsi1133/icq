import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Answer from "../answer";
import QuestionMenu from "../menu";
import { qadata } from "../../QA";

function compare(a, b) {
  if (a.heading < b.heading) {
    return -1;
  }
  if (a.heading > b.heading) {
    return 1;
  }
  return 0;
}
const sortedData = qadata.sort(compare);

function Home(props) {
  const [data, setData] = useState(sortedData);
  const findData = (key) => {
    const res = sortedData.filter((val) => {
      if (key.length <= 1) {
        if (val.heading.match(new RegExp(`^${key}`, "gi"))) {
          return true;
        }
      } else if (val.heading.length <= 0) {
        return true;
      } else {
        if (val.heading.match(new RegExp(key, "gi"))) {
          return true;
        }
      }
    });
    setData(res);
  };
  return (
    <Container maxWidth={75}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <QuestionMenu search={findData} />
        </Grid>
        <Grid item xs={10}>
          <Answer data={data} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
