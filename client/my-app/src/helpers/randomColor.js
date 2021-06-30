export default function randomColor() {
  let hex = Math.floor(Math.random() * 0xEFFFFF);
  let color = "#" + hex.toString(16);
  return color;
}