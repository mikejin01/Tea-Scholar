// Files live in /public and are copied to the build root. BASE_URL keeps paths
// correct whether served from "/" locally or "/<repo>/" on GitHub Pages.
export const asset = (file) => `${import.meta.env.BASE_URL}${file}`;

export const LOGO = asset("tea_scholar_logo_clear_background_tight.png");
export const HERO = asset("Hero.webp");

export const FEATURED = [
  {
    name: "Fresh Jasmine Milk Tea",
    description:
      "Our signature roasted oolong blend, perfectly balanced with creamy milk and golden boba.",
    price: "$6.50",
    image: asset("fresh jasmine milk tea.jpeg"),
  },
  {
    name: "Punch Lime Oolong Tea",
    description:
      "Light and fragrant jasmine green tea infused with fresh seasonal fruits and lychee jelly.",
    price: "$7.00",
    image: asset("punch lime oolong tea.jpeg"),
  },
  {
    name: "Pure Grape Slush",
    description:
      "Premium ceremonial grade matcha from Uji, Japan, whisked to perfection with oat milk.",
    price: "$7.50",
    image: asset("pure grape slush.jpeg"),
  },
  {
    name: "Premium Matcha Latte",
    description:
      "Rich brown sugar syrup glazed over slow-cooked boba, topped with our signature milk base.",
    price: "$6.75",
    image: asset("premium matcha latte.jpeg"),
  },
];

export const INSTAGRAM = [
  "612609625_17907836691319858_4184262237544626005_n.jpg",
  "626761177_17911316142319858_7662408334473942813_n.jpg",
  "628655034_17911954851319858_4255028520429670854_n.jpg",
  "630348839_17912791572319858_4924603556776850854_n.jpg",
  "641285343_18573077314006056_7640826146367603302_n.jpg",
  "657088235_17919054915319858_7466468363049382580_n.jpg",
  "670474931_1487516743020710_6465408331508411128_n.jpg",
  "694739913_18531875461073719_914860038204060226_n.jpg",
].map(asset);
