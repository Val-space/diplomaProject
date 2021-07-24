// import { easing } from "@material-ui/core";
import React, { useState } from "react";
import "./style/accordion.css";

function AccordionQuest() {
  const data = [
    {
      question: "What is cold brew coffee?",
      answer:
        "First of all, let’s dispel a myth. Cold Brew Coffee isn’t simply iced coffee i.e an espresso served over ice. It’s coffee that is brewed cold. Brewing the coffee involves steeping it in water for up to 24 hours. The result? A delicious coffee essence that can be served chilled. Cold-brew coffees have been gaining popularity over the past couple of years with high street chains starting to brew and serve coffee in this way. Brewing cold brings out flavours in conventional coffee and there are also beans particularly suited to cold brewing.",
    },
    {
      question: " What about milk and dairy alternatives in cold brew coffee?",
      answer:
        "You can, of course, add milk in the usual way to cold brew coffee. You could, for instance, use milk instead of water as your concentrate. Milk alternatives depending on the type can be watery (in our opinion, pea milk is the closest you will get to the stuff from cows), but here’s a little hack. Freeze some ice-cubes with your milk alternative (sweetened almond works well if you like it a little on the sweeter side) and add it to your cold brew but with less water.",
    },
    {
      question: "What is a coffee blend?",
      answer:
        "A coffee blend is two or more coffees that have been mixed together either before or after they are roasted. At RAVE we blend coffee to create unique flavours that you can't achieve from single-origin coffee alone. We blend to create coffee that will perform better across a variety of brewing methods. By making changes to the blend we can keep it consistent throughout the season as the coffee crop ages or changes year on year.",
    },
    {
      question: "Is there any caffeine in decaf coffee?",
      answer:
        "Many people assume that decaf coffee is caffeine free, however decaffeinated coffee under EU regulations, the caffeine content cannot exceed 0.1 per cent for roast and ground coffee. This % changes for soluble coffee and from drink to drink e.g.. espresso vs. French press.",
    },
    {
      question: "How are decaf coffee beans made??",
      answer:
        "There are two key ways to make decaf coffee. The first method involves the beans being soaked in Ethyl Acetate, a naturally occurring acid, which is the building block of vinegar. The second method is called The Swiss Water method. The beans are simply soaked in water and then strained through activated carbon dioxide which captures the caffeine.",
    },
  ];

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      <h2>Frequently asked questions</h2>
      <div className={"wrap-accordion"}>
        {data.map((i, index) => (
      
            <div key={i.question + index+ Math.random()} className={"accordion-inner"}>
              <div  
                className={"accordion-question"}
                onClick={() => toggle(index)}
              >
                <h3>{i.question}</h3>
                {clicked === index ? <span>-</span> : <span>+</span>}
              </div>

              <p
                className={
                  clicked === index ? "wrap-answer open" : "wrap-answer"
                }
              >
                {i.answer}
              </p>
            </div>
  
        ))}
      </div>
    </>
  );
}

export default AccordionQuest;
