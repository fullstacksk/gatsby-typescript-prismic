import * as React from "react"
import SignUp from "../components/SignUp"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import { AuthContext } from "../context/auth"
import { navigate } from "gatsby"

const SignUpPage = () => {
  const { user } = React.useContext(AuthContext)
  if (user) {
    navigate("/")
  }
  return (
    <Layout>
      <Seo title="Register" />
      <SignUp />
    </Layout>
  )
}

export default SignUpPage
