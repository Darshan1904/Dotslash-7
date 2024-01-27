import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./diffuseStreet.jpg",
    fullDecal: "./diffuseStreet.jpg",
});

export default state;
