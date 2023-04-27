const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const userRoute = require("./routes/userRoute")
const contactRoutes= require("./routes/contactRoutes");
const clientRoutes= require("./routes/clientRoutes");
const testimonialRoutes= require("./routes/testimonialRoute");
const postRoutes= require("./routes/postRoutes");
const careerRoutes= require("./routes/careerRoutes");
const faqRoutes= require("./routes/faqRoutes");
const projectRoutes= require("./routes/projectRoutes");
const errorHandler= require("./middlewares/errorMiddlewares")

const cookieParser = require("cookie-parser")
const path = require("path")

const app = express()

//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())

app.use(
  cors({
    origin: ["http://localhost:3000", "https://fintax_analytica.app"],
    credentials: true,
  })
)

const PORT = process.env.PORT || 5000

//connect to mongoose
mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })

//Routes Middleware
app.use("/api", userRoute);
app.use("/api/contact", contactRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/testimonial", testimonialRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/career", careerRoutes);
app.use("/api/faq", faqRoutes);
app.use("/api/project", projectRoutes);

// Erro Middleware
app.use(errorHandler)

// Routes
app.get("/", (req, res) => {
  res.send("Home Pages")
})
