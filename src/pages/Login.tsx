import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Lock, Person, Mail} from '@material-ui/icons';
// import Mail from '@material-ui/icons/Mail';
// import Person from '@material-ui/icons/Person'

import Logo from '../Assets/bnex.png'
import Fundo from '../Assets/fundo.svg'

const theme = createTheme({
  palette:{
    primary:{main: '#FFF'},
    secondary:{main:'#383938'},
  }  
});

const useStyles = makeStyles((theme) => ({
  paper: {
    //marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    padding: '1rem',
    borderradius: '4px',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    backgroundImage: `url(${Fundo})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center",
    top:0,
    height:'100vh',
  },
  gridCentralizar:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  main:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:'-webkit-fill-available',
    width:'50rem'
  },
  inputF:{
    
  },
  avatar: {
    margin: theme.spacing(2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  signup: {
    margin: theme.spacing(-2, 0, 2),
  },
  gridSubmit:{
    paddingBottom: theme.spacing(2)
  },
}));

export const Login = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.paper}>
            <div className={classes.main}>
                <Grid 
                        container
                        className={classes.gridCentralizar}
                        style={{
                            boxShadow:"inset 0 -3em 3em rgb(6 142 183 / 30%), 0 0 0 2px white, 0.3em 0.3em 1em rgb(72 91 227 / 60%)"
                        }}
                    >   
                    <Grid item xs={12}
                        container
                        className={classes.gridCentralizar}>
                        <img src={Logo} width={300} alt="Logo" className={classes.avatar} />
                    </Grid>

                    <Typography component="div">
                        <Box fontSize={16} m={1} paddingTop={5} color="white">
                            Acesse a sua conta
                        </Box>
                    </Typography>

                    <form className={classes.form} noValidate>
                        <Grid 
                            container
                            className={classes.gridCentralizar}
                        >
                            <Grid item xs={9}>
                            <TextField
                                className={classes.inputF}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="usuario"
                                label="Usúario"
                                name="usuario"
                                autoComplete="usuario"
                                autoFocus
                                
                                InputProps={{
                                startAdornment: <InputAdornment position="start"><Person color="primary"/></InputAdornment>,
                                style:{color:'white'}

                                }}
                                InputLabelProps={{ style:{ color:'white', borderColor:'white' } }}
                            />
                            </Grid>

                            <Grid item xs={9}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Lock color="primary" /></InputAdornment>,
                                    style:{color:'white'}
                                }}
                                InputLabelProps={{ style:{ color:'white', borderColor:'white' } }}
                            />
                            </Grid>
                            
                            <Grid item xs={9} className={classes.gridSubmit}>
                                <Button typeof='submit' fullWidth={true} variant='contained' color='primary' className={classes.submit}>Login</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </div>
        
        </div>
    </MuiThemeProvider>
  );
}