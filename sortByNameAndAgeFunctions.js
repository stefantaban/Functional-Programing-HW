const sortByNameAsc = (arr) => {
  if (arr.every((el) => typeof el.name === "string")) {
    let copiedArray = [...arr]; // it`s not a good practice to modify the array, so I make a copy of it it
    copiedArray.sort((x, y) => {
      const nameOne = x.name.toUpperCase();
      const nameTwo = y.name.toUpperCase();

      if (nameOne < nameTwo) {
        return -1;
      }
      if (nameOne > nameTwo) {
        return 1;
      }
      return 0;
    });
    return copiedArray;
  } else console.log("Some, or all values are not actual names!");
};

const sortByNameDesc = (arr) => { //basically same as above, but with reversed return values in the if statements
  if (arr.every((el) => typeof el.name === "string")) {
    let copiedArray = [...arr];
    copiedArray.sort((x, y) => {
      const nameOne = x.name.toUpperCase();
      const nameTwo = y.name.toUpperCase();

      if (nameOne < nameTwo) {
        return 1;
      }
      if (nameOne > nameTwo) {
        return -1;
      }
      return 0;
    });
    return copiedArray;
  } else console.log("Some, or all values are not actual names!");
};

const sortByAgeAsc = (arr) => {
  if (arr.every((el) => typeof el.age === "number")) {
    let copiedArray = [...arr];
    copiedArray.sort((x, y) => {
      const ageOne = x.age;
      const ageTwo = y.age;

      if (ageOne < ageTwo) {
        return -1;
      }
      if (ageOne > ageTwo) {
        return 1;
      }
      return 0;
    });
    return copiedArray;
  } else console.log("Some, or all values are not actual ages!");
};

const sortByAgeDesc = (arr) => {
  if (arr.every((el) => typeof el.age === "number")) {
    let copiedArray = [...arr];
    copiedArray.sort((x, y) => {
      const ageOne = x.age;
      const ageTwo = y.age;

      if (ageOne < ageTwo) {
        return 1;
      }
      if (ageOne > ageTwo) {
        return -1;
      }
      return 0;
    });
    return copiedArray;
  } else console.log("Some, or all values are not actual ages!");
};