import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Link, navigate } from "gatsby"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import useYupValidationResolver from "../utils/useYupValidationResolver"
import { AuthContext } from "../context/auth"
import firebase from "gatsby-plugin-firebase"

const Copyright: React.FC = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        to="https://github.com/fullstacksk/gatsby-typescript-prismic"
      >
        Github Codebase
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const theme = createTheme()

const SignUp: React.FC = () => {
  const [error, setError] = React.useState()
  const { setUser } = React.useContext(AuthContext)

  //validation schema
  const validationSchema = yup.object({
    name: yup.string().trim().required("Name is required"),
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .email("Invalid email"),
    password: yup.string().trim().min(8),
  })

  //using custom hook
  const resolver = useYupValidationResolver(validationSchema)

  //calling useForm
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm({ resolver })

  const onSubmit = async data => {
    try {
      //registering user
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
      //storing user to database

      await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
          email: data.email,
          name: data.name,
        })
      setUser(user)
      navigate("/")
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors?.name?.message}
                  onChange={() => setError()}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  onChange={() => setError()}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  onChange={() => setError()}
                />
              </Grid>
            </Grid>
            {!!error && <Typography color="error">{error}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}

export default SignUp
