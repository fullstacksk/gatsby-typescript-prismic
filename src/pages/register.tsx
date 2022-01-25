import * as React from "react"
import { Link } from "gatsby"
import SignUp from "../components/SignUp"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SignUpPage = () => (
  <Layout>
    <Seo title="Register" />
    <SignUp />
  </Layout>
)

export default SignUpPage
