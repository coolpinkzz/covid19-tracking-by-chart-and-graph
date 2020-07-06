import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography
} from '@material-ui/core/';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data:{confirmed , recovered, deaths , lastUpdate}}) => {
  if(!confirmed){
    return (
      <div className="spinner-border text-primary" role="status">
  <span className="sr-only">Loading...</span>
</div>



    );
  }

  return(
    <div className={styles.container}>
      <Grid container spacing = {3} justify = "center">
        <Grid item component={Card} xs={12} sm={3} className={cx(styles.card,styles.infected)}>
          <CardContent>
          <Typography variant="h4" >Infected</Typography>
            <Typography variant="h5" gutterBottom>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={10}
                separator=","

                />
            </Typography>
              <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2" gutterBottom><strong>Number of Active Cases of Covid-19</strong></Typography>
        </CardContent>

        </Grid>
        <Grid item component={Card} xs={12} sm={3} className={cx(styles.card,styles.recovered)}>
          <CardContent>
          <Typography variant="h4" gutterBottom>Recovered</Typography>
            <Typography variant="h5" gutterBottom><CountUp
              start={0}
              end={recovered.value}
              duration={5}
              separator=","

              /></Typography>
              <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2" gutterBottom><strong>Number of Recoveries from Covid-19</strong></Typography>
        </CardContent>

        </Grid>
        <Grid item component={Card} xs={12} sm={3} className={cx(styles.card,styles.deaths)}>
          <CardContent>
          <Typography variant="h4" gutterBottom>Deaths</Typography>
            <Typography variant="h5" gutterBottom><CountUp
              start={0}
              end={deaths.value}
              duration={5}
              separator=","

              /></Typography>
              <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2" gutterBottom><strong>Number of Deaths  by  Covid-19</strong></Typography>
        </CardContent>

        </Grid>


      </Grid>
    </div>









  )
}
export default Cards;
