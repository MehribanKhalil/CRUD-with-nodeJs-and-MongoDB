import React from "react";
import "./index.scss";

const BooksCard = ({ image, title, description, category }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div className="ProductCard_content">
        <div className="ProductCard_top">
          <div className="ProductCard_img">
            <img src={image} alt="" />
          </div>

          <div className="ProductCard_overlay">
            <div className="card_overlay_btn">
              {/* <button>add to cart</button> */}
            </div>
          </div>
        </div>

        <h6 className="ProductCard_title">{title}</h6>
        
          <p>{category && category.join(" ")}</p>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default BooksCard;
