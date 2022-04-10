const evenOddSort = (arr) => {
  if (arr.every((el) => typeof el === "number")) {
    const even = arr.filter((el) => el % 2 === 0).sort();
    const odd = arr
      .filter((el) => el % 2 !== 0)
      .sort()
      .reverse();
    return even.concat(odd);
  } else console.log("Not every element is a number!");
};
