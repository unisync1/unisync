import React from "react";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

export const mainMenuItems = [
  {
    path: "/services",
    title: "services",
  },
];

export const socialMenuItems = [
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/company/analogica-software-dev-pvt-ltd/?viewAsMember=true",
    name: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/analogica.in/",
    name: "Instagram",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/analogicaXpress",
    name: "Twitter",
  },
];

export const footerMenuItems = [

];
