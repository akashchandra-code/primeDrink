// src/data/products.js

// Hydration drink images
import icePopImg from "../assets/productImages/ice.png";
import blueRaspberryImg from "../assets/productImages/blue.png";
import tropicalPunchImg from "../assets/productImages/red.png";
import lemonLimeImg from "../assets/productImages/green.png";
import metamoonImg from "../assets/productImages/moon.png";
import strawberryWatermelonImg from "../assets/productImages/pink.png";
import grapeImg from "../assets/productImages/purple-Photoroom.png";

// Stick images
import iceStickImg from "../assets/productImages/ice stick-Photoroom.png";
import redStickImg from "../assets/productImages/red-stick-Photoroom (1).png";
import blueStickImg from "../assets/productImages/blue-stick-Photoroom.png";

// Energy drink images
import orangeEnergyImg from "../assets/productImages/orange drink-Photoroom.png";
import blueEnergyImg from "../assets/productImages/blue-energy-Photoroom.png";
import greenEnergyImg from "../assets/productImages/green-energy-Photoroom.png";
import pinkEnergyImg from "../assets/productImages/pink-energy-Photoroom.png";
import redEnergyImg from "../assets/productImages/red-energy-Photoroom.png";

// Product Data
export const products = [
  {
    id: 1,
    name: "Prime Hydration - Ice Pop",
    category: "hydration",
    flavor: "Ice Pop",
    image: icePopImg,
    price: 2.49,
    description: "A cool blend of cherry, lime, and blue raspberry for maximum hydration.",
  },
  {
    id: 2,
    name: "Prime Hydration - Blue Raspberry",
    category: "hydration",
    flavor: "Blue Raspberry",
    image: blueRaspberryImg,
    price: 2.49,
    description: "Bold blue raspberry flavor with zero sugar and electrolytes.",
  },
  {
    id: 3,
    name: "Prime Hydration - Tropical Punch",
    category: "hydration",
    flavor: "Tropical Punch",
    image: tropicalPunchImg,
    price: 2.49,
    description: "A tropical explosion of fruity flavor that refreshes you instantly.",
  },
  {
    id: 4,
    name: "Prime Hydration - Lemon Lime",
    category: "hydration",
    flavor: "Lemon Lime",
    image: lemonLimeImg,
    price: 2.49,
    description: "Crisp and clean lemon-lime hydration with BCAAs and electrolytes.",
  },
  {
    id: 5,
    name: "Prime Hydration - Meta Moon",
    category: "hydration",
    flavor: "Meta Moon",
    image: metamoonImg,
    price: 2.49,
    description: "A mysterious intergalactic flavor with a sweet twist.",
  },
  {
    id: 6,
    name: "Prime Hydration - Strawberry Watermelon",
    category: "hydration",
    flavor: "Strawberry Watermelon",
    image: strawberryWatermelonImg,
    price: 2.49,
    description: "Sweet strawberry meets refreshing watermelon — your new go-to.",
  },
  {
    id: 7,
    name: "Prime Hydration - Grape",
    category: "hydration",
    flavor: "Grape",
    image: grapeImg,
    price: 2.49,
    description: "Classic grape flavor amped up with electrolytes and coconut water.",
  },

  // --- Hydration Sticks ---
  {
    id: 8,
    name: "Prime Hydration Stick - Ice Pop",
    category: "stick",
    flavor: "Ice Pop",
    image: iceStickImg,
    price: 1.49,
    description: "All the Ice Pop power in a convenient, on-the-go stick.",
  },
  {
    id: 9,
    name: "Prime Hydration Stick - Tropical Punch",
    category: "stick",
    flavor: "Tropical Punch",
    image: redStickImg,
    price: 1.49,
    description: "Pour, shake, hydrate — tropical goodness anywhere you go.",
  },
  {
    id: 10,
    name: "Prime Hydration Stick - Blue Raspberry",
    category: "stick",
    flavor: "Blue Raspberry",
    image: blueStickImg,
    price: 1.49,
    description: "Convenient hydration stick with a punch of blue raspberry.",
  },

  // --- Energy Drinks ---
  {
    id: 11,
    name: "Prime Energy - Orange Mango",
    category: "energy",
    flavor: "Orange Mango",
    image: orangeEnergyImg,
    price: 2.99,
    description: "Zesty orange and sweet mango with 200mg caffeine to fuel your day.",
  },
  {
    id: 12,
    name: "Prime Energy - Blue Raspberry",
    category: "energy",
    flavor: "Blue Raspberry",
    image: blueEnergyImg,
    price: 2.99,
    description: "Bold flavor meets bold energy — for legends only.",
  },
  {
    id: 13,
    name: "Prime Energy - Lemon Lime",
    category: "energy",
    flavor: "Lemon Lime",
    image: greenEnergyImg,
    price: 2.99,
    description: "Classic citrus blend loaded with caffeine and electrolytes.",
  },
  {
    id: 14,
    name: "Prime Energy - Strawberry Watermelon",
    category: "energy",
    flavor: "Strawberry Watermelon",
    image: pinkEnergyImg,
    price: 2.99,
    description: "Burst of fruity flavor and clean energy in every can.",
  },
  {
    id: 15,
    name: "Prime Energy - Tropical Punch",
    category: "energy",
    flavor: "Tropical Punch",
    image: redEnergyImg,
    price: 2.99,
    description: "High performance energy drink with tropical vibes.",
  },
];

export default products;
