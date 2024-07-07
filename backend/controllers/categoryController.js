import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname("../", __filename);

const addCategory = (req, res) => {
  const data = req.body;
  const filePath = path.join(__dirname, "public", "categories.json");
  console.log(data.categories);

  fs.writeFile(
    filePath,
    JSON.stringify(data.categories, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res
          .status(500)
          .send({ message: "Error writing file", error: err });
      }
      res.send({ message: "Data updated successfully" });
    }
  );
};

export { addCategory };
