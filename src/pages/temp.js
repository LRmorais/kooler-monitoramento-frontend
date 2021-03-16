import React from 'react';
import Chart from '../components/Chart';
import { Grid } from '@material-ui/core'

const Temp = () => {
    return (
        <div>
            <Grid container style={{ minHeight: '100vh' }}>
                <Grid item item xs={12} sm={6}>
                    <div
                        style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                        alt="brand">
                        <Chart />
                    </div>

                </Grid>

                <Grid container item xs={12} sm={6} alignItems="center" direction="column" style={{ padding: 10 }}>
                    <div style={{ color: '#1976d2' }}> 
                        <h1 >Informações sobre a temperatura: </h1>
                        <ul>
                            <li>
                                <h2> Máxima: 7°C</h2>
                            </li>
                            <li>
                                <h2> Mínima: 4°C</h2>
                            </li>
                            <li>
                                <h2>Média: 5°C</h2>
                            </li>
                        </ul>
                    </div>
                </Grid>


            </Grid>
        </div>
    );
};

export default Temp;