export const getRandomBG = () => {
  const colors = [
    "bg-purple-900",
    "bg-rose-900",
    "bg-red-700",
    "bg-orange-500",
    "bg-yellow-400",
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
};

export const getBgColor = () => {
  const bgarr = [
    "#b73e3e",
    "#5b45b0",
    "#7f167f",
    "#735f32",
    "#1d2569",
    "#285430",
  ];

  const randomBg = Math.floor(Math.random() * bgarr.length);
  const color = bgarr[randomBg];
  return color;
};
