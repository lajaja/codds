// import Merki from "./components/Merki.jsx";
import Radio, { RadioGroup } from "./components/Radio.jsx";
import React, { useState } from "react";

function App() {
  const [plan, setPlan] = useState("");
  return (
    <>
      {/* <section className="w-4/5 mx-auto max-w-5xl container flex items-center flex-col drop-shadow-lg">
        <Merki />
      </section> */}
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold tracking-tight">Choose Your Plan</h2>
        <hr className="my-3 w-1/3" />
        <RadioGroup value={plan} onChange={(e) => setPlan(e.target.value)}>
          <div className="flex gap-4 justify-center flex-col">
            <Radio value="free">
              <Plan
                icon={"🏐"}
                title="Free"
                feautures={["SD (480p)", "Mobile", "Ads"]}
                price={0}
              />
            </Radio>
            <Radio value="basic">
              <Plan
                icon={"😎"}
                title="Basic"
                feautures={["HD (720p)", "Tablet", "No Ads"]}
                price={9.99}
              />
            </Radio>
            <Radio value="standard">
              <Plan
                icon={"🤩"}
                title="Standard"
                feautures={["FHD (1080p)", "Laptop", "No Ads"]}
                price={19.99}
              />
            </Radio>
            <Radio value="premium">
              <Plan
                icon={"🔥"}
                title="Premium"
                feautures={["UHD (4K)", "Smart TV", "No Ads"]}
                price={29.99}
              />
            </Radio>
          </div>
        </RadioGroup>
        <hr className="my-3 w-1/3" />
        <button
          className={`flex gap-4 items-center px-6 py-3 rounded-lg
          bg-violet-800 hover:bg-violet-700
          font-semibold text-lg text-white
        `}
        >
          Processed with {plan} plan &rarr;
        </button>
      </main>
    </>
  );
}

function Plan({ icon, title, feautures, price }) {
  return (
    <div className="flex gap-4 items-center">
      {icon}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{feautures.join(" · ")}</p>
      </div>
      <span className="ml-auto font-medium">${price}</span>
    </div>
  );
}

export default App;
