import { teamData } from "@/constants";
import HeadingText from "./HeadingText";

export default function Team() {
  return (
    <div className="w-full p-3 md:p-6 bg-white rounded-lg">
      <HeadingText>Team</HeadingText>
      <p className="mt-5 font-semibold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
        officia voluptatibus blanditiis enim est accusamus numquam labore eos
        consectetur assumenda ullam earum sit autem illum dicta dolor neque, non
        eius!
      </p>
      <div className="flex flex-col gap-5 my-5">
        {teamData.map((member, id) => (
          <div
            key={id}
            className="flex-col flex md:flex-row gap-4 sm:gap-8 bg-blue-400/10 rounded-lg py-5 px-3 md:px-6">
            <div className="flex flex-col text-nowrap items-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-lg w-28 h-32"
              />
              <h2 className="text-lg mt-2 font-semibold">{member.name}</h2>
              <p className="text-gray-400">{member.designation}</p>
            </div>
            <div className="text-lg md:mt-0 text-wrap flex items-center">
              {member.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
