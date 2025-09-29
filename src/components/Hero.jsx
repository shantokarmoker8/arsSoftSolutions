import video1 from "../assets/videos/Programming.mp4";
import video2 from "../assets/videos/Presentation.mp4";
export default function Hero() {
  return (
    <div className="py-20 lg:py-28">
      <div>
        <h2 className="text-center font-bold text-xl md:text-3xl lg:text-4xl">
          Empowering Businesses with <br />
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Smart Software Solutions
          </span>
        </h2>
        <p className="text-center text-sm md:text-6 lg:text-xl py-5 md:py-6 lg:py-7">
          We design and develop innovative web, mobile, and desktop applications
          tailored to your needs. Our mission is to deliver high-quality,
          scalable, and user-friendly software that helps your business grow
          faster and smarter.
        </p>
        <div className="flex gap-4 justify-center">
          <button className=" bg-gradient-to-r from-orange-500 to-orange-800 text-white    p-4 rounded-sm ">
            Get Started
          </button>
          <button className="border-4 border-white p-4 rounded-sm ">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-4 p-6">
        <video
          autoPlay
          loop
          muted
          className="rounded-xl lg:rounded-4xl w-1/2 border-2 lg:border-6 border-orange-700 shadow-orange-400"
          src=""
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-xl lg:rounded-4xl w-1/2 border-2 lg:border-6 border-orange-700 shadow-orange-400"
          src=""
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
