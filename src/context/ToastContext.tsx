import React, { useContext,useState } from "react";
import Toast from "../components/Toast";

type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

type ToastContext = {
  showToast: (toastMessage: ToastMessage) => void;
};

const ToastContext = React.createContext<ToastContext | undefined>(undefined);

export const ToastContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);

  return (
    <ToastContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </ToastContext.Provider>
  );
};  

export const useToastContext = () => {
  const context = useContext(ToastContext);
  return context as ToastContext;
};
