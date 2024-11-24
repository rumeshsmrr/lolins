import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [borderColor, setBorderColor] = useState("gray");

  // Update cursor position on mouse move
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  // Handle hover scaling for buttons and links
  useEffect(() => {
    const handleHover = () => {
      document.querySelector(".custom-cursor").style.transform = "scale(1.2)";
      setBorderColor("#DA0E88");
    };
    const handleLeave = () => {
      document.querySelector(".custom-cursor").style.transform = "scale(1)";
      setBorderColor("gray");
    };

    document.querySelectorAll("button, a, li").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.querySelectorAll("button, a,li").forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  // Handle scale on click
  useEffect(() => {
    const handleClick = () => {
      const cursor = document.querySelector(".custom-cursor");
      cursor.style.transform = "scale(2)";
      setTimeout(() => {
        cursor.style.transform = "scale(1)";
      }, 200); // Reset scale after 200ms
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      className="custom-cursor bg-[#121212bf] border-[3px]"
      style={{
        position: "fixed",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        transition: "transform 0.2s ease",
        top: `${position.y}px`,
        left: `${position.x}px`,
        border: `3px solid ${borderColor}`,
      }}
    ></div>
  );
};

export default CustomCursor;
