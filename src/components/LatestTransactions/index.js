import styles from "./LatestTransactions.module.scss";
import Card from "@material-ui/core/Card";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";

function LatestTransactions() {
  function createData(customer, date, amount, status) {
    return { customer, date, amount, status };
  }

  const rows = [
    createData("Frozen yoghurt", "2 Jun 2021", "$122.00", "Approved"),
    createData("Ice cream sandwich", "2 Jun 2021", "$122.00", "Declined"),
    createData("Eclair", "2 Jun 2021", "$122.00", "Pending"),
    createData("Cupcake", "2 Jun 2021", "$122.00", "Approved"),
  ];
  return (
    <div className={styles.latestTransactions}>
      <Card
        style={{
          boxShadow: "0px 0px 15px -10px rgb(0 0 0 / 75%)",
          maxHeight: "353px",
        }}
      >
        <div className={styles.cardWrapper}>
          <h3 style={{ marginBottom: "20px" }}>Latest Transections</h3>

          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow style={{}}>
                  <TableCell
                    style={{
                      borderBottom: "none",
                      fontWeight: "bold",
                      fontSize: "17px",
                      padding: "10px",
                      paddingTop: "6px",
                    }}
                    align="left"
                  >
                    Customer
                  </TableCell>
                  <TableCell
                    style={{
                      borderBottom: "none",
                      fontWeight: "bold",
                      fontSize: "17px",
                      padding: "10px",
                      paddingTop: "6px",
                    }}
                    align="left"
                  >
                    Date
                  </TableCell>
                  <TableCell
                    style={{
                      borderBottom: "none",
                      fontWeight: "bold",
                      fontSize: "17px",
                      padding: "10px",
                      paddingTop: "6px",
                    }}
                    align="left"
                  >
                    Amount
                  </TableCell>
                  <TableCell
                    style={{
                      borderBottom: "none",
                      fontWeight: "bold",
                      fontSize: "17px",
                      padding: "10px",
                      paddingTop: "6px",
                    }}
                    align="left"
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      style={{
                        borderBottom: "none",
                        padding: "10px 0px",
                        paddingLeft: "10px",
                        fontSize: "15px",
                      }}
                      align="left"
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src={require("../../images/avatar.jpg")}
                          style={{ height: "40px", width: "40px" }}
                        />
                        <span style={{ marginLeft: "7px", fontWeight: "bold" }}>
                          Susan Carol
                        </span>
                      </div>
                    </TableCell>
                    <TableCell
                      style={{
                        borderBottom: "none",
                        padding: "10px 0px",
                        paddingLeft: "10px",
                        fontSize: "15px",
                      }}
                      align="left"
                    >
                      {row.date}
                    </TableCell>
                    <TableCell
                      style={{
                        borderBottom: "none",
                        padding: "10px 0px",
                        paddingLeft: "10px",
                        fontSize: "15px",
                      }}
                      align="left"
                    >
                      {row.amount}
                    </TableCell>
                    <TableCell
                      style={{
                        borderBottom: "none",
                        padding: "10px 0px",
                        paddingLeft: "10px",
                        fontSize: "15px",
                      }}
                      align="left"
                    >
                      {row.status === "Approved" ? (
                        <span
                          style={{
                            padding: "5px 10px",
                            backgroundColor: "#e5faf2",
                            color: "#3bb077",
                            borderRadius: "10px",
                            fontSize: "13px",
                          }}
                        >
                          {row.status}
                        </span>
                      ) : row.status === "Pending" ? (
                        <span
                          style={{
                            padding: "5px 10px",
                            backgroundColor: "#ebf1fe",
                            color: "#2a7ade",

                            borderRadius: "10px",
                            fontSize: "13px",
                          }}
                        >
                          {row.status}
                        </span>
                      ) : (
                        <span
                          style={{
                            padding: "5px 10px",
                            backgroundColor: "#fff0f1",
                            color: "#d95087",
                            borderRadius: "10px",
                            fontSize: "13px",
                          }}
                        >
                          {row.status}
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Card>
    </div>
  );
}

export default LatestTransactions;
