import React, { useState, useEffect, useCallback } from 'react';
import {
  Typography,
  Button,
  Grid,
  Container,
  Icon,
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import ProjectCard from '../components/ProjectCard';
import Loading from '../components/Loading';
import ScreenLayout from '../layout/ScreenLayout';
import axios from 'axios';
import { fakeUserId } from '../constants';
import { useHistory } from 'react-router-dom';
import { NewProjectScreenPath } from './NewProjectScreen';

const useStyles = makeStyles((theme) => ({
  spinnerContainer: {
      width: 'auto'
  }
}));


const Dashboard = () => {
  const classes = useStyles();
  const history = useHistory();

  const [hasFetched, setHasFetched] = useState(false);
  const [sampleProjects, setSampleProjects] = useState([]);
  const [isLoadingNewProject, setIsLoadingNewProject] = useState(false);

  const fetchSampleProjects = useCallback(async () => {
      const response = await axios.get('Dashboard/userId/1');
      
      setSampleProjects(response.data);
  }, [setSampleProjects]);

  const createNewProject = useCallback(() => {
    setIsLoadingNewProject(true);
    history.push(NewProjectScreenPath);
  }, [setIsLoadingNewProject, history, NewProjectScreenPath]);

  useEffect(() => {
    if (!hasFetched) {
      fetchSampleProjects();
      setHasFetched(true);
    }
  }, [hasFetched, setHasFetched, fetchSampleProjects]);
  
  return (
    <ScreenLayout>
      <Grid
        container
        direction="column"
        spacing={4}
      >
        <Grid
          container
          item
          xs={12}
        >
          <Typography paragraph={true} variant={'h4'}>{'My Projects'}</Typography>
          <Typography paragraph={true} >{'Looks like you don\'t have any projects yet! Start a new one or choose from some sample projects below.'}</Typography>
          <Button
            variant={'contained'}
            color={'primary'}
            onClick={createNewProject}
            endIcon={<TelegramIcon />}
            disabled={isLoadingNewProject}
            fullWidth
          >
            {
              isLoadingNewProject ?
              <CircularProgress
                  size={28}
                  color={'inherit'}
              />
              : 'Start a New Project'
            }
          </Button>
        </Grid>

        <Grid
          container
          item
          xs={12}
        >
          <Typography paragraph={true} variant={'h4'}>{'Sample Projects'}</Typography>
          {
            sampleProjects.length > 0 ? 
            (
              sampleProjects.map(project => (
                <ProjectCard 
                  project={project}
                  key={project.id}
                />
              ))
            ) :
            <Loading />
          }
        </Grid>
      </Grid>
    </ScreenLayout>
  )  
}

export default Dashboard;