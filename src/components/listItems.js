import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { maindata,setSelectedData} from './Dashboard'


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const role = [
  { title: 'Manager' },
  { title: 'Admin' },
  { title: 'Scientist'},
];

const decon = [
  { title: 'unidec' },
];

const db = [
  { title: 'Peptide map' },
];
let textInputRole = ''
let textValue = ''

let onSubmitClick = (setData) => {
  console.log("value =="+textInputRole.getElementsByClassName("MuiInputBase-input")[0].value);
  let key = textInputRole.getElementsByClassName("MuiInputBase-input")[0].value
  if(key.length > 0){
    console.log("data"+maindata[key])
    
    setSelectedData(maindata[key])
    setData(maindata[key])
  }
  

}


export default function MainListItems ({setData}) {
  return (<div  style={{paddingLeft:10 }}>
  <Autocomplete
      options={role}
      getOptionLabel={(option) => option.title}
      style={{ width: 300, paddingBottom:10 }}
      ref={(input) => textInputRole = input}
      renderInput={(params) => <TextField value={textValue} {...params} label="Select Role" variant="outlined" >
        {role.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>}
    />
    <Autocomplete
      options={decon}
      getOptionLabel={(option) => option.title}
      style={{ width: 300, paddingBottom:10 }}
      renderInput={(params) => <TextField {...params} label="Decon engine" variant="outlined" />}
    />
    <Autocomplete
      options={db}
      getOptionLabel={(option) => option.title}
      style={{ width: 300, paddingBottom:10 }}
      renderInput={(params) => <TextField {...params} label="Select Db" variant="outlined" />}
    /><br></br>
      <Typography style={{paddingBottom: 5,marginLeft: 115}}>Analysis Date</Typography>
      <div style={{marginLeft:10}} >
      <TextField style={{ width: 135,paddingBottom: 30}}
        id=""
        label="From Date"
        type="date"
        defaultValue="2017-05-24"
      />
      <TextField style={{ width:135, marginLeft: 20}}
        id=""
        label="End Date"
        type="date"
        defaultValue="2020-05-26"
      />
      </div>
      <div style={{paddingBottom:20}}>
      <div style={{paddingLeft:50,paddingBottom:10 }}>
        <Button onClick = {() => {onSubmitClick(setData)}} variant="contained" color="primary" style={{ width: 200, }}  disableElevation>
            Submit
        </Button>
      </div> 
      <div style={{paddingLeft:10 }}>
        <Button variant="contained" color="primary" style={{ width: 90,}}  disableElevation>
            Uncheck
        </Button>
        <Button variant="contained" color="primary" style={{width: 90, marginLeft: 10}}  disableElevation>
            Expand
        </Button>
        <Button variant="contained" color="primary" style={{width: 90, marginLeft: 10}}  disableElevation>
            Collapse
        </Button>
      </div>   
      </div>
</div>);
}

export const secondaryListItems = (
   <div style={{paddingLeft: 90 }}>
      <div>
        <FormControlLabel
          control={<Checkbox />}
          label="mike"
        />
      </div>
      <div>
        <FormControlLabel
          control={<Checkbox />}
          label="shay"
        />
      </div>
      <div>
        <FormControlLabel
          control={<Checkbox />}
          label="Intermediate"
        />
      </div>
      <div>
      <FormControlLabel
          control={<Checkbox />}
          label="peak smoothing"
        />
      </div>
      <div>
      <FormControlLabel
          control={<Checkbox />}
          label="Lc peek detection"
        />
      </div>
    
   </div>
);
