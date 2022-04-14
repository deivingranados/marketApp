import React, { ReactElement } from "react";
import { marketService } from "../../service/service";
import { useAppContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import searIcon from "../images/ic_Search.png";
import logo from "../images/Logo_ML.png";
import { Icategory } from "../../context/type";
import "./navSearch.scss";

const NavSearch = (): ReactElement => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [text, setSearchText] = React.useState("");
  const [textCategory, setTextCategory] = React.useState<Icategory[]>();
  const { setState } = useAppContext();

  const getMarket = async () => {
    let search = text ? text : "";
    const result = await fetch(marketService.getProducts + search, {
      headers: {
        "Content-Type": marketService.type,
      },
    });

    return result.json();
  };

  const listProducts = async () => {
    const market = await getMarket();
    let data = market.results.slice(0, 4);
    setState({ allList: data });
    setTextCategory(market.filters);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.currentTarget.value);
    setSearchText(searchTerm);
  };

  const handleText = () => {
    listProducts();
    navigate(`/`);
  };

  return (
    <div className="container-fluid" id="p">
      <nav className="nav_search">
        <img width={40} src={logo} alt="" />
        <input
          className="imput_search"
          type="text"
          placeholder="Nunca dejes de buscar"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="button_acction" onClick={handleText}>
          <img width={15} src={searIcon} alt="" />
        </button>
      </nav>
      {textCategory?.map((item: any) => {
        return (
          <p className="category_text">
            <span>{">"}</span>
            {item.values[0].name}
          </p>
        );
      })}
    </div>
  );
};

export default NavSearch;
