import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { withRouter } from 'react-router-dom';
import Chart from './Chart';
import Deposits from './Cards';
import MainListItems from './listItems'
import Orders from './Table-data';
import {  secondaryListItems } from './listItems';
import List from '@material-ui/core/List';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 350,
  },
  fixedHeigh: {
    height: 150,
  },
}));

export let maindata = {
  "Manager": [
    {
      "name": "Aravind",
      "retention_time": "2679",
      "m/z": "10.20",
      "intentiontime": "1.22",
      "peak intensity": "150e +10"
    }
    ],
  "Admin": [
    {
      "name": "mike",
      "retention_time": "2679",
      "m/z": "10.20",
      "intentiontime": "1.22",
      "peak intensity": "150e +10"
    },
    {
       "name": "shay",
      "retention_time": "2679",
      "m/z": "10.20",
      "intentiontime": "1.22",
      "peak intensity": "150e +10"
    },
    {
      "name": "hall",
      "retention_time": "2679",
      "m/z": "10.20",
      "intentiontime": "1.22",
      "peak intensity": "150e +10"
    }
  ],
  
  "Scientist": [
    {
      "name": "Mike",
      "retention_time": "2679",
      "m/z": "10.20",
      "intentiontime": "1.22",
      "peak intensity": "150e +10"
    }
    ],
}

 export var selected_data_3 = maindata["Admin"];
 export const setSelectedData = (data) => {
  selected_data_3 = data;
  console.log("data that is loaded--"+data)
  
  
}



 const Dashboard  = (props)  =>  {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [cardData,setCardData] = React.useState(selected_data_3);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const setSelectedData = (data) => {
    selected_data_3 = data;
    console.log("data that is loaded--"+data)
    setCardData(data);
  }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeighPaper = clsx(classes.paper, classes.fixedHeigh);
  const demoValue = "PK";

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <Typography></Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{<MainListItems setData={setSelectedData}/>}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
           
            {/* Recent Deposits */}
            
            {selected_data_3.map((option) => (
            <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeighPaper}>
              <Deposits demoValue={option} />
            </Paper>
          </Grid>
          ))}
             
             {/* Chart */}
             <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default withRouter(Dashboard)