import React from "react";

function ContactForm() {
  return (
    <>
      <section className="py-4">
        <div className="container mx-auto px-5 py-[60px]">
          <div className="w-full lg:w-[70%] h-full bg-gray-100 p-10 mx-auto">
            <h1 className="text-[35px] md:text-[50px] text-primary ">
              Drop Us a Line
            </h1>
            <p className="text-[20px] ">For any query and consultant</p>
            <form className="my-5">
              <div className="">
                <label htmlFor="" className="block w-full my-4">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="block w-full text-[20px] bg-transparent outline-none focus:outlline-none border-[black] focus:border-b-[#6494ed] border-b-[1px]  "
                />
              </div>

              <div className="">
                <label htmlFor="" className="block w-full my-4">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="block w-full text-[20px] bg-transparent outline-none focus:outlline-none border-[black] focus:border-b-[#6494ed] border-b-[1px]  "
                />
              </div>

              <div className="">
                <label htmlFor="" className="block w-full my-4">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="block w-full text-[20px] bg-transparent outline-none focus:outlline-none border-[black] focus:border-b-[#6494ed] border-b-[1px] "
                />
              </div>

              <div className="">
                <label htmlFor="" className="block w-full my-4">
                  Your Message (<span>Optional</span>)
                </label>
                <textarea
                  rows={4}
                  name="subject"
                  className="block w-full text-[20px] bg-transparent outline-none focus:outlline-none border-[black] focus:border-b-[#6494ed] border-b-[1px] "
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row text-center md:items-center justify-between my-10 gap-7">
                <button className="px-9 py-3 font-semibold bg-[#343434b5] hover:bg-[#000000] text-white transition-all duration-1000">
                  Submit
                </button>
                <a
                  href="https://wa.me/+923335617635" target="_blank"
                  className="px-9 py-3 font-semibold bg-[#000000b5] hover:bg-[#000000] text-white  transition-all duration-1000"
                >
                  Contact Us on Whatsapp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
