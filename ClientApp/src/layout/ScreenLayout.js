import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import StyledPaper from '../components/StyledPaper';

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
        <Container maxWidth="sm">
            <StyledPaper
                elevation={2}
            >
                {children}
            </StyledPaper>
        </Container>
    </React.Fragment>
);

export default ScreenLayout;
