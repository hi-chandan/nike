import React from "react";
import { services } from "../components";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <section className="max-container flex flex-wrap gap-9 justify-center items-center">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
