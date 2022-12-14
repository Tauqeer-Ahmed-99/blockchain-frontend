import React, { useContext } from "react";
import Chart from "../Chart/Chart";

import { chartLabels } from "../../assets/mock/mockData";

import "./chartsgroup.css";
import UserContext from "../../context/UserContext/UserContext";

const ChartsGroup = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="charts-group">
      <header className="charts-group-header">
        <div>
          <div className="charts-group-username">
            {userContext.state.user?.displayName}
          </div>
          <div className="charts-group-heading-text">Statistics</div>
        </div>
      </header>
      <div className="balance-chart">
        <Chart
          type="Balance"
          chartData={chartLabels.map(() => (Math.random() * 100).toFixed(2))}
          labels={chartLabels}
        />
      </div>
      <div className="mining-chart">
        <Chart
          type="Mining"
          chartData={chartLabels.map(() => (Math.random() * 100).toFixed(2))}
          labels={chartLabels}
        />
      </div>
      <div className="spendings-chart">
        <Chart
          type="Spendings"
          chartData={chartLabels.map(() => (Math.random() * 100).toFixed(2))}
          labels={chartLabels}
        />
      </div>
      <div className="gains-chart">
        <Chart
          type="Gains"
          chartData={chartLabels.map(() => (Math.random() * 100).toFixed(2))}
          labels={chartLabels}
        />
      </div>
    </div>
  );
};

export default ChartsGroup;
