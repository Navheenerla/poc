import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});



export default function Deposits({demoValue}) {
  const classes = useStyles();
  console.log("deposits--props"+demoValue)
  return (
    <React.Fragment>
      <Title component="p" variant="h">{demoValue.name}</Title>
      <Typography component="p" color="textSecondary">
       Intention time: { demoValue["intentiontime"]} 
      </Typography>
      <Typography component="p" color="textSecondary" className={classes.depositContext}>
        Rentention time: {demoValue["retention_time"]}
      </Typography>
      
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View more
        </Link>
      </div>
    </React.Fragment>
  );
}