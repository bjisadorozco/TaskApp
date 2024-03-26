import React from "react";
import CardDashboard from "../components/CardDashboard";
import PanelDivisor from "../components/PanelDivisor";
import ClienteIcon from "../assets/ClienteIcon";
import ProveedoresIcon from "../assets/ProveedoresIcon";
import ProductosIcon from "../assets/ProductosIcon";

const Page = () => {
  return (
    <section className="flex flex-wrap gap-5 p-5">
      <CardDashboard
        nombre={"Clientes"}
        cantidad={10}
        Logo={<ClienteIcon clases={"size-32"} />}
      />
      <CardDashboard
        nombre={"Productos"}
        cantidad={2}
        Logo={<ProductosIcon clases={"size-32"} />}
      />
      <CardDashboard
        nombre={"Proveedores"}
        cantidad={3}
        Logo={<ProveedoresIcon clases={"size-32"} />}
      />
    </section>
  );
};
const DashboardPage = () => {
  return <PanelDivisor Page={<Page />} />;
};

export default DashboardPage;