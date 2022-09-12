import React, { useContext } from "react";
import CarouselItem from "../Carousel/CarouselItem";
import Chart from "../Chart/Chart";

import "./dashboard.css";
import { carouselItems, chartLabels } from "../../assets/mock/mockData";
import UserContext from "../../context/UserContext/UserContext";

const Dashboard = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <div className="dashboard-user-name">
            {userContext.state.user?.displayName}
          </div>
          <div className="dashboard-heading-text">Dashboard</div>
        </div>
        <div>
          <input
            className="dashboard-header-search"
            type="text"
            placeholder="Search Crypto"
          />
        </div>
      </header>
      <main>
        <section className="dashboard-banner">
          <section>
            <div>Easy to Manage Your Crypto Transactions</div>
            <div>View your detailed transaction here</div>
            <button>Detail Transaction</button>
          </section>
        </section>
        <section className="dashboard-portfolio">
          <div className="dashboard-portfolio-heading">
            <div className="dashboard-heading-text">My Portfolio</div>
            <div>
              <div>{"<"}</div>
              <div>{">"}</div>
            </div>
          </div>
          <div className="dashboard-portfolio-carousel">
            {carouselItems.map((carouselItem) => (
              <CarouselItem
                key={carouselItem.name}
                icon={carouselItem.icon}
                name={carouselItem.name}
                shortName={carouselItem.shortName}
                price={carouselItem.price}
                nature={carouselItem.nature}
                changeInPercent={carouselItem.changeInPercent}
              />
            ))}
          </div>
        </section>
        <div className="dashboard-chart">
          <Chart
            type="Spendings"
            chartData={chartLabels.map(() => (Math.random() * 100).toFixed(2))}
            labels={chartLabels}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
