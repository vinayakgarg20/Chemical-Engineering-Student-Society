import React from "react";
import "./EventCard.css";

const EventCard = () => {
  return (
    <section className="events">
      <h2 className="section-subtitle">Events</h2>
      <div className="section-center ">
        <div className="products-info ">
          <div>
            <h3 className="section-title">Event1</h3>
            <h2 className="section-title text-white">our products</h2>
          </div>

          <p className="product-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae
            vitae! Natus sed fugiat id laudantium nemo, asperiores corporis
            amet!
          </p>
        </div>

        <div className="products-inventory  ">
          <div className="product">
            <img
              src="https://picsum.photos/500"
              alt="single product"
              class="product-img"
            />
            <h3 className="product-title">product title</h3>
          </div>

          <div className="product">
            <img
              src="https://picsum.photos/600"
              alt="single product"
              className="product-img"
            />
            <h3 className="product-title">product title</h3>
          </div>

          <div className="product">
            <img
              src="https://picsum.photos/700"
              alt="single product"
              className="product-img"
            />
            <h3 className="product-title">product title</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
