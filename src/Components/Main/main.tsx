import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MainGeTAll from "../mainGetAll/MainGetAll";
import DetailProducts from "../DetailProducts/DetailProducts";
import NavSearch from "../navSearch/NavSearch";

const Main = () => {
  return (
    <div className="main">
      <NavSearch />
      <Routes>
        <Route path="/" element={<MainGeTAll />} />
        <Route path="/datalles/:id" element={<DetailProducts />} />
      </Routes>
    </div>
  );
};
export default Main;
