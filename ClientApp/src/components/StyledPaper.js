import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    styledPaper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    },
}));

const StyledPaper = ({children, ...props}) => {
    const classes = useStyles();

    return (
        <Paper
            className={classes.styledPaper}
            {...props} 
        >
            {children}
        </Paper>
    );
}

export default StyledPaper;