import React from "react";
import Carousel from "better-react-carousel";
import Card from "./Card";

const Groups = () => {
  return (
    <section className="mt-36 mb-44 ">
      <div className="">
        <Carousel
          cols={4}
          rows={1}
          gap={10}
          loop={true}
          autoplay={4000}
          responsiveLayout={[
            {
              breakpoint: 1500,
              cols: 3,
              rows: 1,
              gap: 10,
              loop: true,
              autoplay: 3000,
            },
            {
              breakpoint: 1050,
              cols: 2,
              rows: 1,
              gap: 10,
              loop: true,
              autoplay: 3000,
            },
          ]}
        >
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Groups;