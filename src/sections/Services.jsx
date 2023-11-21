import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
   return (
      <section className="max-conatiner flex justify-center flex-wrap gap-9">
         {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
         ))}
      </section>
   );
};

export default Services;
