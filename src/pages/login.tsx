import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import Login from "../components/Login"

const LoginPage = () => {
  return (
    <Layout>
      <Seo title="Login" />
      <Login />
    </Layout>
  )
}

export default LoginPage
