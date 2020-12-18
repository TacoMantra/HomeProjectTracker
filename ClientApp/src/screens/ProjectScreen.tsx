import React, { useState, useCallback, useEffect } from 'react';
import ScreenLayout from '../layout/ScreenLayout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography } from '@material-ui/core';

const ProjectScreen = () => {
    const { id } = useParams();

    const [project, setProject] = useState(null);
    const [hasFetchedProject, setHasFetchedProject] = useState(false);

    const fetchProject = useCallback(async () => {
        const response = await axios.get(`Project/projectId/${id}`);
        
        setProject(response.data);
    }, [setProject, id]);

    useEffect(() => {
        if (!hasFetchedProject) {
            fetchProject();
            setHasFetchedProject(true);
        }
    }, [hasFetchedProject, setHasFetchedProject, fetchProject]);

    return (
        <ScreenLayout>
            {
                project ?
                    <Typography
                        variant={'h4'}
                    >
                        {project.name ?? 'New Project'}
                    </Typography>
                : null
            }
        </ScreenLayout>
    )
}

export const ProjectScreenPath = '/projects/:id';

export default ProjectScreen;
