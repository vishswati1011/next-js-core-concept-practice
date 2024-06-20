// Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    
    title: String,
    desc:String,
    video:String,
    connect:String,  
    image:String,
});

const Project = mongoose.models.projects||mongoose.model('projects', projectSchema);

export default Project;