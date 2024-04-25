import React from "react";
import ContactHeader from "../layout/ContactHeader";
import ContactCard from "../components/ContactCard";
import ContactCTA from "../layout/ContactCTA";

function ContactPage() {
  return (
    <div className="font-montserrat  ">
      <div className="lg:mx-24 px-4 py-4">
        <ContactHeader />
        <div className="py-20 ">
          {/* Title */}
          <div className="md:w-2/3 lg:w-1/3 m-auto">
            <h6 className="text-headerColor font-bold text-sm leading-6 tracking-[0.2px] text-center">
              VISIT OUR OFFICE
            </h6>
            <h6 className="text-headerColor font-bold text-4xl leading-[50px] tracking-[0.2px] text-center">
              We help small businesses with big ideas
            </h6>
          </div>

          {/* Contact Card */}
          <div className="flex flex-wrap justify-center mt-20 items-center gap-10">
            <ContactCard icon="fa-solid fa-phone" />
            <ContactCard icon="fa-solid fa-location-dot" type="filled" />
            <ContactCard icon="fa-solid fa-envelope" />
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-center items-center py-16 text-headerColor">
            <ContactCTA />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
