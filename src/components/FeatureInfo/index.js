import styles from "./FeatureInfo.module.scss";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
function FeatureInfo() {
  return (
    <div className={styles.featureInfo}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Card style={{ boxShadow: "0px 0px 15px -10px rgb(0 0 0 / 75%)" }}>
            <div className={styles.cardWrapper}>
              <div className={styles.title}>Revanue</div>
              <div className={styles.numberWrapper}>
                <div className={styles.numberPrice}>$2,415</div>
                <div className={styles.numberPercent}>
                  <span>-11.4</span>
                  <span className={styles.numberPercentArrow}>
                    <ArrowDownwardIcon color="secondary" />
                  </span>
                </div>
              </div>
              <div className={styles.text}>Compared to last month</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ boxShadow: "0px 0px 15px -10px rgb(0 0 0 / 75%)" }}>
            <div className={styles.cardWrapper}>
              <div className={styles.title}>Sales</div>
              <div className={styles.numberWrapper}>
                <div className={styles.numberPrice}>$4,415</div>
                <div className={styles.numberPercent}>
                  <span>-11.4</span>
                  <span className={styles.numberPercentArrow}>
                    <ArrowDownwardIcon color="secondary" />
                  </span>
                </div>
              </div>
              <div className={styles.text}>Compared to last month</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ boxShadow: "0px 0px 15px -10px rgb(0 0 0 / 75%)" }}>
            <div className={styles.cardWrapper}>
              <div className={styles.title}>Cost</div>
              <div className={styles.numberWrapper}>
                <div className={styles.numberPrice}>$2,225</div>
                <div className={styles.numberPercent}>
                  <span>-11.4</span>
                  <span className={styles.numberPercentArrow}>
                    <ArrowUpwardIcon style={{ color: "green" }} />
                  </span>
                </div>
              </div>
              <div className={styles.text}>Compared to last month</div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default FeatureInfo;
