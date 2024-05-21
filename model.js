import blogSchema from './schema.js';
/*
to use our schema definition we need to convert our schema into a 
model we can work with .to do so we can pass it into mongoose.model(modelName, schema) 
*/

const blog = mongoose.model('Blog', blogSchema);