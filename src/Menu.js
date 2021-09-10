import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import colors from "./colors";
import HomeOutlined from "@material-ui/icons/HomeOutlined";
import ListIcon from "./components/ListIcon";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import profile from "./images/saddybg-preview.png";
import AppIcon from "./components/AppIcon";
import { Link } from "react-scroll";

const useStyles = makeStyles({
  list: {
    width: 220,
    background: colors.black,
    color: colors.white,
    height: "100vh",
    paddingTop: 10,
  },
  fullList: {
    width: "auto",
  },
  image: {
    borderRadius: "50%",
    border: "3px solid #fff",
    background: colors.light,
    boxShadow: "1px 2px 8px blue",
  },
  imageContainer: {
    background: colors.black,
    textAlign: "center",
    paddingTop: 30,
  },
});

function MenuDrawer() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const list = (
    <>
      <div className={classes.imageContainer}>
        <img
          src={profile}
          width={160}
          height={160}
          alt="Profile"
          className={classes.image}
        />
      </div>
      <List
        style={{
          background: colors.black,
          display: "flex",
          paddingTop: 25,
          paddingLeft: 15,
        }}
      >
        <AppIcon IconName={"FaFacebook"} color={colors.white} />
        <AppIcon IconName={"FaInstagram"} color={colors.white} />
        <AppIcon IconName={"FaTwitter"} color={colors.white} />
        <AppIcon IconName={"FaLinkedin"} color={colors.white} />
      </List>
      <List className={classes.list}>
        <Link to="Home" spy={true} smooth={true} offset={-64} duration={1000}>
          <ListItem button onClick={() => setOpen(false)}>
            <ListIcon icon={<HomeOutlined style={{ color: colors.white }} />} />
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>

        <Divider style={{ background: colors.grey }} />

        <Link to="About" spy={true} smooth={true} offset={-64} duration={1000}>
          <ListItem button onClick={() => setOpen(false)}>
            <ListIcon
              icon={
                <AccountCircleOutlinedIcon style={{ color: colors.white }} />
              }
            />
            <ListItemText primary={"About Me"} />
          </ListItem>
        </Link>

        <Divider style={{ background: colors.grey }} />

        <Link to="Resume" spy={true} smooth={true} offset={-64} duration={1000}>
          <ListItem button onClick={() => setOpen(false)}>
            <ListIcon
              icon={<EventNoteOutlinedIcon style={{ color: colors.white }} />}
            />
            <ListItemText primary={"Resume"} />
          </ListItem>
        </Link>

        <Divider style={{ background: colors.grey }} />

        <Link
          to="Portfolio"
          spy={true}
          smooth={true}
          offset={-64}
          duration={1000}
        >
          <ListItem button onClick={() => setOpen(false)}>
            <ListIcon
              icon={<WorkOutlineOutlinedIcon style={{ color: colors.white }} />}
            />
            <ListItemText primary={"Portfolio"} />
          </ListItem>
        </Link>

        <Divider style={{ background: colors.grey }} />

        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-64}
          duration={1000}
        >
          <ListItem button onClick={() => setOpen(false)}>
            <ListIcon
              icon={<MailOutlineOutlinedIcon style={{ color: colors.white }} />}
            />
            <ListItemText primary={"Contact"} />
          </ListItem>
        </Link>

        <Divider style={{ background: colors.grey }} />
      </List>
    </>
  );
  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <SwipeableDrawer
        open={open}
        anchor="left"
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        {list}
      </SwipeableDrawer>
    </div>
  );
}

export default MenuDrawer;
