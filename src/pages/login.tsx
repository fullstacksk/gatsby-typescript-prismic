import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Login from "../components/Login"

const LoginPage = () => (
  <Layout>
    <Seo title="Login" />
    <Login />
  </Layout>
)

export default LoginPage
