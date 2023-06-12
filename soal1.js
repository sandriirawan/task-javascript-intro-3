const cekHariKerja = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      const day = new Date()
        .toLocaleDateString("id-ID", { weekday: "long" })
        .toLowerCase();
      const cek = dataDay.find((item) => item === day);
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// Menggunakan then-catch
cekHariKerja()
  .then((result) => {
    console.log("Hari ini adalah hari kerja:", result);
  })
  .catch((error) => {
    console.log("Terjadi kesalahan:", error.message);
  });

// Menggunakan try-catch
async function checkWorkday() {
  try {
    const result = await cekHariKerja();
    console.log("Hari ini adalah hari kerja:", result);
  } catch (error) {
    console.log("Terjadi kesalahan:", error.message);
  }
}

checkWorkday();
