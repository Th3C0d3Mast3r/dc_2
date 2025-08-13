import mongoose from 'mongoose';

const connectDB = async () => {
    const DB_URI = "mongodb+srv://menildhameliya1234:C2pA4FhV5ZLCtopZ@cluster0.mg2kqsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const GREEN = '\x1b[32m';
    const RED = '\x1b[31m';
    const RESET = '\x1b[0m';

    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`${GREEN}Database connected successfully${RESET}`);
    } catch (err) {
        console.error(`${RED}Database connection failed:${RESET}`, err);
        process.exit(1);
    }
};
export default connectDB;