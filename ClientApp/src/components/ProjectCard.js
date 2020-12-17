import React from 'react';
import { Container, Card, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    projectCard: {
        margin: theme.spacing(2, 0),
        padding: theme.spacing(2)
    },
}));


const ProjectCard = ({ project }) => {
    const classes = useStyles();

    return (
        <Container>
            <Card className={classes.projectCard}>
                <Typography paragraph={true} variant={'h5'}>{project.name}</Typography>
                <Typography paragraph={true}>{project.description}</Typography>
                <Button
                    variant={'contained'}
                    color={'primary'}
                    fullWidth
                >
                    {'Start This Project'}
                </Button>
            </Card>
        </Container>
    )
}

export default ProjectCard;
