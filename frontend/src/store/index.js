import { proxy } from "valtio";

const state = proxy({
    intro: true,
    logoX: 0.03,
    logoY: 0.05,
    logoSize: 0.15,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./nexus.png",
    fullDecal: "./diffuseStreet.jpg",
});

export default state;
