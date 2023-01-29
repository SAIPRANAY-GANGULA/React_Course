import { useState } from "react";

const Section = ({ title, description, isVisible, setVisible }) => {
  return (
    <div className="border border-black p-2 my-2 | flex flex-col">
      <div className="flex justify-between px-2">
        <p className="text-lg font-bold">{title}</p>
        <button className="primary-btn" onClick={setVisible}>
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      <p>{isVisible ? description : ""}</p>
    </div>
  );
};
const Instamart = () => {
  const [sectionVisible, setSectionVisible] = useState("about");
  return (
    <div className="center-content">
      <Section
        title="About"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque eos maiores necessitatibus odio quam quisquam similique veniam voluptas voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque eos maiores necessitatibus odio quam quisquam similique veniam voluptas voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque eos maiores necessitatibus odio quam quisquam similique veniam voluptas voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque eos maiores necessitatibus odio quam quisquam similique veniam voluptas voluptate."
        isVisible={sectionVisible === "about"}
        setVisible={() =>
          sectionVisible === "about"
            ? setSectionVisible("")
            : setSectionVisible("about")
        }
      />

      <Section
        title="Careers"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque eos maiores necessitatibus odio quam quisquam similique veniam voluptas voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque eos maiores necessitatibus odio quam quisquam similique veniam voluptas voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque eos maiores necessitatibus odio quam quisquam similique veniam voluptas voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque eos maiores necessitatibus odio quam quisquam similique veniam voluptas voluptate."
        isVisible={sectionVisible === "careers"}
        setVisible={() =>
          sectionVisible === "careers"
            ? setSectionVisible("")
            : setSectionVisible("careers")
        }
      />

      <Section
        title="Team"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque eos maiores necessitatibus odio quam quisquam similique veniam voluptas voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque eos maiores necessitatibus odio quam quisquam similique veniam voluptas voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque eos maiores necessitatibus odio quam quisquam similique veniam voluptas voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque eos maiores necessitatibus odio quam quisquam similique veniam voluptas voluptate."
        isVisible={sectionVisible === "team"}
        setVisible={() =>
          sectionVisible === "team"
            ? setSectionVisible("")
            : setSectionVisible("team")
        }
      />
    </div>
  );
};

export default Instamart;
