import { Container, Grid } from "@mui/material"
import React from "react"
import Review from "./Review"

const Home: React.FC = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction={"column"}
        justifyContent="center"
        mt={3}
      >
        {[1, 2, 3, 4].map(i => (
          <Grid item md={8} key={i}>
            <Review />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
