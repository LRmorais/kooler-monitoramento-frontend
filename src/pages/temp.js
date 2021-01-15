import React from 'react';
import Chart from '../components/gauge';
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

                <Grid item>
                    <p>1</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Temp;