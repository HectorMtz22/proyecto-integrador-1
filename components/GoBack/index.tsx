"use client";

import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export const GoBack = () => {
  const router = useRouter();
  return (
    <button style={styles.button} onClick={() => router.back()}>
      <FaArrowLeft />
    </button>
  );
};

const styles = {
  button: {
    width: "40px",
    height: "40px",
    marginRight: "2rem",
    padding: "0.5rem",
    color: "white",
    fontSize: "1.5rem",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "var(--primary-alt)",
    cursor: "pointer",
  },
};
