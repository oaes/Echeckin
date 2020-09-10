import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Result from './Result';
import Toolbar from './Toolbar';
import data from './data';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ViewAttendance = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Result customers={customers} />
        </Box>
      </Container>
    
  );
};

export default ViewAttendance;
