export const ApiCatalogTea = () => {
    let promise = new Promise((resolve, reject) => {
        resolve([{
                id: 101,
                section: 'tea',
                type: 'LOOSE LEAF TEA/GREEN',
                subsection: 'green',
                name: 'Floral Jasmine',
                size: '50 cups(100g)',
                ingredients: 'Green tea, jasmine blossoms',
                description: "Wafting currents caress downy cheeks while jasmine's floral poetry infuses the air. Cooing woos. Hearts flutter. Plumes parade. Love is all around.",
                price: 20,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W5006_loose_1200x.png?v=1608057971'
            },
            {
                id: 102,
                section: 'tea',
                subsection: 'green',
                type: 'LOOSE LEAF TEA/GREEN',
                name: 'Organic Pear Tree',
                size: '50 cups(100g)',
                ingredients: 'Organic green tea, natural pear flavor',
                description: "A sailor glides at blossoms bidding. A joyful soul with wings in song. Intoxicating notes in the air remind- life is the sweetest nectar of all.",
                price: 21,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W5018_loose_1200x.png?v=1614716608'
            },
            {
                id: 103,
                section: 'tea',
                subsection: 'green',
                type: 'LOOSE LEAF TEA/GREEN',
                name: 'Tencha Matcha',
                size: '50 cups(100g)',
                ingredients: 'Ceremonial 100% stone-ground Kyoto Tencha Matcha',
                description: 'Our Tencha Matcha tea is one of the healthiest teas to drink as part of a culturally-rich wellness ritual.',
                price: 35,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W5005_loose_1200x.png?v=1608065284'
            },
            {
                id: 104,
                section: 'tea',
                subsection: 'green',
                type: 'LOOSE LEAF TEA/GREEN',
                name: 'Organic Health & Well-Being',
                size: '50 cups(100g)',
                ingredients: 'Organic estate grade green tea',
                description: "Spring's herald brings good fortune, stands for fidelity, lives in freedom. Sky becons earth. Legs flight ready. Wings lift spirits.",
                price: 19,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W6003_loose_1200x.png?v=1623172808'
            },
            {
                id: 105,
                section: 'tea',
                subsection: 'herb',
                type: 'LOOSE LEAF TEA | HERBAL',
                name: 'Pantone Color of the Year',
                size: '50 cups(100g)',
                ingredients: 'Butterfly pea flower, lemon verbena, lemongrass, rose petal and Firmenich flavor',
                description: 'The official bespoke tea blend of the Pantone Color of the Year 2020, PANTONE 19-4052 Classic Blue. A wellness-oriented herbal berry mélange; the epitome of a perfect palate expression.',
                price: 44,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/CoY_loose_tea_cup_1500px_1200x.png?v=1575508184'
            },
            {
                id: 106,
                section: 'tea',
                subsection: 'green',
                type: 'LOOSE LEAF TEA | HERBAL',
                name: 'Mountain Berry',
                size: '50 cups(100g)',
                ingredients: 'Elderberry, hibiscus, currant, saskatoon berry, and natural flavors',
                description: 'Our loose leaf Mountain Berry herbal tea is a fruity superfood blend of Saskatoon (native to Canada) berries, currants, hibiscus and rosehips, sealed with sweetness.',
                price: 19,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W2130_loose_1200x.png?v=1604512768'
            },
            {
                id: 107,
                section: 'tea',
                subsection: 'herb',
                type: 'LOOSE LEAF TEA | HERBAL',
                name: 'Lemon Verbena',
                size: '50 cups(100g)',
                ingredients: 'Lemon verbena, lemongrass, natural lemon flavor, orange peels',
                description: 'Stirring memories of days past, wholesome and fresh, wafts of citrus invite. Radiant and unassuming, this earthly sunshine revives and refreshes, slicing through a cloudy day.',
                price: 49,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W2003_loose_1200x.png?v=1608056830'
            },
            {
                id: 108,
                section: 'tea',
                subsection: 'herb',
                type: 'LOOSE LEAF TEA | HERBAL',
                name: 'Organic Ashwagandha Beetroot Boost',
                size: '50 cups(100g)',
                ingredients: 'Organic beetroot, organic ginger, organic Ceylon cinnamon, organic ashwagandha, organic cardamom seed',
                description: 'Kickstart your day with calm and focused energy. ',
                price: 22,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W5009FZ-TheElixir-Beetroot-Ginger_a55aff14-d4ea-41af-a926-c831c71804e2_1200x.png?v=1613756800'
            },
            {
                id: 109,
                section: 'tea',
                subsection: 'herb',
                type: 'LOOSE LEAF TEA | HERBAL',
                name: 'Nobo Whole Fruit',
                size: '50 cups(100g)',
                ingredients: 'Blackberries, raspberries, strawberries, hibiscus, rosehips, apple, pineapple, papaya, and natural flavor',
                description: 'Puffy clouds dot azure skies. Sun ripe and juicy, wise eyes pick the sweetest berries. A delicate balance, long forged by nature, evokes carefree, childhood days.',
                price: 19,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W2070_loose_1200x.png?v=1608684544'
            },
            {
                id: 110,
                section: 'tea',
                subsection: 'herb',
                type: 'LOOSE LEAF TEA | HERBAL',
                name: 'Organic Golden Turmeric Chai',
                size: '50 cups(100g)',
                ingredients: 'Organic turmeric, organic Ceylon cinnamon, organic cardamom seed, organic ginger, organic nutmeg',
                description: 'Tension-reliever, reinvigorating the body for a restful downtime.',
                price: 22,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W5011T-Golden-Turmeric-Chai_1200x.png?v=1602276801'
            },
            {
                id: 111,
                section: 'tea',
                subsection: 'black',
                type: 'LOOSE LEAF TEA | BLACK',
                name: 'Irish Breakfast',
                size: '50 cups(100g)',
                ingredients: 'Black tea',
                description: 'The teaspoon will stand on guard for thee in the cup of this traditional, robust favorite!',
                price: 22,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W3507_loose_4821d4ec-5e54-4847-aa32-f2d4b7611b5d_1200x.png?v=1591235672'
            },
            {
                id: 112,
                section: 'tea',
                subsection: 'black',
                type: 'LOOSE LEAF TEA | BLACK',
                name: 'Cassis',
                size: '50 cups(100g)',
                ingredients: 'Black tea, natural blackcurrant flavor',
                description: 'Shiny and glossy, rich purple jewels dangle bundled dark against deep verdant greenery. Plump packets aromatically scent the airs, embracing all near.',
                price: 23,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W2011_loose_1200x.png?v=1608064541'
            },
            {
                id: 113,
                section: 'tea',
                subsection: 'black',
                type: 'LOOSE LEAF TEA | BLACK',
                name: "Mad Hatter's Tea Party",
                size: '50 cups(100g)',
                ingredients: 'Black tea, essential oils of natural fruit, passion fruit, vanilla, and marigold flowers',
                description: "Eclectic cups, chairs and companions conduct controversial conversations. Flights of fancy float amongst decadent desserts while riddles remain unanswered a Mad Hatter's dream.",
                price: 23,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W5509_loose_1200x.png?v=1622560374'
            },
            {
                id: 114,
                section: 'tea',
                subsection: 'black',
                type: 'LOOSE LEAF TEA | BLACK',
                name: 'Lavender Earl Grey',
                size: '50 cups(100g)',
                ingredients: 'Estate black tea, organic lavender, rose petals, and natural bergamot oil',
                description: 'Wings flutter like excited hearts. Wafts of wind float delicate iridescence to playful heights. Why stay earthbound when the air is filled with such joy.',
                price: 22,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0251/8545/2084/products/W2000_loose_1200x.png?v=1613756432'
            }


        ]);
    })
    return promise;
}






export const ApiCatalogCoffee = () => {
    let promise = new Promise((resolve, reject) => {
        resolve([{
                id: 301,
                section: 'coffee',
                type: 'COFFEE BEAN/BLENDS',
                subsection: 'bean',
                name: 'Fudge Blend No. 5',
                size: '250g',
                ingredients: 'Coffe beans',
                description: "For maximum fudge, we recommend a flat white or cappuccino made with whole milk. This coffee as milk-based espresso leaves a lovely fudgy aftertaste that will leave you wanting to lick the cup! ",
                price: 6.25,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/Fudge_RoastLevel_2000x.jpg?v=1610975458'
            },
            {
                id: 302,
                section: 'coffee',
                type: 'COFFEE BEAN/BLENDS',
                subsection: 'bean',
                name: 'Fudge Blend No. 5',
                size: '250g',
                ingredients: 'Coffe beans',
                description: "For maximum fudge, we recommend a flat white or cappuccino made with whole milk. This coffee as milk-based espresso leaves a lovely fudgy aftertaste that will leave you wanting to lick the cup! ",
                price: 6.25,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/Fudge_RoastLevel_2000x.jpg?v=1610975458'
            },
            {
                id: 303,
                section: 'coffee',
                type: 'COFFEE BEAN/BLENDS',
                subsection: 'bean',
                name: 'Fudge Blend No. 5',
                size: '250g',
                ingredients: 'Coffe beans',
                description: "For maximum fudge, we recommend a flat white or cappuccino made with whole milk. This coffee as milk-based espresso leaves a lovely fudgy aftertaste that will leave you wanting to lick the cup! ",
                price: 6.25,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/Fudge_RoastLevel_2000x.jpg?v=1610975458'
            },
            {
                id: 304,
                section: 'coffee',
                type: 'COFFEE BEANS/DECAFF',
                subsection: 'decaff',
                name: 'Colombia Villamaria Sugarcane Decaf No 58',
                size: '250g',
                ingredients: 'Coffe beans',
                description: "A natural process decaf that actually delivers on flavour!  This coffee is grown in Villamaria, Caldas (another of the Red Associations we support with Raw Materials), and processed as a natural before being sent up the road to Manizales for decaffeination via the Sugarcane process.",
                price: 10.25,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/Colombia-Villamaria-Sugarcane-Decaf_2000x.jpg?v=1613137016'
            },
            {
                id: 305,
                section: 'coffee',
                type: 'COFFEE BEANS/DECAFF',
                subsection: 'decaff',
                name: 'Swiss Water Decaf No 11',
                size: '250g',
                ingredients: 'Coffe beans',
                description: "Swiss water process decaf coffee is not only natural but delicious and removes 99.9% of the caffeine without chemicals. The natural water processed decaf coffee makes the best-tasting coffee and preserves the flavour whilst removing only the caffeine. ",
                price: 7.25,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/SwissWater_RoastLevel_800x.jpg?v=1610975566'
            },
            {
                id: 306,
                section: 'coffee',
                type: 'COFFEE BEANS/COLD',
                subsection: 'decaff',
                name: 'Colombia El Carmen Sugarcane Decaf No. 77',
                size: '250g',
                ingredients: 'Coffe beans',
                description: "Our Colombian El Carmen Sugar Cane Decaf retains sweetness and the original character of the beans. Due to being processed at origin it also reduces the carbon footprint over other decaffeination processes. This coffee is also part of our flagship sustainability program.",
                price: 6.15,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/ElCarmenSugarcaneDecaf_Roast_2000x.jpg?v=1612947863'
            },
            {
                id: 307,
                section: 'coffee',
                type: 'COFFEE BEANS/COLD',
                subsection: 'cold-brew',
                name: 'Cold Brew Ground Coffee No 9',
                size: '300g',
                ingredients: 'Coffe beans',
                description: "This 300g pack allows you to brew 3 batches of concentrate making approximately 3 litres of ice coffee in total.",
                price: 7.15,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/ColdBrew_800x.jpg?v=1610534848'
            },

            {
                id: 308,
                section: 'coffee',
                type: 'COFFEE BEANS/DECAFF',
                subsection: 'decaff',
                name: 'Swiss Water Decaf No 11',
                size: '300g',
                ingredients: 'Coffe beans',
                description: "We roast our decaffeinated coffee beans with the same love and attention as all our other beans. Now you really can drink coffee all day long!",
                price: 7.25,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/SwissWater_RoastLevel_2000x.jpg?v=1610975566'
            },
            {
                id: 309,
                section: 'coffee',
                type: 'COFFEE BEANS/DECAFF',
                subsection: 'decaff',
                name: 'Colombia Villamaria Sugarcane Decaf No 58',
                size: '300g',
                ingredients: 'Coffe beans',
                description: "A natural process decaf that actually delivers on flavour!  This coffee is grown in Villamaria, Caldas (another of the Red Associations we support with Raw Materials), and processed as a natural before being sent up the road to Manizales for decaffeination via the Sugarcane process.",
                price: 7.15,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/No58_VillamariaDecaf_250g_2000x.jpg?v=1613137016'
            },
            {
                id: 310,
                section: 'coffee',
                type: 'COFFEE BEANS/DECAFF',
                subsection: 'decaff',
                name: 'Swiss Water Decaf - 50 pods',
                size: '300g',
                ingredients: 'Coffe beans',
                description: "This Swiss Water Decaf from Colombia is deliciously smooth. We roast our decaffeinated coffee beans with the same love and attention as all our other beans. Now you really can drink coffee all day long!",
                price: 7.15,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/ColdBrew_800x.jpg?v=1610534848'
            }, {
                id: 311,
                section: 'coffee',
                type: 'COFFEE BEANS/GREEN',
                subsection: 'green',
                name: 'Guatemala Bosques de San Francisco Green Coffee Beans',
                size: '300g',
                ingredients: 'Coffe beans',
                description: "A selection of our most versatile green coffee range, bundled together, perfect for the home roasters amongst you. This selection is great for filter or espresso or why not blend to make your coffee just the way you enjoy it.  See our blending suggestions below",
                price: 17.15,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/GREEN_GUAT_800x.jpg?v=1611664185'
            },
            {
                id: 312,
                section: 'coffee',
                type: 'COFFEE BEANS/GREEN',
                subsection: 'green',
                name: 'Indonesia U Tani Gayo Green Coffee Beans No 100',
                size: '300g',
                ingredients: 'Coffe beans',
                description: "This Swiss Water Decaf from Colombia is deliciously smooth. We roast our decaffeinated coffee beans with the same love and attention as all our other beans. Now you really can drink coffee all day long!",
                price: 7.15,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/No100_IndonesiaUTaniGayo_GREEN_2000x.jpg?v=1607775096'
            },
            {
                id: 313,
                section: 'coffee',
                type: 'COFFEE BEANS/GREEN',
                subsection: 'green decaff',
                name: 'Colombia El Carmen (Suarez Project) DECAF Green Coffee Beans',
                size: '300g',
                ingredients: 'Coffe beans',
                description: "These are unroasted coffee beans suitable for home roasting. Our best selling single origin and our flagship sustainability project now as Decaf green beans!!",
                price: 7.15,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/GREEN_ElCarmen_2000x.jpg?v=1611664144'
            },
            {
                id: 314,
                section: 'coffee',
                type: 'COFFEE BEANS/GREEN',
                subsection: 'green',
                name: 'Indian Monsooned Malabar Green Coffee Beans',
                size: '300g',
                ingredients: 'Coffe beans',
                description: "This Swiss Water Decaf from Colombia is deliciously smooth. We roast our decaffeinated coffee beans with the same love and attention as all our other beans. Now you really can drink coffee all day long!",
                price: 7.15,
                imgSrc: 'https://cdn.shopify.com/s/files/1/0390/4361/products/Green_IMM_2000x.jpg?v=1613575022'
            },


        ]);
    })
    return promise;
}