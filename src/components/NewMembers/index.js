import styles from "./NewMembers.module.scss";
import Card from "@material-ui/core/Card";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Avatar from "@material-ui/core/Avatar";

function NewMembers() {
  return (
    <div className={styles.newMembers}>
      <Card style={{ boxShadow: "0px 0px 15px -10px rgb(0 0 0 / 75%)" }}>
        <div className={styles.cardWrapper}>
          <h3 style={{ marginBottom: "20px" }}>New Join Members</h3>
          <div className={styles.list}>
            {/* list item */}
            <div className={styles.listItem}>
              <div className={styles.avatar}>
                <Avatar
                  src={require("../../images/avatar.jpg")}
                  style={{ height: "40px", width: "40px" }}
                />
              </div>
              <div className={styles.des}>
                <div className={styles.name}>Anna Keller</div>
                <div className={styles.career}>Software Engineer</div>
              </div>
              <div className={styles.display}>
                <div className={styles.displayIcon}>
                  <VisibilityIcon style={{ fontSize: "15px" }} />
                </div>
                <span className={styles.text}>Display</span>
              </div>
            </div>
            {/* list item */}

            {/* list item */}
            <div className={styles.listItem}>
              <div className={styles.avatar}>
                <Avatar
                  src={require("../../images/avatar.jpg")}
                  style={{ height: "40px", width: "40px" }}
                />
              </div>
              <div className={styles.des}>
                <div className={styles.name}>Anna Keller</div>
                <div className={styles.career}>Software Engineer</div>
              </div>
              <div className={styles.display}>
                <div className={styles.displayIcon}>
                  <VisibilityIcon style={{ fontSize: "15px" }} />
                </div>
                <span className={styles.text}>Display</span>
              </div>
            </div>
            {/* list item */}

            {/* list item */}
            <div className={styles.listItem}>
              <div className={styles.avatar}>
                <Avatar
                  src={require("../../images/avatar.jpg")}
                  style={{ height: "40px", width: "40px" }}
                />
              </div>
              <div className={styles.des}>
                <div className={styles.name}>Anna Keller</div>
                <div className={styles.career}>Software Engineer</div>
              </div>
              <div className={styles.display}>
                <div className={styles.displayIcon}>
                  <VisibilityIcon style={{ fontSize: "15px" }} />
                </div>
                <span className={styles.text}>Display</span>
              </div>
            </div>
            {/* list item */}

            {/* list item */}
            <div className={styles.listItem}>
              <div className={styles.avatar}>
                <Avatar
                  src={require("../../images/avatar.jpg")}
                  style={{ height: "40px", width: "40px" }}
                />
              </div>
              <div className={styles.des}>
                <div className={styles.name}>Anna Keller</div>
                <div className={styles.career}>Software Engineer</div>
              </div>
              <div className={styles.display}>
                <div className={styles.displayIcon}>
                  <VisibilityIcon style={{ fontSize: "15px" }} />
                </div>
                <span className={styles.text}>Display</span>
              </div>
            </div>
            {/* list item */}

            {/* list item */}
            <div className={styles.listItem}>
              <div className={styles.avatar}>
                <Avatar
                  src={require("../../images/avatar.jpg")}
                  style={{ height: "40px", width: "40px" }}
                />
              </div>
              <div className={styles.des}>
                <div className={styles.name}>Anna Keller</div>
                <div className={styles.career}>Software Engineer</div>
              </div>
              <div className={styles.display}>
                <div className={styles.displayIcon}>
                  <VisibilityIcon style={{ fontSize: "15px" }} />
                </div>
                <span className={styles.text}>Display</span>
              </div>
            </div>
            {/* list item */}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default NewMembers;
