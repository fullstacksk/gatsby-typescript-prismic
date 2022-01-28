import { Grid, Typography } from "@mui/material"
import * as React from "react"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <div>
    <Seo title="404: Not found" />
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Typography variant="h1" component="h1">
          Page Not Found
        </Typography>
      </Grid>
    </Grid>
  </div>
)

export default NotFoundPage
