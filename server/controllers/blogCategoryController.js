const asyncHandler= require("express-async-handler");
const blogCategory =require("../models/blogCategoryModel")

const createBlogCategory= asyncHandler(async(req, res)=>{
    const {categoryName, description}= req.body;

    if(!categoryName || !description){
        res.status(400)
        throw new Error("Please provide category name and description")
    }else{
        const newCategory= await blogCategory.create({
            categoryName,
            description
        })
        res.status(201).json({
            message: "Category created successfully",
            data: newCategory
        })
    }
})

module.exports={createBlogCategory}