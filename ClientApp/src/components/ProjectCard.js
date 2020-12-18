import React from 'react';
import { Card, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    projectCard: {
        padding: theme.spacing(2),
        width: '100%'
    },
}));


const ProjectCard = ({ project }) => {
    const classes = useStyles();

    return (
        <Card
            className={classes.projectCard}
            variant={'outlined'}    
        >
            <Typography paragraph={true} variant={'h5'}>{project.name}</Typography>
            <Typography paragraph={true}>{project.description}</Typography>
            <Button
                variant={'outlined'}
                color={'primary'}
                fullWidth
            >
                {'Start This Project'}
            </Button>
        </Card>
    )
}

export default ProjectCard;
