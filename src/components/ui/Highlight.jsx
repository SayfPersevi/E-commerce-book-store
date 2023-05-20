import React from "react";

function Highlight({ icon, subTitle, description }) {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 className="highlight__subtitle">{subTitle}</h3>
      <p className="highlight__description">{description}</p>
    </div>
  );
}

export default Highlight;
