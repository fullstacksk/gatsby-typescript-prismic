import * as React from "react"
import SignUp from "../components/SignUp"
import Layout from "../components/layout"
import Seo from "../components/Seo"

const SignUpPage = () => (
  <Layout>
    <Seo title="Register" />
    <SignUp />
  </Layout>
)

export default SignUpPage
