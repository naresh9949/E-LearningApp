import * as React from "react";
import {useState} from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Badge from "@mui/material/Badge";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import QuizIcon from "@mui/icons-material/Quiz";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MoreIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import logo from "./../images/logo.png";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { getUser, logOut } from "./Utilities/UserHandler";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "whitesmoke",
  "&:hover": {
    backgroundColor: "whitesmoke",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  color: "black",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
}));

// Menu on mobile
function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = getUser();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 0 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MoreIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {user && (
          <MenuItem>
            <Container align="center">
              <Avatar
                sx={{ width: 36, height: 36 }}
                alt={user.first_name + " " + user.last_name}
                src={user.image}
              />
              {user.first_name + " " + user.last_name}
              <br />
              {user.email}
            </Container>
          </MenuItem>
        )}

        {user && <Divider />}
        {user && (
          <MenuItem>
            <ListItemIcon>
              <VideoLibraryIcon fontSize="small" />
            </ListItemIcon>
            <Link href="/my-enrollments" color="inherit" underline="none">
              My Enrollments
            </Link>
          </MenuItem>
        )}
        {user && (
            <MenuItem>
              <ListItemIcon>
                <QuizIcon fontSize="small" />
              </ListItemIcon>
              <Link href="/my-tests" color="inherit" underline="none">
                My Tests
              </Link>
            </MenuItem>
          ) }{user && <Divider />}
        {/** Standard options */}
        <MenuItem>
          <ListItemIcon>
            <OndemandVideoIcon fontSize="small" />
          </ListItemIcon>
          <Link href="/courses" color="inherit" underline="none">
            Courses
          </Link>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <QuizIcon fontSize="small" />
          </ListItemIcon>
          <Link href="/tests" color="inherit" underline="none">
            Tests
          </Link>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <ContactPageIcon fontSize="small" />
          </ListItemIcon>
          <Link href="/contactus" color="inherit" underline="none">
            Contact us
          </Link>
        </MenuItem>

        <Divider />
        {user && (
            <MenuItem>
              <ListItemIcon>
                <ManageAccountsIcon fontSize="small" />
              </ListItemIcon>
              <Link href="/user/account" color="inherit" underline="none">
                Account
              </Link>
            </MenuItem>
          )}{user && (
            <MenuItem
              onClick={() => {
                logOut();
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          )}

        {!user && (
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <Link href="/signin" color="inherit" underline="none">
              Signin
            </Link>
          </MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
}

function DesktopUserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = getUser();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 0 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 36, height: 36 }}
              alt={user.first_name + " " + user.last_name}
              src={user.image}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Container align="center">
            <Avatar
              sx={{ width: 36, height: 36 }}
              alt={user.first_name + " " + user.last_name}
              src={user.image}
            />
            {user.first_name + " " + user.last_name}
            <br />
            {user.email}
          </Container>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <VideoLibraryIcon fontSize="small" />
          </ListItemIcon>
          <Link href="/my-enrollments" color="inherit" underline="none">
            My Enrollments
          </Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <QuizIcon fontSize="small" />
          </ListItemIcon>
          <Link href="/my-tests" color="inherit" underline="none">
            My Tests
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <ManageAccountsIcon fontSize="small" />
          </ListItemIcon>
          <Link href="/user/account" color="inherit" underline="none">
            Account
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            logOut();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default function PrimarySearchAppBar() {
  const [search,setSearch] = useState('');
  const user = getUser();
  const handleKeyDown = (event) => {
    if(event.key==='Enter')
      window.location = '/search?search_query='+search;
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <Avatar alt="logo" src={logo} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            QuickLearner.io
          </Typography>

          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(event)=>{setSearch(event.target.value)}}
              value={search}
              onKeyDown = {handleKeyDown}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Link
            href="/courses"
            underline="none"
            sx={{
              marginRight: 4,
              display: { xs: "none", sm: "block" },
              color: "black",
            }}
          >
            Courses
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{ marginRight: 4, display: { xs: "none", sm: "block" } }}
          >
            About us
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{ marginRight: 4, display: { xs: "none", sm: "block" } }}
          >
            Contact us
          </Link>

          {/* <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar sx={{ bgcolor: 'black' }}>NK</Avatar>
            </IconButton>
          </Box> */}
          {user && <DesktopUserMenu />}
          {!user && (
            <Link
              sx={{ display: { xs: "none", md: "flex" } }}
              href="/signin"
              underline="none"
              className="nav-signs"
            >
              SIGN IN
            </Link>
          )}

          <AccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
