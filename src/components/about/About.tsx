import { missionvisionList } from "@/src/api/missinbissionApi";
import React from "react";

const About = () => {
  return (
    <div className="Container mt-6 grid lg:grid-cols-2 gap-6">
      {missionvisionList.map((item) => (
        <div key={item.id}>
          <div
            className={`p-8 border border-[#262626]/15  rounded duration-300 cursor-pointer ${
              item.type === "mission"
                ? "hover:border-[#55BEEF]"
                : "hover:border-[#FBB03B]"
            }`}
          >
            <p className={`text-3xl text-[#55BEEF] bg-[#55BEEF]/15 p-3 inline-flex rounded ${ item.type === "mission" ? "text-[#55BEEF]" : "text-[#FBB03B] bg-[#FBB03B]/15"}`}>
              {item.icon}
            </p>

            <h2 className="text-lg font-bold mt-2">{item.title}</h2>

            <p className="text-gray-500 mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
