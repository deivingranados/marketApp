import React, { ReactElement, useEffect } from "react";
import { useParams } from "react-router-dom";
import { marketService } from "../../service/service";
import { marketItemsDetails, Idescription } from "../../context/type";
import "./detailProduct.scss";

const DetailProducts = (): ReactElement => {
  let { id } = useParams();
  const [itemDetail, setItemDetail] = React.useState<marketItemsDetails>();
  const [descriptions, setDescriptios] = React.useState<Idescription>();

  const getProductsDetails = async () => {
    const result = await fetch(marketService.getProductsPost + id, {
      headers: {
        "Content-Type": marketService.type,
      },
    });

    return result.json();
  };

  const getProductsDescriptions = async () => {
    const result = await fetch(
      marketService.getProductsPost + id + "/description",
      {
        headers: {
          "Content-Type": marketService.type,
        },
      }
    );

    return result.json();
  };

  const HandelDetails = async () => {
    const marketDeatils = await getProductsDetails();
    setItemDetail(marketDeatils);
  };

  const HandelDescriptions = async () => {
    const marketDeatils = await getProductsDescriptions();
    setDescriptios(marketDeatils);
    console.log(descriptions);
  };

  useEffect(() => {
    HandelDetails();
    HandelDescriptions();
  }, []);

  return (
    <div className="container_Products">
      <div className="box_detail_main">
        <div className="box_descriptions">
          <img
            className="img_details"
            src={itemDetail?.pictures[0].url}
            alt=""
          />
          <h6>Descripcion del producto</h6>
          <p className="text_descriptions">{descriptions?.plain_text}</p>
        </div>
        <div className="box_buy">
          <p className="quantity">
            Nuevo - {itemDetail?.sold_quantity} vendidos
          </p>
          <h5>{itemDetail?.title}</h5>
          <p className="price">
            {" "}
            {"$" + new Intl.NumberFormat("de-CO", {}).format(itemDetail?.price)}
          </p>
          <button type="button" className="btn btn-primary" id="button">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProducts;
