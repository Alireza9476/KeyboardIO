export default function randomHexaColor() {
  const hex = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hexa = "#";
  for (let i = 0; i < 6; i++) {
    hexa += hex[randHex(hex)];
  }
  return hexa;
}

const randHex = (hex) => {
  return Math.floor(Math.random() * hex.length);
};
