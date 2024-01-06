import PageTransitionEffect from "@/components/PageTransitionEffect";
import React from "react";

const Contact = () => {
  return (
    <>
      <PageTransitionEffect />

      <p className="max-w-3xl mx-auto flex justify-center text-white text-4xl text-center font-josefin my-10 px-5">
        Thanks for taking the time to reach out. How can I help you today?
      </p>

      <form className="max-w-3xl flex flex-col gap-4 mx-auto text-white font-josefin font-semibold px-5">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-full">
            <label>Name</label>
            <input
              className="bg-white/30 border rounded-2xl outline-none px-2 py-3"
              required={true}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Email</label>
            <input
              className="bg-white/30 border rounded-2xl outline-none px-2 py-3"
              required={true}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Message</label>
          <textarea
            className="bg-white/30 border rounded-2xl outline-none px-2 py-3"
            rows={5}
            required={true}
          />
        </div>
        <button class="text-white hover:text-white border hover:border-black hover:bg-black duration-500 w-[150px] py-3 rounded-2xl">
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
