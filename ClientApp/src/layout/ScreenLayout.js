import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const ScreenLayout = ({children}) => (
    <React.Fragment>
        <AppBar position="sticky">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    {'Home Project Tracker'}
                </Typography>
            </Toolbar>
        </AppBar>
        {children}
    </React.Fragment>
);

export default ScreenLayout;
