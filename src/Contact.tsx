import { IoChatboxEllipsesOutline, IoCallOutline } from "react-icons/io5";
import SignUpForm from "./components/SignUpForm";

const Contact = () => {
  return (
    <div className="bg-black font-sans p-20 px-40 w-full h-full flex sm:flex-row flex-col justify-between text-[#ffffff]">
      <div className="w-full max-w-md ">
        <div className="pb-20">
          <h1 className="font-bold text-2xl pb-4">
            Contact us, We're ready to Help!
          </h1>
          <p className="text-[#FFFFFF80] text-sm">
            We strive to provide you with the best experience and the best
            platform fo find your choice . <br />
            Post us any questions and we'll get back to you
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <IoChatboxEllipsesOutline className="self-start text-3xl pt-1" />
            <div className="">
              <div className="mb-2">
                <h2 className="text-xl">Chat with us!!</h2>
                <p className="text- sm text-[#FFFFFF80]">
                  Our friendly team is here to help
                </p>
              </div>
              <p className="text-[#5AA7A0]">to_let@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IoCallOutline className="self-start text-3xl pt-1" />
            <div className="">
              <div className="mb-2">
                <h2 className="text-xl">Call us ...</h2>
                <p className="text- sm text-[#FFFFFF80]">
                  Mon - fri 8 am to 10 pm
                </p>
              </div>
              <p className="text-[#5AA7A0]">+91 9876543210</p>
            </div>
          </div>
        </div>
      </div>
      <SignUpForm />
    </div>
  );
};

export default Contact;
