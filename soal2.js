const getMonth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      let month = [
        "january",
        "february",
        "maret",
        "april",
        "mei",
        "juni",
        "juli",
        "agustus",
        "september",
        "oktober",
        "november",
        "desember",
      ];
      if (!error) {
        resolve(month);
      } else {
        reject(new Error("Sorry, Data Not Found"));
      }
    }, 4000);
  });
};

const processMonths = (months) => {
  const monthList = months.map((month) => month.toUpperCase());
  console.log("Months:", monthList);
};

getMonth()
  .then(processMonths)
  .catch((error) => {
    console.log("Error:", error.message);
  });
