const axios = require("axios");
const mahasiswa = () => {
  axios
    .get("https://api-frontend.kemdikbud.go.id/hit_mhs/abiel%20zulio%20maseida")
    .then((response) => {
      const result = response.data.mahasiswa
      result.map(item => console.log(`nama: ${item.text}`))
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
//     data.slice(0, 10).map((item) =>
//       console.log(`nama: ${item.name}, 
//     description: ${item.description}`)
//     );
//   } catch (error) {
//     console.log("Terjadi kesalahan:", error);
//   }
// };

// namaPahlawan();
