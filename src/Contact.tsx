import { IoChatboxEllipsesOutline, IoCallOutline } from "react-icons/io5";
import SignUpForm from "./components/SignUpForm";

const Contact = () => {
  return (
    <div className="bg-black font-sans p-6 sm:p-10 md:p-20 sm:px-10 md:px-20 lg:px-40 w-full h-full flex flex-col sm:flex-row justify-between text-white">
      <div className="w-full max-w-md mb-10 sm:mb-0">
        <div className="pb-10 sm:pb-20">
          <h1 className="font-bold text-xl sm:text-2xl pb-4">
            Contact us, We're ready to Help!
          </h1>
          <p className="text-white text-opacity-80 text-sm">
            We strive to provide you with the best experience and the best
            platform to find your choice. <br />
            Post us any questions and we'll get back to you.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-2">
            <IoChatboxEllipsesOutline className="text-3xl pt-1" />
            <div>
              <div className="mb-2">
                <h2 className="text-lg sm:text-xl">Chat with us!!</h2>
                <p className="text-sm text-white text-opacity-80">
                  Our friendly team is here to help
                </p>
              </div>
              <p className="text-[#5AA7A0]">to_let@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <IoCallOutline className="text-3xl pt-1" />
            <div>
              <div className="mb-2">
                <h2 className="text-lg sm:text-xl">Call us ...</h2>
                <p className="text-sm text-white text-opacity-80">
                  Mon - Fri 8 am to 10 pm
                </p>
              </div>
              <p className="text-[#5AA7A0]">+91 9876543210</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Contact;