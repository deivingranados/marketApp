import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/context";
import iconShip from "../images/ic_shipping.png";

import "./getAll.scss";

const MainGeTAll = (): ReactElement => {
  const navigate = useNavigate();
  const { state } = useAppContext();
  const { allList } = state;

  const hadleGoDetail = (id: number) => {
    navigate(`/datalles/${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="container_products">
        {allList ? (
          allList.map((product) => {
            return (
              <div
                className="item_box"
                onClick={() => hadleGoDetail(product.id)}
              >
                <div className="box_image">
                  <img
                    width={180}
                    height={180}
                    src={product.thumbnail}
                    alt=""
                  />
                </div>
                <div className="box_text">
                  <p className="text-price">
                    {"$" +
                      new Intl.NumberFormat("de-CO", {}).format(product.price)}
                    <span className="span_icon">
                      <img src={iconShip} alt="" />
                    </span>
                  </p>
                  <h6 className="title">{product.title}</h6>
                </div>
                <div className="box_text_state">
                  <p>{product.address.state_name}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MainGeTAll;
