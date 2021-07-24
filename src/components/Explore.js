import React, { useState } from "react";
import "./style/explore.css";

function Explore() {
  const exploreAllInfo = [
    {
      value: "0",
      name: "Green Tea",
      img:
        "https://cdn.shopify.com/s/files/1/0251/8545/2084/files/green-Tea_1000x.png?v=1623793395",
      info:
        "Typically cultivated in China, Taiwan, and Japan, green tea is an un-oxidized tea  that has a more subtle, delicate flavor than its oxidized counterparts, with lower caffeine levels. It is also believed to have enhanced medicinal benefits in comparison to oxidized teas because the leaves retain a higher concentration of natural vitamins and polyphenols. Known as a health-boosting beverage, green tea contains an abundance of minerals (iron, sodium, potassium) and vitamins (carotene, A, D, B1, B2, C).",
    },
    {
      value: "1",
      img:
        "https://cdn.shopify.com/s/files/1/0251/8545/2084/files/White-Tea_1000x.png?v=1623793295",
      name: "White Tea",
      info:
        "Named for the silver downy hairs that cover the young unopened bud, white teas are highly prized and consist of only the top buds and leaves. Originally harvested from wild tea bushes in China’s Northern Fujian province, it was discovered by ancient tea connoisseurs who were always on the lookout for the ultimate tea: an immature bud with delicate flavor. We simply steam or de-enzyme white tea after picking, producing less tannins when steeped. As white tea is closest to its natural state, it has the most antioxidants of the tea varieties. ",
    },
    {
      value: "2",
      img:
        "https://cdn.shopify.com/s/files/1/0251/8545/2084/files/Matcha_1000x.png?v=1623793426",
      name: "Matcha",
      info:
        "Matcha was discovered over 900 years ago, known worldwide as a go-to wellness solution, and is a  powdered green tea used in Japan’s formal tea ceremony, as well as for everyday drinking pleasure, and as a flavorful addition to countless recipes. Prized for its high concentration of nutrients as well as its distinctive flavor, numerous medical studies point to Matcha’s beneficial properties: high in nutrients such as polyphenols, L-theanine, minerals, vitamins, fibres, potassium, and chlorophyll. Matcha provides a steady long-lasting boost of energy, expanded awareness, and maximum antioxidants without the unwanted side effects typical to coffee or a sugar high. ",
    },

    {
      value: "3",
      img:
        "https://cdn.shopify.com/s/files/1/0251/8545/2084/files/oolong_1000x.png?v=1623794416",
      name: "Oolong",
      info:
        "There are two main types of oolong: the Chinese one and the Taiwanese variant (Formosa). Oolong from China is oxidized only 12–20%, resulting in a pale yellow liquor with a distinct fresh taste. Formosa oolong is 60% oxidized and known for its golden liquor and exquisite floral aroma. As a semi-oxidized tea, in our blending process it undergoes the same treatment as black tea but for less time and where only the edges of the leaves are rubbed. During our infusion, oolong leaves turn bright green in the center and red towards the edges. Especially known for its digestive properties, Oolong is a great choice after any meal. ",
    },

    {
      value: "4",
      img:
        "https://cdn.shopify.com/s/files/1/0251/8545/2084/files/Training-Portal---What-is-Tea_1000x.png?v=1623794501",
      name: "Black Tea",
      info:
        "Black tea is grown in China, India, Sri Lanka, and Africa, and is the most common type of tea consumed in the West. The leaves range in color from brown to black, often with golden or silver tips. The bright copper liquor has a full-bodied aroma, and a flavor ranging from malty to flowery. Its color and character come from the processing of the leaves. Once we pick the leaves, they are oxidized, resulting in higher levels of soluble caffeine and tannins.  Black tea is a healthy companion, containing antioxidant polyphenols, vitamins and essential oils which aid in digestion. ",
    },
  ];
  const [filteredItem, setFilteredItem] = useState({
    value: "0",
    name: "Green Tea",
    img:
      "https://cdn.shopify.com/s/files/1/0251/8545/2084/files/green-Tea_1000x.png?v=1623793395",
    info:
      "Typically cultivated in China, Taiwan, and Japan, green tea is an un-oxidized tea  that has a more subtle, delicate flavor than its oxidized counterparts, with lower caffeine levels. It is also believed to have enhanced medicinal benefits in comparison to oxidized teas because the leaves retain a higher concentration of natural vitamins and polyphenols. Known as a health-boosting beverage, green tea contains an abundance of minerals (iron, sodium, potassium) and vitamins (carotene, A, D, B1, B2, C).",
  });

  const showItem = (e) => {
    setFilteredItem(
      exploreAllInfo.filter((el) => el.value === e.target.value)[0]
    );
  };

  // console.log(filteredItem);
  return (
    <>
      <div className={"main-container"}>
        <div className={"main-content"}>
          <h2 className={"main-content__title"}>What Is Tea?</h2>
          <div className={"main-content__subtitle"}>
            WE RELENTLESSLY PURSUE ONLY THOSE LEAVES OF EXTRAORDINARY TASTE.
            USING A VARIETY OF KEY METRICS, WE ENSURE THAT WE CREATE ONLY THE
            FINEST CUP.
          </div>
          <div className={"explore-flex"}>
            <div className={"explore-column"}>
              <div>
                <img
                  style={{ maxWidth: "100%" }}
                  src="https://cdn.shopify.com/s/files/1/0251/8545/2084/files/WhatIsTea_1_1200x_afc2d7a7-1c1f-45e7-8f77-78fd6729bc14_500x.jpg?v=1623792848"
                  alt="tea"
                ></img>
              </div>
              <div className={"explore-column__name"}>Camellia Sinensis</div>
              <p>
                All tea, whether it be green, black, white or oolong, comes from
                the same plant, the evergreen shrub Camellia Sinensis. As
                blenders, the method of harvesting and treatment contribute to
                each tea’s distinctive signature. At TEALEAVES, only the best
                teas are picked entirely by hand, and only the bud and top one
                or two leaves are plucked. Once picked, our leaves are dealt
                with differently depending on the type of tea desired.
                Oxidization (also know as the Fermentation Process) is the
                underlying process that gives green, black, and oolong teas
                their individual characteristics.
              </p>
            </div>
            <div className={"explore-column"}>
              <div>
                <img
                  style={{ maxWidth: "100%" }}
                  src="https://cdn.shopify.com/s/files/1/0251/8545/2084/files/WhatIsTea_2_1200x_db4aca13-72e4-4258-83b4-83aff5302158_500x.jpg?v=1623792899"
                  alt="tea"
                ></img>
              </div>
              <div className={"explore-column__name"}>Terroir</div>
              <p>
                As with wine, a tea’s character is determined greatly by subtle
                differences in soil, climate, and elevation. Cool nights, dry
                weather, and bright sunny days combined, provide the optimal
                conditions for growing tea. This type of climate forces the tea
                bush to expend all its energy in the growth of new shoots. Our
                finest teas come from gardens of high elevation, where cooler
                temperatures slow leaf growth producing leaves with a more
                concentrated flavor and aroma.
              </p>
            </div>
            <div className={"explore-column"}>
              <div>
                <img
                  style={{ maxWidth: "100%" }}
                  src="https://cdn.shopify.com/s/files/1/0251/8545/2084/files/WhatIsTea_3_1200x_2b63b3ca-41a0-4328-82ec-2aa770476bd9_500x.jpg?v=1623792981"
                  alt="tea"
                ></img>
              </div>
              <div className={"explore-column__name"}>Fermantation</div>
              <p>
                Oxidation (also known as fermentation) is the natural process
                that alters the chemical structure of the leaf, allowing key
                flavor characteristics to emerge. Our rolling process releases
                the enzymes naturally occurring in the tea leaves. These
                enzymes, which have been released by the rolling, react with the
                air.Temperature, humidity, and time are the factors that must be
                controlled during this process. As blenders, varying the length
                of time is one way to change the character of the tea. The
                longer the leaf oxidizes the softer its taste, the deeper its
                color and the higher its caffeine
              </p>
            </div>
          </div>
          <section>
            <h3>Learn More About Our Tea Varietals</h3>
            <div className={"WhatIsTea__Nav"}>
              <button
                type="button"
                value="0"
                onClick={(e) => {
                  showItem(e);
                }}
              >
                green tea
              </button>
              <button
                type="button"
                value="1"
                onClick={(e) => {
                  showItem(e);
                }}
              >
                white tea
              </button>
              <button
                type="button"
                value="2"
                onClick={(e) => {
                  showItem(e);
                }}
              >
                Matcha
              </button>
              <button
                type="button"
                value="3"
                onClick={(e) => {
                  showItem(e);
                }}
              >
                Oolong
              </button>
              <button
                type="button"
                value="4"
                onClick={(e) => {
                  showItem(e);
                }}
              >
                Black tea
              </button>
            </div>
            <div className={"WhatIsTea__ListItem"}>
              <div className={"WhatIsTea__ListItem__image"}>
                <img src={filteredItem.img} alt="tea"></img>
              </div>
              <div className={"WhatIsTea__ListItem__info"}>
                <h2>{filteredItem.name}</h2>
                <p>{filteredItem.info}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Explore;
