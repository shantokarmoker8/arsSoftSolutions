import { Globe } from "lucide-react";
import React from "react";

export default function Services() {
  return (
    <div>
      <h2 className="text-center font-bold text-xl md:text-3xl lg:text-4xl">
        Our
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Services
        </span>
      </h2>
      <p className="text-center text-sm md:text-6 lg:text-xl py-5 md:py-6 lg:py-7">
        At ARS Soft Solutions, we offer end-to-end software development services
        to help businesses grow in the digital era. From designing intuitive
        user experiences to developing secure and scalable applications, we
        focus on quality, reliability, and innovation in every project.
      </p>
      {/* card.... */}
      {/* <div>
        <div className="flex">
          <Globe />
          <div>
            <h2>Web Application Development</h2>
            <p>
              Secure, dynamic, and responsive web applications tailored for your
              business needs. Our web apps are designed to provide seamless user
              experiences, optimized performance, and easy scalability to handle
              growing traffic and complex business workflows.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
