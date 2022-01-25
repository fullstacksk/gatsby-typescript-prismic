import * as React from "react"
import MovieReview from "../components/MovieReview"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <Seo title="MovieReview" /> */}
    <MovieReview />
  </Layout>
)

export default IndexPage
