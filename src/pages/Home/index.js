import styles from "./Home.module.scss";
import FeatureInfo from "../../components/FeatureInfo";
import Chart from "../../components/Chart";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import NewMembers from "../../components/NewMembers";
import LatestTransactions from "../../components/LatestTransactions";
function Home() {
  return (
    <div className={styles.home}>
      <FeatureInfo />
      <Chart />

      <Grid container spacing={4}>
        <Grid item xs={4}>
          <NewMembers />
        </Grid>
        <Grid item xs={8}>
          <LatestTransactions />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
