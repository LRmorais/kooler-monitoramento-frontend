import React,{useState, useContext} from 'react';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core'
import { AccountCircle, LockRounded } from "@material-ui/icons";
import {Redirect} from 'react-router-dom';
// importando contexto
import { Context } from '../services/context';

const Login = () => {

    const { signUp, setSignUp, handleLogin} = useContext(Context);

    const handleChange = (event) => {
        setSignUp({...signUp, [event.target.name]: event.target.value})
    }

    const [isAuth, setIsAuth] = useState(true)
    
    if (!isAuth){
        return <Redirect to="/register" />
    }

    return (
        <div>
            <Grid container style={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={6}>
                    <img src="/sign.svg"
                        style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                        alt="brand" />
                </Grid>
                <Grid
                    container
                    item xs={12} sm={6}
                    alignItems="center"
                    direction="column"
                    justify="space-between"
                    style={{ padding: 10 }}>
                    {/* criada 2 divs vazias para alinha o item 2 no centro com space between */}
                    <div />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: 400,
                        minWidth: 400
                    }}>
                        <Grid container justfy="center">
                            <img
                                src='/ceamazon.jpg'
                                width={200}
                                alt="logo"
                            />
                        </Grid>
                        <TextField 
                        label="Email" 
                        margin="normal"
                        name='email'
                        value={signUp.email}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start"> 
                            <AccountCircle/> 
                            </InputAdornment>
                            )
                        }}
                        />

                        <TextField 
                        type="password"
                        label="Password" 
                        name='password'
                        margin="normal"
                        value={signUp.password}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment:(
                            <InputAdornment position="start"> 
                            <LockRounded/> 
                            </InputAdornment>
                            ) 
                        }}
                        />

                        <div style={{height:20}}/>

                        <Button color="primary" variant="contained" onClick={handleLogin}>
                            Entrar
                        </Button>

                        <div style={{height:20}}/>

                        <Button 
                        color="secondary" 
                        variant="outlined" 
                        onClick={() => setIsAuth(false)}
                        >
                            Registrar-se
                        </Button>
                    </div>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Button color="primary">Go to community page</Button>
                        </Grid>

                        <Grid item>
                            <Button variant='outlined'> Esqueceu a senha?</Button>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;