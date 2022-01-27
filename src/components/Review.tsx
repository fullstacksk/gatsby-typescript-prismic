import * as React from "react"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Grid, Rating } from "@mui/material"

const Review: React.FC = ({ review }: any) => {
  console.log("review : ", review)

  return (
    <Card>
      <Grid container>
        <Grid
          item
          md={4}
          sx={{ bgcolor: "#cfd8eb" }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            // image="/static/6d91c86c0fde632ba4cd01062fd9ccfa/288e4/gatsby-astronaut.avif"
            image={review?.image?.url}
            alt="Live from space album cover"
          />
        </Grid>
        <Grid item md={8}>
          <CardContent>
            <Typography component="div" variant="h6">
              {review?.title?.text}
            </Typography>

            <Rating
              name="half-rating-read"
              defaultValue={review?.rating}
              precision={0.5}
              readOnly
            />
            <Typography variant="body2" color="text.secondary" component="div">
              {review?.description?.text}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}
export default Review
