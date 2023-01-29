import React from "react";
import { Header1, Header2 } from "./cards/Header";

export const Home = () => {
  return (
    <>
      <div></div>
      <div style={{ marginTop: 50 }}>
        <Header2
          header_1={"Sell Online at Scale"}
          paragraph_1={
            "We help you achieve the best possible buying experience for your customers online. Our expertise sits best for Shopify, WooCommerce, BigCommerce and Magento It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          }
        />
        <Header1
          header_1={"Sell Online at Scale"}
          paragraph_1={
            "We help you achieve the best possible buying experience for your customers online. Our expertise sits best for Shopify, WooCommerce, BigCommerce and Magento It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          }
        />
        {/* <Headercard
          header_1={"Sell Online at Scale"}
          paragraph_1={
            "We help you achieve the best possible buying experience for your customers online. Our expertise sits best for Shopify, WooCommerce, BigCommerce and Magento It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          }
        /> */}
      </div>
    </>
  );
};
