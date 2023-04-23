import { useEffect, useState } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";

const ToTop = () => {
  const [showBackToTop, setShowBackTotop] = useState(false);
  const url = new URL(window.location.href);
  url.hash = "";

  window.onscroll = () => {
    if (window.scrollY > 100) {
      setShowBackTotop(true);
    } else {
      setShowBackTotop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
    window.history.pushState(null, "", url);
  };

  console.log(window.scrollY);

  return (
    <div>
      {showBackToTop && (
        <button className="totop" onClick={scrollToTop}>
          <HiChevronDoubleUp />
        </button>
      )}
    </div>
  );
};
export default ToTop;
