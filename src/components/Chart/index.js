import styles from "./Chart.module.scss";
import Card from "@material-ui/core/Card";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const uv = "Active User";
const data = [
  {
    name: "Feb",
    [uv]: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mar",
    [uv]: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Apr",
    [uv]: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "May",
    [uv]: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Jun",
    [uv]: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Ful",
    [uv]: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Agu",
    [uv]: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    [uv]: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Oct",
    [uv]: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Nov",
    [uv]: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    [uv]: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function Chart() {
  return (
    <div className={styles.chart}>
      <Card style={{ boxShadow: "0px 0px 15px -10px rgb(0 0 0 / 75%)" }}>
        <div className={styles.cardWrapper}>
          <h3 style={{ marginBottom: "20px" }}>User Analytics</h3>
          <ResponsiveContainer width={"100%"} height={250}>
            <LineChart width={500} height={300} data={data}>
              <Line type="monotone" dataKey={uv} stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" stroke="#8884d8" />

              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}

export default Chart;
