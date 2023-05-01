const mongoose= require("mongoose");


const projectSchema= mongoose.Schema({
    projectName: {
        type: String,
        required: [true, "please enter the project name"],
        trim: true
    },
    slug: {
        type: String,
        unique:true,
    },
    projectDescription: {
        type: String,
        required: [true, "please add the project description"],
        trim: true
    },
    image: {
        type: Array,
        default: {}
    }
}, {timestamps: true})

const Project= mongoose.model("Project", projectSchema);
module.exports= Project