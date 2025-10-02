export default function Contact() {
  return (
    <div className="lg:h-screen flex flex-col justify-between ">
      <h2 className="text-center font-bold text-xl md:text-3xl lg:text-4xl ">
        Get in
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          Touch
        </span>
      </h2>
      <p className="text-center text-[10px] md:text-[15px] lg:text-xl p-4 ">
        Have a project in mind or want to know more about our services? We’d
        love to hear from you. Fill out the form below or reach us directly
        through our contact details.
      </p>

      <div className="bg-sky-500/10 flex justify-center py-6 md:py-8 lg:py-11 ">
        <div>
          <div className="flex flex-col gap-1 lg:gap-2">
            <label htmlFor="" className="text-[12px] lg:text-2xl font-bold">
              Name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border text-[10px] md:text-[15px] lg:text-xl p-1 lg:p-2 rounded-sm lg:rounded-xl w-48 md:w-72 lg:w-96"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col gap-1 lg:gap-2">
            <label htmlFor="" className="text-[12px] lg:text-2xl font-bold">
              Email
            </label>
            <input
              type="email"
              name=""
              id=""
              className="border text-[10px] md:text-[15px] lg:text-xl p-1 lg:p-2 rounded-sm lg:rounded-xl w-48 md:w-72 lg:w-96"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col gap-1 lg:gap-2">
            <label htmlFor="" className="text-[12px] lg:text-2xl font-bold">
              Message
            </label>
            <textarea
              name=""
              className="border text-[10px] md:text-[15px] lg:text-xl p-1 lg:p-2 rounded-sm lg:rounded-xl h-20 md:w-72 w-48 md:h-32  lg:w-96"
              placeholder="Enter Your Message's"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
