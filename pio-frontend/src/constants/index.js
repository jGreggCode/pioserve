import butterChicken from "../assets/images/butter-chicken-4.jpg";
import palakPaneer from "../assets/images/Saag-Paneer-1.jpg";
import biryani from "../assets/images/hyderabadibiryani.jpg";
import masalaDosa from "../assets/images/masala-dosa.jpg";
import choleBhature from "../assets/images/chole-bhature.jpg";
import rajmaChawal from "../assets/images/rajma-chawal-1.jpg";
import paneerTikka from "../assets/images/paneer-tika.webp";
import gulabJamun from "../assets/images/gulab-jamun.webp";
import pooriSabji from "../assets/images/poori-sabji.webp";
import roganJosh from "../assets/images/rogan-josh.jpg";
import { color } from "framer-motion";

export const popularDishes = [
  {
    id: 1,
    image: butterChicken,
    name: "Pan De Ajo",
    numberOfOrders: 432,
  },
  {
    id: 2,
    image: palakPaneer,
    name: "Remy's Soup",
    numberOfOrders: 341,
  },
  {
    id: 3,
    image: biryani,
    name: "Baked Brie",
    numberOfOrders: 276,
  },
  {
    id: 4,
    image: masalaDosa,
    name: "Jardin Charcuterie",
    numberOfOrders: 256,
  },
  {
    id: 5,
    image: choleBhature,
    name: "Croquettas Trufa",
    numberOfOrders: 234,
  },
  {
    id: 6,
    image: rajmaChawal,
    name: "Palalas Bravas",
    numberOfOrders: 180,
  },
  {
    id: 7,
    image: paneerTikka,
    name: "Calamari",
    numberOfOrders: 170,
  },
  {
    id: 8,
    image: gulabJamun,
    name: "Sisig Croquettas",
    numberOfOrders: 156,
  },
  {
    id: 9,
    image: pooriSabji,
    name: "Jamon Serrano",
    numberOfOrders: 140,
  },
  {
    id: 10,
    image: roganJosh,
    name: "Prosciutto Romano",
    numberOfOrders: 132,
  },
];

export const tables = [
  { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 },
  { id: 2, name: "Table 2", status: "Available", initial: "MB", seats: 6 },
  { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 2 },
  { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
  { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 3 },
  { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 4 },
  { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 5 },
  { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 5 },
  { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 6 },
  { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 6 },
  { id: 11, name: "Table 11", status: "Booked", initial: "GT", seats: 4 },
  { id: 12, name: "Table 12", status: "Available", initial: "JS", seats: 6 },
  { id: 13, name: "Table 13", status: "Booked", initial: "EK", seats: 2 },
  { id: 14, name: "Table 14", status: "Available", initial: "QN", seats: 6 },
  { id: 15, name: "Table 15", status: "Booked", initial: "TW", seats: 3 },
];

export const hotBeverages = [
  { id: 1, name: "Espresso", price: 90, category: "Coffee Based" },
  { id: 2, name: "Espresso con Panna", price: 108, category: "Coffee Based" },
  { id: 3, name: "Espresso Machiatto", price: 108, category: "Coffee Based" },
  { id: 4, name: "Americano", price: 108, category: "Coffee Based" },
  { id: 5, name: "Cappucino", price: 128, category: "Coffee Based" },
  { id: 6, name: "Cafe Latte", price: 148, category: "Coffee Based" },
];

export const startersItem = [
  {
    id: 1,
    name: "Paneer Tikka",
    price: 250,
    category: "Vegetarian",
  },
  {
    id: 2,
    name: "Chicken Tikka",
    price: 300,
    category: "Non-Vegetarian",
  },
  {
    id: 3,
    name: "Tandoori Chicken",
    price: 350,
    category: "Non-Vegetarian",
  },
  {
    id: 4,
    name: "Samosa",
    price: 100,
    category: "Vegetarian",
  },
  {
    id: 5,
    name: "Aloo Tikki",
    price: 120,
    category: "Vegetarian",
  },
  {
    id: 6,
    name: "Hara Bhara Kebab",
    price: 220,
    category: "Vegetarian",
  },
];

export const mainCourse = [
  {
    id: 1,
    name: "Butter Chicken",
    price: 400,
    category: "Non-Vegetarian",
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 350,
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    price: 450,
    category: "Non-Vegetarian",
  },
  {
    id: 4,
    name: "Dal Makhani",
    price: 180,
    category: "Vegetarian",
  },
  {
    id: 5,
    name: "Kadai Paneer",
    price: 300,
    category: "Vegetarian",
  },
  {
    id: 6,
    name: "Rogan Josh",
    price: 500,
    category: "Non-Vegetarian",
  },
];

export const beverages = [
  {
    id: 1,
    name: "Masala Chai",
    price: 50,
    category: "Hot",
  },
  {
    id: 2,
    name: "Lemon Soda",
    price: 80,
    category: "Cold",
  },
  {
    id: 3,
    name: "Mango Lassi",
    price: 120,
    category: "Cold",
  },
  {
    id: 4,
    name: "Cold Coffee",
    price: 150,
    category: "Cold",
  },
  {
    id: 5,
    name: "Fresh Lime Water",
    price: 60,
    category: "Cold",
  },
  {
    id: 6,
    name: "Iced Tea",
    price: 100,
    category: "Cold",
  },
];

export const soups = [
  {
    id: 1,
    name: "Tomato Soup",
    price: 120,
    category: "Vegetarian",
  },
  {
    id: 2,
    name: "Sweet Corn Soup",
    price: 130,
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "Hot & Sour Soup",
    price: 140,
    category: "Vegetarian",
  },
  {
    id: 4,
    name: "Chicken Clear Soup",
    price: 160,
    category: "Non-Vegetarian",
  },
  {
    id: 5,
    name: "Mushroom Soup",
    price: 150,
    category: "Vegetarian",
  },
  {
    id: 6,
    name: "Lemon Coriander Soup",
    price: 110,
    category: "Vegetarian",
  },
];

export const desserts = [
  {
    id: 1,
    name: "Gulab Jamun",
    price: 100,
    category: "Vegetarian",
  },
  {
    id: 2,
    name: "Kulfi",
    price: 150,
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    price: 250,
    category: "Vegetarian",
  },
  {
    id: 4,
    name: "Ras Malai",
    price: 180,
    category: "Vegetarian",
  },
];

export const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 350,
    category: "Vegetarian",
  },
  {
    id: 2,
    name: "Veg Supreme Pizza",
    price: 400,
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    price: 450,
    category: "Non-Vegetarian",
  },
];

export const alcoholicDrinks = [
  {
    id: 1,
    name: "Beer",
    price: 200,
    category: "Alcoholic",
  },
  {
    id: 2,
    name: "Whiskey",
    price: 500,
    category: "Alcoholic",
  },
  {
    id: 3,
    name: "Vodka",
    price: 450,
    category: "Alcoholic",
  },
  {
    id: 4,
    name: "Rum",
    price: 350,
    category: "Alcoholic",
  },
  {
    id: 5,
    name: "Tequila",
    price: 600,
    category: "Alcoholic",
  },
  {
    id: 6,
    name: "Cocktail",
    price: 400,
    category: "Alcoholic",
  },
];

export const salads = [
  {
    id: 1,
    name: "Caesar Salad",
    price: 200,
    category: "Vegetarian",
  },
  {
    id: 2,
    name: "Greek Salad",
    price: 250,
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "Fruit Salad",
    price: 150,
    category: "Vegetarian",
  },
  {
    id: 4,
    name: "Chicken Salad",
    price: 300,
    category: "Non-Vegetarian",
  },
  {
    id: 5,
    name: "Tuna Salad",
    price: 350,
  },
];

export const menus = [
  {
    id: 1,
    name: "Hot Beverages",
    bgColor: "#DC143C",
    icon: "",
    items: hotBeverages,
  },
  {
    id: 2,
    name: "Cold Beverages",
    bgColor: "#E0115F",
    icon: "",
    items: mainCourse,
  },
  {
    id: 3,
    name: "Juices & Shakes",
    bgColor: "#FF6F61",
    icon: "",
    items: beverages,
  },
  { id: 4, name: "Alcohol Drinks", bgColor: "#FA8072", icon: "", items: soups },
  { id: 5, name: "Cocktails", bgColor: "#FF7034", icon: "", items: desserts },
  {
    id: 6,
    name: "Desserts",
    bgColor: "#DAA520",
    icon: "",
    items: pizzas,
  },
  {
    id: 7,
    name: "Starters",
    bgColor: "#FFBF00",
    icon: "",
    items: alcoholicDrinks,
  },
  { id: 8, name: "Salads", bgColor: "#5b45b0", icon: "", items: salads },
  {
    id: 9,
    name: "Cold Cuts & Cheese",
    bgColor: "#FFDB58",
    icon: "",
    items: salads,
  },
  { id: 10, name: "Pastas", bgColor: "#FBCEB1", icon: "", items: salads },
  {
    id: 11,
    name: "Paellas",
    bgColor: "#E2725B",
    icon: "",
    items: salads,
  },
  {
    id: 12,
    name: "Pizza Neopolitan",
    bgColor: "#A4C639",
    icon: "",
    items: salads,
  },
  {
    id: 13,
    name: "Pizza Romana",
    bgColor: "#98FF98",
    icon: "",
    items: salads,
  },
  { id: 14, name: "Sandwich", bgColor: "#FFDAB9", icon: "", items: salads },
  { id: 15, name: "Mains", bgColor: "#F7E7CE", icon: "", items: salads },
];

export const metricsData = [
  {
    title: "Revenue",
    value: "\u20B1 70,343",
    percentage: "12%",
    color: "#025cca",
    isIncrease: false,
  },
  {
    title: "Sample Metrics",
    value: "99,999",
    percentage: "16%",
    color: "#02ca3a",
    isIncrease: true,
  },
  {
    title: "Total Customer",
    value: "10,345",
    percentage: "10%",
    color: "#f6b100",
    isIncrease: true,
  },
  {
    title: "Event Count",
    value: "15,000",
    percentage: "10%",
    color: "#be3e3f",
    isIncrease: false,
  },
];

export const itemsData = [
  {
    title: "Total Categories",
    value: "10",
    percentage: "12%",
    color: "#5b45b0",
    isIncrease: false,
  },
  {
    title: "Total Dishes",
    value: "40",
    percentage: "12%",
    color: "#285430",
    isIncrease: true,
  },
  {
    title: "Active Orders",
    value: "0",
    percentage: "12%",
    color: "#735f32",
    isIncrease: true,
  },
  { title: "Total Tables", value: "10", color: "#7f167f" },
];

export const orders = [
  {
    id: "101",
    customer: "Chris Evans",
    status: "Completed",
    dateTime: "July 07, 2025 08:32 PM",
    items: 8,
    tableNo: 3,
    total: 250.0,
  },
  {
    id: "102",
    customer: "John Doe",
    status: "Completed",
    dateTime: "July 07, 2025 07:20 PM",
    items: 5,
    tableNo: 4,
    total: 180.0,
  },
  {
    id: "103",
    customer: "Emma Smith",
    status: "Completed",
    dateTime: "July 07, 2025 06:02 PM",
    items: 3,
    tableNo: 5,
    total: 120.0,
  },
  {
    id: "104",
    customer: "Chris Brown",
    status: "Completed",
    dateTime: "July 07, 2025 03:45 PM",
    items: 6,
    tableNo: 6,
    total: 220.0,
  },
];

// const buttons = [
//   { label: "Add Table", icon: <MdTableBar />, action: "table" },
//   { label: "Add Category", icon: <MdCategory />, action: "category" },
//   { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
// ];
// const tabs = ["Metrics", "Orders", "Payments"];
