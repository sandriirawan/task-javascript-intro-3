
const axios = require("axios");
const mahasiswa = () => {
  axios
    .get("https://api-frontend.kemdikbud.go.id/hit_mhs/abiel%20zulio%20maseida")
    .then((response) => {
      const data = response.data;
      console.log(data);
    })
    .catch((error) => {
      console.log("Terjadi kesalahan:", error);
    });
};

mahasiswa();

// const axios = require("axios");
// const namaPahlawan = async () => {
//   try {
//     const response = await axios.get(
//       "https://indonesia-public-static-api.vercel.app/api/heroes"
//     );
//     const data = response.data;
//     console.log(data.map((item) => item.name));
//   } catch (error) {
//     console.log("Terjadi kesalahan:", error);
//   }
// };
// namaPahlawan();