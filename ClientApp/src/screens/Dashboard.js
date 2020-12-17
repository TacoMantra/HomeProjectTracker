import React, { useState, useEffect, useCallback } from 'react';
import { 
  Container,
  TextField,
  InputAdornment,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Link,
  Button,
  Grid,
  Card
} from '@material-ui/core';
import StyledPaper from '../components/StyledPaper';
import ProjectCard from '../components/ProjectCard';
import ScreenLayout from '../layout/ScreenLayout';

const Dashboard = () => {
  const [hasFetched, setHasFetched] = useState(false);
  const [sampleProjects, setSampleProjects] = useState([]);

  const fetchSampleProjects = async () => {
    const response = await fetch(`Dashboard/userId/1`);
    const data = await response.json();
    
    setSampleProjects(data);
  }

  useEffect(() => {
    if (!hasFetched) {
      fetchSampleProjects();
      setHasFetched(true);
    }
  }, [hasFetched, setHasFetched]);
  
  return (
    <ScreenLayout>
      <Container maxWidth="sm">
        <StyledPaper
          elevation={2}
        >
          <Grid
            container
            direction="column"
            spacing={4}
          >
            <Grid
              container
              item
            >
              <Typography paragraph={true} variant={'h4'}>{'My Projects'}</Typography>
              <Typography paragraph={true} >{'Looks like you don\'t have any projects yet! Start a new one or choose from some sample projects below.'}</Typography>
              <Button
                variant={'contained'}
                color={'primary'}
                fullWidth
              >
                {'Start a New Project'}
              </Button>
            </Grid>

            <Grid
              container
              item
            >
              <Typography paragraph={true} variant={'h4'}>{'Sample Projects'}</Typography>
              {
                sampleProjects.length > 0 && sampleProjects.map(project => (
                  <ProjectCard 
                    project={project}
                    key={project.id}
                  />
                ))
              }
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
    </ScreenLayout>
  )  
}

export default Dashboard;