import styles from "./Sidebar.module.scss";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import StorefrontIcon from "@material-ui/icons/Storefront";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BarChartIcon from "@material-ui/icons/BarChart";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import ReportIcon from "@material-ui/icons/Report";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.ulWrapper}>
        {/* item sidebar */}
        <li className={styles.liWrapper}>
          <span className={styles.titleGeneral}>Dashboard</span>
          <ul className={styles.ulContent}>
            <li className={styles.click}>
              {" "}
              <LineStyleIcon fontSize="small" />{" "}
              <span className={styles.text}>Home</span>{" "}
            </li>
            <li>
              {" "}
              <TimelineIcon fontSize="small" />{" "}
              <span className={styles.text}>Analytics</span>
            </li>
            <li>
              {" "}
              <TrendingUpIcon fontSize="small" />{" "}
              <span className={styles.text}>Sales</span>
            </li>
          </ul>
        </li>
        {/* item sidebar */}

        {/* item sidebar */}
        <li className={styles.liWrapper}>
          <span className={styles.titleGeneral}>Quick Menu</span>
          <ul className={styles.ulContent}>
            <li>
              {" "}
              <PermIdentityIcon fontSize="small" />{" "}
              <span className={styles.text}>Users</span>{" "}
            </li>
            <li>
              {" "}
              <StorefrontIcon fontSize="small" />{" "}
              <span className={styles.text}>Products</span>
            </li>
            <li>
              {" "}
              <AttachMoneyIcon fontSize="small" />{" "}
              <span className={styles.text}>Transactions</span>
            </li>
            <li>
              {" "}
              <BarChartIcon fontSize="small" />{" "}
              <span className={styles.text}>Reports</span>
            </li>
          </ul>
        </li>
        {/* item sidebar */}

        {/* item sidebar */}
        <li className={styles.liWrapper}>
          <span className={styles.titleGeneral}>Notifications</span>
          <ul className={styles.ulContent}>
            <li>
              {" "}
              <MailOutlineIcon fontSize="small" />{" "}
              <span className={styles.text}>Mail</span>{" "}
            </li>
            <li>
              {" "}
              <DynamicFeedIcon fontSize="small" />{" "}
              <span className={styles.text}>Feedback</span>
            </li>
            <li>
              {" "}
              <ChatBubbleOutlineIcon fontSize="small" />{" "}
              <span className={styles.text}>Messages</span>
            </li>
          </ul>
        </li>
        {/* item sidebar */}

        {/* item sidebar */}
        <li className={styles.liWrapper}>
          <span className={styles.titleGeneral}>Staff</span>
          <ul className={styles.ulContent}>
            <li>
              {" "}
              <WorkOutlineIcon fontSize="small" />{" "}
              <span className={styles.text}>Manage</span>{" "}
            </li>
            <li>
              {" "}
              <TimelineIcon fontSize="small" />{" "}
              <span className={styles.text}>Analytics</span>
            </li>
            <li>
              {" "}
              <ReportIcon fontSize="small" />{" "}
              <span className={styles.text}>Reports</span>
            </li>
          </ul>
        </li>
        {/* item sidebar */}
      </ul>
    </div>
  );
}

export default Sidebar;
