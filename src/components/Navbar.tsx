import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import { Link, navigate } from "gatsby"
import { AuthContext } from "../context/auth"
import firebase from "gatsby-plugin-firebase"
import avatarURL from "../images/avatar.png"

const settings = ["Logout"]

const Navbar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const { user } = React.useContext(AuthContext)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleLogout = async () => {
    await firebase.auth().signOut()
    setAnchorElUser(null)
    navigate("/login")
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Movie Review
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {user && (
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              )}
              {!user && (
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/login"
                >
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}
              {!user && (
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/register"
                >
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Movie Review
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {user && (
              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to="/"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
            )}
            {!user && (
              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to="/login"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Login
              </Button>
            )}
            {!user && (
              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to="/register"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Sign Up
              </Button>
            )}
          </Box>
          {!!user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  style={{
                    border: "1px solid red",
                    display: "flex",
                    alignItems: "center",
                  }}
                  sx={{ p: 0 }}
                >
                  <Avatar alt="Remy Sharp" src={avatarURL} variant="circular" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={handleLogout}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
