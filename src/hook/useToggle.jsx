import { useEffect, useRef, useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  // add toggle
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (
      (toggleRef.current && !toggleRef.current.contains(e.target)) ||
      e.target.classList.contains("toggle-close")
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { isOpen, handleToggle, toggleRef };
};

export default useToggle;
