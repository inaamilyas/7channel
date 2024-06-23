import React from "react";
import { services } from "../../constants";
import ServiceCard from "../ServiceCard";

function Services() {
  return (
    <>
      <section className="w-[100%] py-[60px]">
        <div className="container mx-auto h-fit">
          <h1 className="text-[35px] font-bold text-primary text-center mb-5">
            Our Services
          </h1>
          <div className="flex items-center justify-center flex-wrap mx-auto w-full">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
