const mongoose= require('mongoose');


const blogCategorySchema= mongoose.Schema({
    categoryName: {
        type: String,
        required:[true, "please provide a category name"],
        trim:true
    }, 
    description:{
        type: String,
        trim:true,
    }
}, {timestamps: true})

const blogCategory= mongoose.model('blogCategory', blogCategorySchema);

module.exports= blogCategory;