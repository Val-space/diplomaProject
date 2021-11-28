import React from "react";
import "./style/aboutUs.css";

function AboutUs() {
  return (
    <main className={"about-page"}>
      <div className={"about-block"}>
        <p className={"about-block__paragraph"}>
          We have been the blender of choice for five-star hotels and Michelin
          chefs worldwide. And now, you.
        </p>
      </div>
      <div className={"about-section"}>
        <div className={"about-section__story"}>
          <div className={"about-section__head"}>Creating Your Cup of Tea</div>
          <p>
            We source our teas and botanicals from the world’s tier-1 gardens.
            The fuller the leaves, the more robust and complex the palate.
            Whether from a single-estate or a combination, we carefully source
            to curate blends that are the very best expression of terroir.
          </p>
          <p>
            We bring the finest teas, flowers and herbs to our blending center,
            and meticulously cup out each ingredient, searching for the ultimate
            palate and nuanced complexity.
          </p>
        </div>
        <div className={"about-section__img"}>
          <img
            src={
              "https://cdn.pixabay.com/photo/2015/12/04/14/43/coffee-1076582_1280.jpg"
            }
            alt="tea"
          ></img>
        </div>
      </div>
      <div className={"about-section"}>
        <div className={"about-section__story"} style={{ order: "2" }}>
          <div className={"about-section__head"}>We are a new coffee seed sown in the ground of connections</div>
          <p>
            Take two girls that once connected in a small polish town high
            school. During their time apart, each lived their own journey of
            life experiences and adventures that were strongly driven by
            passion. Parted, to be reconnected 16 years later in a coffee farm
            in a tiny Bolivian village.
          </p>
          <p>
            All the stars aligned for them to reconnect in this particular
            moment of their lives when their one and only priority was their
            values. More importantly, both were ready to connect, communicate
            and engage into something extraordinary. They were ready to create
            and share their ideas, experiences and passion with more
            understanding, transparency, ethical and environmental
            responsibility with all the connecting elements. Their new chapter
            has begun.
          </p>
        </div>
        <div className={"about-section__img"} style={{ order: "1" }}>
          <img
            src={
              "https://images.squarespace-cdn.com/content/v1/5ba2e76489c172738b212e2d/1540382910375-8WS0EO34LK1UEG0OBC82/SUSTAINABILITY.jpg?format=1500w"
            }
            alt="tea"
          ></img>
        </div>
      </div>
      <div className={"about-section"}>
        <div className={"about-section__story"}>
          <div className={"about-section__head"}>SUPERCRITICAL DECAFFEINATION PROCESS</div>
          <p>
            {" "}
            Our obsession with the details is evident in our decaffeination
            method.
          </p>
          <p>
            The Supercritical CO2 processing method is a display of our
            commitment to wellness and environmental responsibility. We invest
            to keep your tea pure by using a completely organic and
            chemical-free decaffeination method.
          </p>
          <p>
            Using pure water from the mountains of British Columbia to remove
            caffeine, the distinctive palate of the tea is preserved, without
            the use of any chemicals.
          </p>
        </div>
        <div className={"about-section__img"}>
          <img
            src={
              "https://i.shgcdn.com/fc3b968b-b60f-4a18-b908-75ea788be86d/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            }
            alt="tea"
          ></img>
        </div>
      </div>
    </main>
  );
}
export default AboutUs;
