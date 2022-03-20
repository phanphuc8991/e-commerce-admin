import { useState } from "react";
import styles from "./Navbar.module.scss";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import LanguageIcon from "@material-ui/icons/Language";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
function Navbar() {
  const [popupInfoUser, setPopupInfoUser] = useState(false);

  function handleInfoUser() {
    setPopupInfoUser(!popupInfoUser);
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <h1 className={styles.logo}>pepadmin</h1>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon fontSize="medium" />
            </Badge>
          </div>
          <div className={styles.infoItem}>
            <Badge badgeContent={4} color="secondary">
              <LanguageIcon fontSize="medium" />
            </Badge>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoItemWrapper}>
              <Avatar
                src={require("../../images/avatar.jpg")}
                style={{ height: "35px", width: "35px" }}
              />
              <ArrowDropDownIcon onClick={handleInfoUser}></ArrowDropDownIcon>
            </div>
          </div>
          {popupInfoUser && (
            <div className={styles.infoUser}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="h2">
                    fasgsgsdgsdfg
                  </Typography>
                  <Typography color="textSecondary">adjective</Typography>
                  <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
