import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppleWatch from "./components/AppleWatch";
import IphoneLightTheme from "./components/iphone-theme/lighttheme";
import Macbookcardteste from "./components/Macbook/teste";
import Ipadcard from "./components/Ipad/Ipad";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [filter, setFilter] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const products = [
    {
      filterName: "all",
      components: [], // Deixe vazio para mostrar todos os produtos
    },
    {
      filterName: "iphone", /// Aba do iPhone
      components: [
        <IphoneLightTheme
          nome="iPhone 15"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis metus eget libero consectetur consectetur. Nulla facilisi." /// Opcional, sub-titulo abaixo do nome do produto
          parcela="199"
          valorDestacado="1599"
          valorQuebrado="1499"
          valorAVista="11999,99"
          foto="/assets/iphone/iphone-preto.png"
          midnight="/assets/iphone/iphone-verde.png"
          silver="/assets/iphone/iphone-amarelo.png"
          spacegray="/assets/iphone/iphone-azul.png"
          starlight="/assets/iphone/iphone-rosa.png"
          capacidade1="128GB"
          disponivel1="nao"
          capacidade2="256GB"
          disponivel2="sim"
          capacidade3="512GB"
          disponivel3="sim"
          wpp="https://abrir.link/DNzoJ"
        />,
      ],
    },
    {
      filterName: "macbook", /// Aba do Mac
      components: [
        <Macbookcardteste
          nome="MacBook Air"
          parcela="249"
          valorDestacado="2099"
          valorQuebrado="1999"
          valorAVista="15999,99"
          foto="/assets/macbook/macbook-midnight.png"
          midnight="/assets/macbook/macbook-midnight.png"
          silver="/assets/macbook/macbook-silver.png"
          spacegray="/assets/macbook/macbook-spacegray.png"
          starlight="/assets/macbook/macbook-starlight.png"
          capacidade1="128GB"
          disponivel1="sim"
          capacidade2="256GB"
          disponivel2="nao"
          capacidade3="512GB"
          disponivel3="sim"
          chipm2="/assets/macbook/m2.png"
          chipm3="/assets/macbook/m3.png"
          wpp="https://abrir.link/DNzoJ"
        />,
      ],
    },
    {
      filterName: "applewatch", /// Aba do Watch
      components: [
        <AppleWatch
          nome="AppleWatch S9"
          parcela="39"
          valorDestacado="499"
          valorQuebrado="399"
          valorAVista="3499,99"
          foto="/assets/watch/s9-stainless-silver.jpeg"
          midnight="/assets/watch/s9-stainless-silver.jpeg"
          silver="/assets/watch/s9-stainless-graphite.jpeg"
          starlight="/assets/watch/s9-stainless-gold.jpeg"
          dim41="/assets/watch/watch-spec-dim-41.png"
          dim45="/assets/watch/watch-spec-dim-45.png"
          parcela41="19"
          valorDestacado41="599"
          valorQuebrado41="499"
          valorAVista41="4299"
          parcela45="29"
          valorDestacado45="699"
          valorQuebrado45="599"
          valorAVista45="5199"
        />,
      ],
    },

    {
      filterName: "ipad", /// Aba do iPad
      components: [
        <Ipadcard
          nome="iPad Pro"
          parcela="199"
          valorDestacado="1599"
          valorQuebrado="1499"
          valorAVista="11999,99"
          foto="/assets/ipad/ipad-silver.png"
          // midnight="/assets/iphone/iphone-verde.png"
          silver="/assets/ipad/ipad-silver.png"
          spacegray="/assets/ipad/ipad-gray.png"
          // starlight="/assets/iphone/iphone-rosa.png"
          capacidade1="128GB"
          disponivel1="nao"
          capacidade2="256GB"
          disponivel2="sim"
          capacidade3="512GB"
          disponivel3="nao"
          wpp="https://abrir.link/DNzoJ"
        />,
      ],
    },
  ];

  return (
    <>
      <Navbar
        handleFilter={setFilter}
        toggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen}
      />

      {products.map(
        (product) =>
          (filter === product.filterName || filter === "all") &&
          product.components
      )}
    </>
  );
}

export default App;
