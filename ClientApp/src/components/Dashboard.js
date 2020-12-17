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
  Link
} from '@material-ui/core';
import StyledPaper from './StyledPaper';

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

  useEffect(() => {
    console.log(sampleProjects);
  })
  
  return (
    <Container maxWidth="sm">
      <StyledPaper
        elevation={2}
      >
        <Typography paragraph={true} variant={'h4'}>{'My Projects'}</Typography>
        <Typography paragraph={true} >{'Looks like you don\'t have any projects yet! Start a new one or choose from some sample projects below.'}</Typography>

        <Typography paragraph={true} variant={'h4'}>{'Sample Projects'}</Typography>
        {
          sampleProjects.length > 0 && sampleProjects.map(project => (
            <React.Fragment key={project.id}>
              <Typography paragraph={true} variant={'h5'}>{project.name}</Typography>
              <Typography paragraph={true}>{project.description}</Typography>
            </React.Fragment>
          ))
        }
      </StyledPaper>
    </Container>
  )  
}

export default Dashboard;