import React, {useState} from "react";
import {texts} from "../data";
import {Link, animateScroll} from "react-scroll";
import {useGlobalContext} from "../context";
import LanguageSwitch from "./LanguageSwitch.jsx";
import {
    AppBar,
    Box,
    Button, CssBaseline,
    Divider, Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const {selectedLanguage} = useGlobalContext();
    const [showNav, setShowNav] = useState(false);
    const drawerWidth = 240;
    const {window} = Window;
    const navItems = ['Home', 'About', 'Contact'];
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                MUI
            </Typography>
            <Divider/>
            <List>
                {texts[selectedLanguage].links.map((item) => (
                    <ListItem component={Link} to={item.url}  key={item.id} disablePadding>
                        <ListItemButton onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    function toggleNav() {
        setShowNav(!showNav);
    }


    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        MUI
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'flex'}}}>
                        {/*{navItems.map((item) => (*/}
                        {/*    <Button key={item} sx={{color: '#fff'}}>*/}
                        {/*        {item}*/}
                        {/*    </Button>*/}
                        {/*))}*/}
                        {texts[selectedLanguage].links.map((item) => (
                            <Link className={`navbar-link ${showNav ? "show" : ""}`} to={item.url} duration={500} key={item.id} sx={{color: '#fff'}}>
                                {item.text}
                            </Link>
                        ))}
                    </Box>
                    <LanguageSwitch/>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
        // <nav className="navbar">
        //   <button className="navbar-toggle" onClick={toggleNav}>
        //     <i className="fa fa-bars"></i>
        //   </button>
        //   <div className={`navbar-links ${showNav ? "show" : ""}`}>
        //     {texts[selectedLanguage].links.map((link) => (
        //       <Link
        //         key={link.id}
        //         className={`navbar-link ${showNav ? "show" : ""}`}
        //         activeClass="active"
        //         to={link.url}
        //         spy={true}
        //         smooth={true}
        //         offset={-70}
        //         duration={500}
        //         onClick={toggleNav}
        //       >
        //         {link.text}
        //       </Link>
        //     ))}
        //   </div>
        //     <LanguageSwitch />
        // </nav>
    );
};
export default Navbar;
