import Image from "next/image";
import Link from "next/link";

import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import LJIMG from "../public/img/Lj.jpg";
import AbbasIMG from "../public/img/abbas.jpeg";
import YanukaIMG from "../public/img/Yanuka.jpeg";

const Team = () => {
  // All the members
  const members = [
    {
      name: "Larry Cuts",
      position: "Smart Contract Engineer",
      image: LJIMG,
      twitter: "https://twitter.com/LarryCutts6",
      github: "https://github.com/ljcutts",
      linkedln: "https://www.linkedin.com/in/larry-cutts-742406169/",
    },
    {
      name: "Abbas Khan",
      position: "Team Lead and Frontend Developer",
      image: AbbasIMG,
      twitter: "https://twitter.com/KhanAbbas201",
      github: "https://github.com/Abbas-Khann",
      linkedln: "https://www.linkedin.com/in/abbas-khan-033802222",
    },
    {
      name: "Yanuka Deneth",
      position: "Full Stack Engineer",
      image: YanukaIMG,
      twitter: "https://twitter.com/yanukadeneth99",
      github: "https://github.com/yanukadeneth99",
      linkedln: "https://www.linkedin.com/in/yanukadeneth99",
    },
  ];

  return (
    <div className="text-white pb-2">
      <h1 className="text-3xl text-center pb-12 sm:text-4xl md:text-5xl">
        Meet the Team
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        {/* Mapping over all members */}
        {members.map((member, index) => {
          return (
            <div
              key={index}
              className="p-4 rounded-lg bg-[#F5F5F5] text-black w-56 text-center mx-auto "
            >
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={member.image}
                  className="rounded-full object-cover"
                  width={300}
                  height={300}
                />
              </div>

              <div className="flex flex-col">
                <h3>{member.name}</h3>
                <p className="text-[#606C7C] my-4">{member.position}</p>
              </div>
              <div className="flex items-center justify-evenly">
                <Link href={member.twitter}>
                  <button>
                    <AiOutlineTwitter className="text-3xl bg-gray-300 rounded-full p-1 cursor-pointer" />
                  </button>
                </Link>
                <Link href={member.github}>
                  <button>
                    <AiFillGithub className="text-3xl bg-gray-300 rounded-full p-1 cursor-pointer" />
                  </button>
                </Link>
                <Link href={member.linkedln}>
                  <button>
                    <AiFillLinkedin className="text-3xl bg-gray-300 rounded-full p-1 cursor-pointer" />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
