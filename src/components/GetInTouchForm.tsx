import { FormEvent, useState } from "react";
import { useToastContext } from "../context/ToastContext";
import { FormApi } from "../api/FormApi";

export default function GetInTouchForm() {
  const { showToast } = useToastContext();
  //   const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({
    // topic: "",
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      //   topic: topic ? "" : "Please enter a topic.",
      name: name ? "" : "Please enter your name.",
      email: email ? "" : "Please enter your email.",
      message: message ? "" : "Please enter your message.",
      phone: phone ? "" : "Please enter your phone no.",
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

    const formData = { name, email, message, topic: "Get-In-Touch" };

    try {
      const data = await FormApi(formData);
      console.log("Success:", data);
      showToast({ message: "We will reach to you soon!", type: "SUCCESS" });
      //   setTopic("");
      setPhone("");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", (error as Error).message);
      showToast({ message: "Error sending issue!", type: "ERROR" });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <input
        id="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border rounded-md shadow-sm bg-transparent text-white"
      />
      {errors.name && (
        <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.name}</span>
      )}
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-4 py-2 border rounded-md shadow-sm bg-transparent text-white"
      />
      {errors.email && (
        <span style={{ color: "red", fontSize: "0.75rem" }}>
          {errors.email}
        </span>
      )}
      <input
        id="phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        className="w-full px-4 py-2 border rounded-md shadow-sm bg-transparent text-white"
      />
      {errors.phone && (
        <span style={{ color: "red", fontSize: "0.75rem" }}>
          {errors.phone}
        </span>
      )}
      <input
        id="message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        className="w-full px-4 py-2 border rounded-md shadow-sm bg-transparent text-white"
      />
      {errors.message && (
        <span style={{ color: "red", fontSize: "0.75rem" }}>
          {errors.message}
        </span>
      )}
      <button className="w-full px-4 py-2 font-bold text-yellow-600  rounded-md shadow-sm">
        Send Message →
      </button>
    </form>
  );
}
