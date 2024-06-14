import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

function MarketingApp() {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
}
export default MarketingApp;
