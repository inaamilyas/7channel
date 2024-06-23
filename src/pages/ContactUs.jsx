import React, { useEffect } from "react";
import ContactForm from "../components/home/ContactForm";
import Loader from "../components/loader/Loader";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <section className="">
        <div className="w-[100%] h-[calc(100vh-88px)] flex items-center justify-center bg-whoweare ">
          <h1 className="text-[50px] text-white font-extrabold ">Contact</h1>
        </div>
      </section> */}
      
      <ContactForm />
    </>
  );
}

export default ContactUs;
