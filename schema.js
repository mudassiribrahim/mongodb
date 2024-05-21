import mongoose from 'mongoose';
import { Schema } from 'mongoose';


/*
Everything in mongoose is start with schema each schema maps to a 
MongoDB collection and defines the shape of the documents within that collection.   
*/

const blogSchema = new Schema({
    title : String,
    author : String,
    body : String,
    comments :[{body: String, date: Date}],
    data:{type:Date, default: Date.now},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

export default Schema