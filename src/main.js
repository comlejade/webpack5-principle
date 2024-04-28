import "./css/index.css";

console.log("hello main");

const sum = (...args) => {
  args.slice().reduce((prev, cur) => prev + cur, 0);
};
