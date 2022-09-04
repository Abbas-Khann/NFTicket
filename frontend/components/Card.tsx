import Image from "next/image";

const Card = ({
  countries,
}: {
  countries: { name: string; code: string }[];
}): JSX.Element => {
  return (
    <section className="bg-[#E5E5E5] py-3 px-4 rounded-lg w-80 h-72 flex flex-col justify-evenly text-black">
      {countries.map((country, index) => {
        return (
          <div
            key={index}
            className="flex flex-row items-center justify-evenly basis-2/12 rounded-2xl py-1 bg-[#ffffff]"
          >
            <div className="basis-1/2 w-full flex justify-center items-center">
              <div className="text-xs relative w-10 h-6">
                <Image
                  src={`https://countryflagsapi.com/png/${country.code}`}
                  alt="Flag"
                  layout="fill"
                  priority
                />
              </div>
            </div>
            <h1 className="text-lg basis-1/2">{country.name}</h1>
          </div>
        );
      })}
    </section>
  );
};

// Getting the Images URL
export async function getServerSideProps(ctx: any) {
  // Fetch data from external API
  //   const res = await fetch(`https://.../data`);
  //   const data = await res.json();
  console.log(ctx);

  // Pass data to the page via props
  //   return { props: { data } };
  return;
}

export default Card;
