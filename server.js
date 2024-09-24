require("dotenv").config({ path: "./.env" });
const app = require("./src/app");
const PORT = process.env.PORT || 3055;

const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

//Khi bạn nhấn Ctrl + C trong terminal (tạo ra tín hiệu SIGINT),
//Đoạn mã này sẽ lắng nghe tín hiệu và thực hiện việc tắt server Express một cách an toàn.
// process.on("SIGINT", () => {
//   server.close(() => console.log(`Exit server express`));
// });
