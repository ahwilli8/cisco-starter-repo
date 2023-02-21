import Card from "./Card.js";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard_title">Dashboard</h1>
      <Card title="IP"></Card>
      <Card title="Latency"></Card>
    </div>
  );
}

export default Dashboard;
