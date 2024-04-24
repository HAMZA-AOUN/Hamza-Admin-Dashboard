import Card from "../ui/dashboard/card/Card";
import Chart from "../ui/dashboard/chart/Chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/Rightbar";
import Transactions from "../ui/dashboard/transactions/Transactions";

const cards = [
  {
    id: "1",
    title: "Hamza",
    number: "10.55",
    change: "+15",
  },
  {
    id: "2",
    title: "Hamza",
    number: "10.55",
    change: "-6",
  },
  {
    id: "3",
    title: "Hamza",
    number: "10.55",
    change: "+9",
  },
];

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
