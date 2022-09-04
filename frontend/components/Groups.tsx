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
            <Card
              countries={[
                { name: "Sri Lanka", code: "LKA" },
                { name: "Andorra", code: "AND" },
                { name: "Colombia", code: "COL" },
                { name: "Canada", code: "CAN" },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card
              countries={[
                { name: "China", code: "CHN" },
                { name: "Guam", code: "GUM" },
                { name: "Cyprus", code: "CYP" },
                { name: "Egypt", code: "EGY" },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card
              countries={[
                { name: "Finland", code: "FIN" },
                { name: "Germany", code: "DEU" },
                { name: "Bouvet", code: "BVT" },
                { name: "Iceland", code: "ISL" },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card
              countries={[
                { name: "Kuwait", code: "KWT" },
                { name: "Kenya", code: "KEN" },
                { name: "Kiribati", code: "KIR" },
                { name: "Italy", code: "ITA" },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card
              countries={[
                { name: "Macao", code: "MAC" },
                { name: "Martinique", code: "MTQ" },
                { name: "Mexico", code: "MEX" },
                { name: "Myanmar", code: "MMR" },
              ]}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Groups;
