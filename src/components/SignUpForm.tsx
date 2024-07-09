import { FormEvent, useState } from "react";
import { useToastContext } from "../context/ToastContext";

const SignUpForm = () => {
  const { showToast } = useToastContext();
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      topic,
      name,
      email,
      message,
    };

    try {
      const response = await fetch("https://contact-us-backend-ufvx.onrender.com/contact-us/v1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      showToast({ message: "Issue sent!", type: "SUCCESS" });
      setTopic("");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      showToast({ message: "Error sending issue!", type: "ERROR" });
    }
  };

  return (
    <div className="text-[#FFFFFF80] max-w-md w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="topic">Topic</label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Select a topic"
            className="py-2 bg-transparent px-4 outline-none rounded-md border-2 border-[#FFFFFF80]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="johndoe"
            className="py-2 bg-transparent px-4 outline-none rounded-md border-2 border-[#FFFFFF80]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@provider.com"
            className="py-2 bg-transparent px-4 outline-none rounded-md border-2 border-[#FFFFFF80]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="py-2 bg-transparent px-4 outline-none rounded-md border-2 border-[#FFFFFF80]"
          />
        </div>
        <button
          className="bg-[#5AA7A0] rounded-md text-black align-middle p-3"
          type="submit"
        >
          Submit Query
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
