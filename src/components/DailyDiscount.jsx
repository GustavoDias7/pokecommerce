import React from "react";

const Circle = () => {
  return (
    <svg width="70" height="70" viewBox="25 25 50 50">
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke="#663399"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

const Unit = ({ unit }) => {
  return <span className="unit">{unit < 10 ? `0${unit}` : unit}</span>;
};

const Timer = () => {
  const [timer, setTimer] = React.useState(86400);
  const h = Math.floor(timer / 3600);
  const m = Math.floor((timer % 3600) / 60);
  const s = Math.floor((timer % 3600) % 60);

  React.useEffect(() => {
    let time = setTimeout(() => {
      timer !== 0 ? setTimer(timer - 1) : clearTimeout(time);
    }, 1000);
  }, [timer]);

  return (
    <div className="timer">
      <div>
        <Circle />
        <Unit unit={h} />
      </div>
      <div>
        <Circle />
        <Unit unit={m} />
      </div>
      <div>
        <Circle />
        <Unit unit={s} />
      </div>
    </div>
  );
};

const DailyDiscount = () => {
  return (
    <section className="daily-discount">
      <div className="container">
        <h2>Oferta especial do dia!!!</h2>
        <Timer />
      </div>
    </section>
  );
};

export default DailyDiscount;
