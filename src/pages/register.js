import React, { useState } from 'react';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core'
import { AccountCircle, LockRounded } from "@material-ui/icons";
import { Redirect } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
    
    const [customerSignUp, setCustomerSignUp] = useState(
        { name: '', password: '', email: ''}
    );

    const handleChange = (event) => {
        setCustomerSignUp({...customerSignUp, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3003/users', customerSignUp)
          .then(function (response) {
              console.log(response.data.token)
              if(response.status === 200){
                  setIsAuth(false)
              }
              
          })
          .catch(function (error) {
              console.log(error)
          }) 
    }
    const [isAuth, setIsAuth] = useState(true);

    if (!isAuth) {
        return <Redirect to="/login" />
    }

    return (
        <div>
            <Grid container style={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={6}>
                    <img src="/register.svg"
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
                            label="Nome"
                            margin="normal"
                            name="name"
                            value={customerSignUp.name}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                )
                            }}
                        />

                        <TextField
                            label="Email"
                            margin="normal"
                            name="email"
                            value={customerSignUp.email}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                )
                            }}
                        />

                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            name="password"
                            value={customerSignUp.password}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockRounded />
                                    </InputAdornment>
                                )
                            }}
                        />

                        <div style={{ height: 20 }} />

                        <Button color="primary" variant="contained" onClick={handleSubmit}>
                            Registrar
                        </Button>

                        <div style={{ height: 20 }} />

                        <Button
                            color="secondary"
                            variant="outlined"
                            onClick={() => setIsAuth(false)}
                        >
                            Já está registrado?
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

export default Register;