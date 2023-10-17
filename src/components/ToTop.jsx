import { useEffect, useState } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";
import { animateScroll } from "react-scroll";

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

  const handleScrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div className="totop">
      {showBackToTop && (
        <button className="totop-btn" onClick={handleScrollToTop}>
          <HiChevronDoubleUp />
        </button>
      )}
    </div>
  );
};
export default ToTop;
