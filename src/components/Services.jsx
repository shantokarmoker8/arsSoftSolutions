import { IoGlobeSharp } from "react-icons/io5";
import { FaDesktop } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
export default function Services() {
  return (
    <div className="min-h-screen border flex flex-col justify-evenly">
      <h2 className="text-center font-bold text-xl md:text-3xl lg:text-4xl ">
        Our
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          Services
        </span>
      </h2>
      <p className="text-center text-[10px] md:text-[15px] lg:text-xl p-4 ">
        At ARS Soft Solutions, we offer end-to-end software development services
        to help businesses grow in the digital era. From designing intuitive
        user experiences to developing secure and scalable applications, we
        focus on quality, reliability, and innovation in every project.
      </p>
      {/* card.... */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* web application */}
        <div className="text-center bg-sky-500/10 hover:bg-sky-500/20 p-2  md:p-4 rounded-sm md:rounded-lg">
          <div className="flex justify-center">
            <IoGlobeSharp className="text-xl md:text-3xl lg:text-5xl" />
          </div>
          <div>
            <h2 className="text-[15px] md:text-2xl font-bold md:p-2 lg:p-4">
              Web Application
            </h2>
            <p className="text-[10px] md:text-[15px] lg:text-xl">
              Secure, dynamic, and responsive web applications tailored for your
              business needs.
            </p>
          </div>
        </div>
        {/* desktop application */}
        <div className="text-center bg-sky-500/10 hover:bg-sky-500/20 p-2  md:p-4 rounded-sm md:rounded-lg">
          <div className="flex justify-center">
            <FaDesktop className="text-xl md:text-3xl lg:text-5xl" />
          </div>
          <div>
            <h2 className="text-[15px] md:text-2xl font-bold md:p-2 lg:p-4">
              Desktop Application
            </h2>
            <p className="text-[10px] md:text-[15px] lg:text-xl">
              Powerful and reliable desktop solutions designed for enterprises
              and individuals.
            </p>
          </div>
        </div>
        {/* mobile application */}
        <div className="text-center bg-sky-500/10 hover:bg-sky-500/20 p-2  md:p-4 rounded-sm md:rounded-lg">
          <div className="flex justify-center">
            <FaMobileScreenButton className="text-xl md:text-3xl lg:text-5xl" />
          </div>
          <div>
            <h2 className="text-[15px] md:text-2xl font-bold md:p-2 lg:p-4">
              Mobile Application
            </h2>
            <p className="text-[10px] md:text-[15px] lg:text-xl">
              Android & iOS applications with modern UI/UX for seamless user
              experiences.
            </p>
          </div>
        </div>
        {/*UI/UX Design */}
        <div className="text-center bg-sky-500/10 hover:bg-sky-500/20 p-2  md:p-4 rounded-sm md:rounded-lg">
          <div className="flex justify-center">
            <MdDesignServices className="text-xl md:text-3xl lg:text-5xl" />
          </div>
          <div>
            <h2 className="text-[15px] md:text-2xl font-bold md:p-2 lg:p-4">
              UI/UX Design
            </h2>
            <p className="text-[10px] md:text-[15px] lg:text-xl">
              Engaging and user-friendly design that makes your product stand
              out.
            </p>
          </div>
        </div>
        {/*Cloud Solutions */}
        <div className="text-center bg-sky-500/10 hover:bg-sky-500/20 p-2  md:p-4 rounded-sm md:rounded-lg">
          <div className="flex justify-center">
            <FaCloud className="text-xl md:text-3xl lg:text-5xl" />
          </div>
          <div>
            <h2 className="text-[15px] md:text-2xl font-bold md:p-2 lg:p-4">
              Cloud Solutions
            </h2>
            <p className="text-[10px] md:text-[15px] lg:text-xl">
              Scalable cloud-based systems with seamless integration and
              deployment.
            </p>
          </div>
        </div>
        {/*Maintenance & Support */}
        <div className="text-center bg-sky-500/10 hover:bg-sky-500/20 p-2  md:p-4 rounded-sm md:rounded-lg">
          <div className="flex justify-center">
            <GrVmMaintenance className="text-xl md:text-3xl lg:text-5xl" />
          </div>
          <div>
            <h2 className="text-[15px] md:text-2xl font-bold md:p-2 lg:p-4">
              Maintenance & Support
            </h2>
            <p className="text-[10px] md:text-[15px] lg:text-xl">
              Continuous improvement, bug fixing, and reliable technical support
              for your software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
