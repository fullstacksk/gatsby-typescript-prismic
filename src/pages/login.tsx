import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import Login from "../components/Login"
import { AuthContext } from "../context/auth"
import { navigate } from "gatsby"

const LoginPage = () => {
  const { user } = React.useContext(AuthContext)
  React.useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [])
  return (
    <Layout>
      <Seo title="Login" />
      <Login />
    </Layout>
  )
}

export default LoginPage
