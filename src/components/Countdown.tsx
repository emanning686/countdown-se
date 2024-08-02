type props = { title: string; count: number };

function Countdown({ title, count }: props) {
  return (
    <div className="flex flex-col items-center justify-center font-inter">
      <h1 className="gradient-text-3 animate-gradient1 pb-2 text-3xl font-medium md:text-6xl">
        {title}
      </h1>
      <h1 className="gradient-text-2 animate-gradient1 text-4xl font-semibold md:text-7xl">
        {count}
      </h1>
    </div>
  );
}

export default Countdown;
