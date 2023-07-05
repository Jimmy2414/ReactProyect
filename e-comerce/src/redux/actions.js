import { GET_ELECTRO } from "./types";
const dataElectroTest = [
  {
    name: "heladera",
    id: 1,
    image: "https://www.torca.com.ar/images/58554-1.jpg",
  },
  {
    name: "batidora",
    id: 2,
    image:
      "https://images.fravega.com/f1000/97c9030e15927e70802ba8778d607f27.jpg",
  },
  {
    name: "lavarropas",
    id: 3,
    image:
      "https://www.lg.com/ar/images/lavarropas/MD05962336/gallery/medium01.jpg",
  },
  {
    name: "cafetera",
    id: 4,
    image:
      "https://osterla.vteximg.com.br/arquivos/ids/157869-700-700/BVSTDC05-1.jpg?v=637449510405930000/",
  },
  {
    name: "microondas",
    id: 5,
    image:
      "https://www.cetrogar.com.ar/media/catalog/product/l/b/lb3247_1_.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds",
  },
];

export const getElectro = () => {
  return {
    type: GET_ELECTRO,
    payload: dataElectroTest,
  };
};
