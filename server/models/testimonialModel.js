const mongoose= require("mongoose");

const testiSchema= mongoose.Schema({
    client:{
        type:  mongoose.Schema.Types.ObjectId,
        ref:"Client",
        required:true
    },
    message:{
        type:String,
        required:true
    }
})


const Testimonial= mongoose.model("Testimonial", testiSchema);
module.exports=Testimonial

