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
              cols: 4,
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
            <h1 className="md:text-center my-2 text-3xl">Group A</h1>
            <Card
              countries={[
                { name: "Qatar", code: "QA" },
                { name: "Ecuador", code: "EC" },
                { name: "Senegal", code: "SN" },
                { name: "Netherlands", code: "NL" },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <h1 className="md:text-center my-2 text-3xl">Group B</h1>
            <Card
              countries={[
                { name: "England", code: "GB" },
                { name: "USA", code: "US" },
                { name: "IR Iran", code: "IR" },
                { name: "Wales", code: "GB" },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <h1 className="md:text-center my-2 text-3xl">Group C</h1>
            <Card
              countries={[
                { name: "Argentina", code: "AR" },
                { name: "Saudi Arabia", code: "SA" },
                { name: "Mexico", code: "MX" },
                { name: "Poland", code: "PL" },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <h1 className="md:text-center my-2 text-3xl">Group D</h1>
            <Card
              countries={[
                { name: "France", code: "FR" },
                { name: "Denmark", code: "DK" },
                { name: "Tunisia", code: "TN" },
                { name: "Australia", code: "AU" },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <h1 className="md:text-center my-2 text-3xl">Group E</h1>
            <Card
              countries={[
                { name: "Spain", code: "ES" },
                { name: "Germany", code: "DE" },
                { name: "Japan", code: "JPN" },
                { name: "Costa Rica", code: "CRI" },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <h1 className="md:text-center my-2 text-3xl">Group F</h1>
            <Card
              countries={[
                { name: "Belgium", code: "BEL" },
                { name: "Canada", code: "CN" },
                { name: "Morocoo", code: "MA" },
                { name: "Croatia", code: "HR" },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <h1 className="md:text-center my-2 text-3xl">Group G</h1>
            <Card
              countries={[
                { name: "Brazil", code: "BR" },
                { name: "Serbia", code: "RS" },
                { name: "Switzerland", code: "CH" },
                { name: "Cameroon", code: "CM" },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
            <h1 className="md:text-center my-2 text-3xl">Group H</h1>
            <Card
              countries={[
                { name: "Portugal", code: "PT" },
                { name: "Ghana", code: "GH" },
                { name: "Uruguay", code: "UY" },
                { name: "South Korea", code: "KR" },
              ]}
            />
          </Carousel.Item>
          
        </Carousel>
      </div>
    </section>
  );
};

export default Groups;
