import React from 'react'
import { Grid, Container, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    spinnerContainer: {
        width: 'auto'
    }
}));

const Loading = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            item
            xs={12}
        >
            <Container className={classes.spinnerContainer}>
                <CircularProgress />
            </Container>
        </Grid>
    )
};

export default Loading;
