import React from "react";
import Service from "./Service";
import { v4 as uuidv4 } from "uuid";

const Services = (props) => {
  const { icons } = props;
  //console.log(icons, icons.props);
  const services = icons.props;
  return (
    <div className="mx-[20px]">
      <ul className="flex flex-wrap justify-center">
        {services &&
          services.map((each) => (
            <Service
              key={uuidv4()}
              serviceDetails={[each.iconText, each.iconUrl]}
            />
          ))}
      </ul>
    </div>
  );
};

export default Services;
