import {
    move,
    fileIcon,
    ai,
    logoShirt,
    stylishShirt,
    download,
    view,
} from "../assets";

export const EditorTabs = [
    {
        name: "colorpicker",
        icon: move,
    },
    {
        name: "filepicker",
        icon: fileIcon,
    },
    {
        name: "aipicker",
        icon: ai,
    },
    {
        name: "download",
        icon: download,
    },
];

export const FilterTabs = [
    {
        name: "logoShirt",
        icon: logoShirt,
    },
    {
        name: "stylishShirt",
        icon: stylishShirt,
    },
    {
        name:"showsimilar",
        icon:  view
    }
];

export const DecalTypes = {
    logo: {
        stateProperty: "logoDecal",
        filterTab: "logoShirt",
    },
    full: {
        stateProperty: "fullDecal",
        filterTab: "stylishShirt",
    },
};
