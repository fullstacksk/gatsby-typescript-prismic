import { Container, Grid, Typography } from "@mui/material"
import React from "react"
import Review from "./Review"
import movieURL from "../images/83.jpg"
import { Box } from "@mui/system"
const Home: React.FC = ({ data }: any) => {
  console.log("data : ", data)
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#cedcf7" }}>
        <img width="100%" src={movieURL} alt="83" />
      </Box>
      <Container>
        <Grid
          container
          spacing={2}
          direction={"column"}
          justifyContent="center"
          mt={3}
        >
          {data.map((review: any) => (
            <Grid item md={8} key={review.node.id}>
              <Review review={review.node.data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Home
