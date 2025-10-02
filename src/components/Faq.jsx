export default function Faq() {
  return (
    <div className="">
      <h2 className="text-center font-bold text-xl md:text-3xl p-4 lg:text-3xl ">
        Frequently Asked
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          Questions
        </span>
      </h2>
      <div className="flex flex-col  gap-6">
        {/* faq-1 */}
        <div className="collapse collapse-arrow join-item  bg-sky-500/10 hover:bg-sky-500/20">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title p-4 rounded-lg flex items-center gap-4 ">
            <h3 className="text-[12px] lg:text-2xl font-bold">
              How long does it take to develop a custom software?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-[10px] lg:text-sm">
              It depends on project size and features. Small projects take 2–4
              weeks, while larger ones may take 2–3 months.
            </p>
          </div>
        </div>
        {/* faq-2 */}
        <div className="collapse collapse-arrow join-item  bg-sky-500/10 hover:bg-sky-500/20">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title p-4 rounded-lg flex items-center gap-4 ">
            <h3 className="text-[12px] lg:text-2xl font-bold">
              Do you provide post-development support?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-[10px] lg:text-sm">
              Yes, we provide continuous maintenance, updates, and technical
              support after project delivery.
            </p>
          </div>
        </div>
        {/* faq-3 */}
        <div className="collapse collapse-arrow join-item  bg-sky-500/10 hover:bg-sky-500/20">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title p-4 rounded-lg flex items-center gap-4 ">
            <h3 className="text-[12px] lg:text-2xl font-bold">
              Can you customize software based on our business needs?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-[10px] lg:text-sm">
              Absolutely! We specialize in custom software solutions tailored to
              your specific requirements.
            </p>
          </div>
        </div>
        {/* faq-4 */}
        <div className="collapse collapse-arrow join-item  bg-sky-500/10 hover:bg-sky-500/20">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title p-4 rounded-lg flex items-center gap-4 ">
            <h3 className="text-[12px] lg:text-2xl font-bold">
              How much does a project cost?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-[10px] lg:text-sm">
              The cost depends on features, complexity, and timeline. We provide
              a free consultation and quotation before starting any project.
            </p>
          </div>
        </div>

        {/* faq-5 */}
        <div className="collapse collapse-arrow join-item  bg-sky-500/10 hover:bg-sky-500/20">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title p-4 rounded-lg flex items-center gap-4 ">
            <h3 className="text-[12px] lg:text-2xl font-bold">
              Do you sign NDA for sensitive projects?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-[10px] lg:text-sm">
              Yes, we maintain complete confidentiality and can sign NDAs to
              protect your business data and ideas.
            </p>
          </div>
        </div>
        {/* faq-6 */}
        <div className="collapse collapse-arrow join-item  bg-sky-500/10 hover:bg-sky-500/20">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title p-4 rounded-lg flex items-center gap-4 ">
            <h3 className="text-[12px] lg:text-2xl font-bold">
              Which technologies do you use for development?
            </h3>
          </div>
          <div className="collapse-content">
            <p className="text-[10px] lg:text-sm">
              We work with modern technologies such as React, Node.js, MongoDB,
              Python, and cloud platforms to build scalable and secure
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
