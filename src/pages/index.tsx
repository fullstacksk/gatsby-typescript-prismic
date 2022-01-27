import * as React from "react"
import MovieReview from "../components/MovieReview"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }: any) => {
  console.log(data.reviews.edges)
  return (
    <Layout>
      {/* <Seo title="MovieReview" /> */}
      <MovieReview data={data.reviews.edges} />
    </Layout>
  )
}

export default IndexPage

export const ReviewQuery = graphql`
  query Review {
    reviews: allPrismicReview {
      edges {
        node {
          id
          data {
            title {
              text
            }
            image {
              url
            }
            description {
              text
            }
            rating
          }
        }
      }
    }
  }
`
