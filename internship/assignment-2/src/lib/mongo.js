import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const blogSchema = new mongoose.Schema({
  url: String,
  content: String,
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);


let isConnected = false;

export async function connectMongoDB() {
  if (isConnected) return;
  await mongoose.connect(MONGODB_URI);
  isConnected = true;
}

export async function saveToMongoDB({ url, blogText }) {
  try {
    await connectMongoDB();
    const newEntry = new Blog({ url, content: blogText });
    await newEntry.save();
    console.log('✅ Blog saved to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB Save Error:', error);
  }
}

