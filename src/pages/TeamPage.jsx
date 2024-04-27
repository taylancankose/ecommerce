import React from "react";
import TeamCard from "../components/Cards/TeamCard";

function TeamPage() {
  return (
    <div className="font-montserrat bg-bgGray">
      <div className="md:mx-4 xl:mx-24 mt-4 px-6 py-10">
        {/* Title */}
        <div className="md:w-2/3 lg:w-1/3 m-auto mb-14">
          <h6 className="text-headerColor font-bold text-4xl leading-[50px] tracking-[0.2px] text-center">
            Meet Our Team
          </h6>
          <p className="text-secondTextColor text-center font-normal text-sm tracking-[0.2px] mt-3">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        <div className="md:flex justify-center gap-8">
          {/* Team Card */}
          <TeamCard
            name={"Erhan FIRAT"}
            title={"Project Owner"}
            img={"https://avatars.githubusercontent.com/u/2324398?v=4"}
          />
          <TeamCard
            name={"Gökhan ÖZDEMİR"}
            title={"Scrum Master"}
            img={"https://avatars.githubusercontent.com/u/8511119?v=4"}
          />
          <TeamCard
            name={"Taylan Can KÖSE"}
            title={"Fullstack Developer"}
            img={
              "https://avatars.githubusercontent.com/u/94180821?s=400&u=e5b9639afcecb6c96ecb67f817b3ff1dc2be0fa2&v=4"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
