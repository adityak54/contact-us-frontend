// api.tsx (or api.js if using JavaScript)
const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || "";
export const FormApi = async (formData: {
  topic: string;
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/contact-us/v1`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error sending issue: ${(error as Error).message}`);
  }
};
