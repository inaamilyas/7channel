import React from "react";
import Cities from "../components/Cities";

function ContactUs() {
  return (
    <>
      <section className="py-8">
        <div className="w-[100%] h-[30vh] flex items-center justify-center bg-whoweare ">
          <h1 className="text-[50px] text-white font-extrabold ">Contact</h1>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto">
          <div className="w-[70%] h-full bg-gray-100 p-10 mx-auto">
            <h1 className="text-[50px] ">Drop Us a Line</h1>
            <p className="text-[20px] ">For any query and consultant</p>
            <form className="my-5">
              <div className="">
                <label htmlFor="" className="block w-full my-4">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="block w-full text-[20px] bg-transparent outlline-none focus:outline-none border-b-[1px] border-[black] "
                />
              </div>

              <div className="">
                <label htmlFor="" className="block w-full my-4">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="block w-full text-[20px] bg-transparent outlline-none focus:outline-none border-b-[1px] border-[black] "
                />
              </div>

              <div className="">
                <label htmlFor="" className="block w-full my-4">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="block w-full text-[20px] bg-transparent outlline-none focus:outline-none border-b-[1px] border-[black] "
                />
              </div>

              <div className="">
                <label htmlFor="" className="block w-full my-4">Your Message (<span>Optional</span>)</label>
                <textarea
                rows={4}
                  name="subject"
                  className="block w-full text-[20px] bg-transparent outlline-none focus:outline-none border-b-[1px] border-[black] "
                ></textarea>
              </div>

              <div className="flex items-center justify-between my-10">
                <button className="px-9 py-3 font-semibold bg-[black] text-white">Submit</button>
                <a href="#"  className="px-9 py-3 font-semibold bg-[black] text-white">Contact Us on Whatsapp</a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Cities/>
    </>
  );
}

export default ContactUs;
