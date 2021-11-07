import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">
              Sucesso nas Vendas (%)
            </h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Total de Vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="text-primary py-3">
          <h2>Total de Vendas</h2>
        </div>

        <DataTable />
        <Link className="btn btn-warning btn-lg=" to="/">
              Retornar a Home
          </Link>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
