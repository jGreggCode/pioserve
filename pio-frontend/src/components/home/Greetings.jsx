import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Greetings = () => {
  const userData = useSelector((state) => state.user);
  const [dateTime, setDateTime] = useState(new Date());
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Serve with a smile!",
    "You’ve got this!",
    "Keep the good vibes flowing!",
    "Make every plate count!",
    "A happy customer starts with you!",
    "Teamwork makes the dream work!",
    "Serve with heart, lead with passion.",
    "Every meal is a memory!",
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 18) return "Good afternoon";
    return "Good evening";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); // every 5 seconds

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(
      2,
      "0"
    )}, ${date.getFullYear()}`;
  };

  const formatTime = (date) =>
    `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

  return (
    <div className="flex justify-between items-center px-8 mt-5">
      <div>
        <h1 className="text-[#f5f5f5] text-3xl font-semibold tracking-wide">
          {getGreeting()}, {userData.name || "TEST USER"}!
        </h1>
        <p className="text-[#ababab] text-sm">{messages[messageIndex]}</p>
      </div>
      <div className="">
        <h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]">
          {formatTime(dateTime)}
        </h1>
        <p className="text-[#ababab] text-sm">{formatDate(dateTime)}</p>
      </div>
    </div>
  );
};

export default Greetings;
