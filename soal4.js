const axios = require("axios");

const getName = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const data = response.data;
      data.map((item) => console.log(`nama: ${item.name}`))
    })
    .catch((error) => {
      console.log("Terjadi kesalahan:", error);
    });
};

getName();
