import React from 'react';
import Chart from '../components/Chart';
import Maps from '../components/maps';

import { Grid } from '@material-ui/core'

function Dashboard() {
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
                    <div style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                        alt="brand">
                        <Maps />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;