import React from 'react';
import { Container, Card, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    projectCard: {
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
                    variant={'outlined'}
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
