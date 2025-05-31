import { useState, useEffect } from "react";

const getGreeting = () => {
  const hour = Number(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kuala_Lumpur",
      hour: "numeric",
      hour12: false,
    })
  );

  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

export default function useGreeting() {
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return greeting;
}
