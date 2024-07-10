import { FormEvent, useState } from "react";
import { useToastContext } from "../context/ToastContext";

import { FormApi } from "../api/FormApi.tsx";

const SignUpForm = () => {
  const { showToast } = useToastContext();
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    topic: "",
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      topic: topic ? "" : "Please enter a topic.",
      name: name ? "" : "Please enter your name.",
      email: email ? "" : "Please enter your email.",
      message: message ? "" : "Please enter your message.",
    };

    setErrors(newErrors);
    Object.values(newErrors).forEach((error) => {
      if (error) {
        valid = false;
      }
    });
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = { topic, name, email, message };

    try {
      const data = await FormApi(formData);
      console.log("Success:", data);
      showToast({ message: "Issue sent!", type: "SUCCESS" });
      setTopic("");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", (error as Error).message);
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
            className="py-2 bg-transparent px-4 outline-none rounded-md border-2 border-[#FFFFFF80] text-white" // Changed text color to white
          />
          {errors.topic && (
            <span style={{ color: "red", fontSize: "0.75rem" }}>
              {errors.topic}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="johndoe"
            className="py-2 bg-transparent px-4 outline-none rounded-md border-2 border-[#FFFFFF80] text-white" // Changed text color to white
          />
          {errors.name && (
            <span style={{ color: "red", fontSize: "0.75rem" }}>
              {errors.name}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@provider.com"
            className="py-2 bg-transparent px-4 outline-none rounded-md border-2 border-[#FFFFFF80] text-white" // Changed text color to white
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "0.75rem" }}>
              {errors.email}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="py-2 bg-transparent px-4 outline-none rounded-md border-2 border-[#FFFFFF80] text-white" // Changed text color to white
          />
          {errors.message && (
            <span style={{ color: "red", fontSize: "0.75rem" }}>
              {errors.message}
            </span>
          )}
        </div>
        <button
          className="bg-[#5AA7A0] rounded-md text-black align-middle p-3"
          type="submit"
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
