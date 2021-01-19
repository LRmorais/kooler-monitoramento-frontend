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

                <Grid container item xs={12} sm={6} alignItems="center" direction="column" style={{padding:10}}>
                    <h1>Temperatura Ideal: </h1>
                    <ul>
                        <li>
                            informação 1
                        </li>
                        <li>
                            informação 2
                        </li>
                        <li>
                            informação 3
                        </li>
                        <li>
                            informação 4
                        </li>
                    </ul>
                </Grid>


            </Grid>
        </div>
    );
};

export default Temp;