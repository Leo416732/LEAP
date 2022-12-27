const express = require("express");
const cors = require("cors");

let cars = [
  {
    id: 0,
    model: "Prius 20",
    brand: "Toyota",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/2nd_Toyota_Prius.jpg",
  },
  {
    id: 1,
    model: "Prius 30",
    brand: "Toyota",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/2nd_Toyota_Prius.jpg",
  },
  {
    id: 2,
    model: "Prius Alpha",
    brand: "Toyota",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO1vGezNB2V4rk4P6qkL5vowfpIE-J1kuaGDmuJxOSg&s",
  },
  {
    id: 3,
    model: "Aqua",
    brand: "Toyota",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO1vGezNB2V4rk4P6qkL5vowfpIE-J1kuaGDmuJxOSg&s",
  },
  {
    id: 4,
    model: "Prius 10",
    brand: "Toyota",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO1vGezNB2V4rk4P6qkL5vowfpIE-J1kuaGDmuJxOSg&s",
  },
  {
    id: 5,
    model: "RX 450",
    brand: "Lexus",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO1vGezNB2V4rk4P6qkL5vowfpIE-J1kuaGDmuJxOSg&s",
  },
  {
    id: 6,
    model: "RX 350",
    brand: "Lexus",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO1vGezNB2V4rk4P6qkL5vowfpIE-J1kuaGDmuJxOSg&s",
  },
  {
    id: 7,
    model: "HS 250",
    brand: "Lexus",
    image:
      "data:image/jpeg;base64,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",
  },
];
let index = cars.length;

const app = express();
app.use(cors());
app.get("/api/cars", (req, res) => {
  res.send(cars);
});

app.get("/api/cars/:id", (req, res) => {
  const car = cars.filter((c) => c.id === Number(req.params.id));
  if (car.length > 0) {
    res.send(car[0]);
  } else {
    res.send("Car not found");
  }
});

app.post("/api/cars", (req, res) => {
  const car = { id: index, ...req.body };
  index++;
  cars.push(car);
  res.send(car);
});

app.delete("/api/cars", (req, res) => {
  cars = cars.filter((car) => car.id !== Number(req.body.id));
  res.send(`Car with given id: ${req.body.id} deleted successfully`);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
