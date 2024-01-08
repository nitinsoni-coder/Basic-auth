import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/basicAuthLogin", async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).send("Authentication failed");
    return;
  }

  const encodedCredentials = authHeader.split(" ")[1];

  const decodedCredentials = Buffer.from(encodedCredentials, "base64").toString(
    "utf-8"
  );
  console.log("--decodedCredentials---", decodedCredentials);
  const [username, password] = decodedCredentials.split(":");

  console.log("username : ", username);
  console.log("password : ", password);

  res.status(200).json({
    success: true,
    message: "server is working",
  });
});

app.get("/", async (req, res) => {
  res.send("server is working fine");
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
