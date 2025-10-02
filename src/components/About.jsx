import photo from "../assets/photo/software.png";
import { TiTickOutline } from "react-icons/ti";

export default function About() {
  return (
    <div className=" ">
      <div>
        <h2 className="text-center font-bold text-xl md:text-3xl lg:text-4xl ">
          About
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            Us
          </span>
        </h2>
        <p className="text-center text-[10px] md:text-[15px] lg:text-xl p-4 ">
          We are a forward-thinking software development company passionate
          about delivering innovative and reliable digital solutions. With a
          skilled team of professionals, we transform ideas into powerful
          applications that empower businesses to grow in today’s competitive
          world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* left side */}
        <div className=" bg-sky-500/10 p-2 md:p-4 lg:p-6 md:rounded-xl lg:rounded-2xl flex flex-col justify-center items-center">
          <img src={photo} alt="" className="w-full" />
        </div>
        {/* right side */}
        <div className=" bg-sky-500/10 p-2 md:p-4 lg:p-6 md:rounded-xl lg:rounded-2xl">
          <div>
            <h1 className="text-[12px] lg:text-2xl font-bold">Description:</h1>
            <p className="text-[10px] md:text-[15px] lg:text-xl p-4 ">
              We focus on building smart, scalable, and secure applications
              tailored to meet the unique needs of each client. By combining
              innovation, technology, and a customer-first mindset, we ensure
              every project delivers long-term value.
            </p>
          </div>
          <div>
            <h1 className="text-[12px] lg:text-2xl font-bold">Mission:</h1>
            <p className="text-[10px] md:text-[15px] lg:text-xl p-4 ">
              To deliver impactful software that solves real-world problems and
              helps organizations achieve digital growth.
            </p>
          </div>
          <div>
            <h1 className="text-[12px] lg:text-2xl font-bold">Core Values:</h1>
            <ul>
              <li className="text-[10px] md:text-[15px] lg:text-xl p-4 flex gap-2 items-center">
                <TiTickOutline /> Customer-Centric Approach
              </li>
              <li className="text-[10px] md:text-[15px] lg:text-xl p-4 flex gap-2 items-center">
                <TiTickOutline /> Quality & Reliability
              </li>
              <li className="text-[10px] md:text-[15px] lg:text-xl p-4 flex gap-2 items-center">
                <TiTickOutline /> Continuous Innovation
              </li>
              <li className="text-[10px] md:text-[15px] lg:text-xl p-4 flex gap-2 items-center">
                <TiTickOutline /> Long-Term Partnership
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
