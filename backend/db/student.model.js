import mongoose from mongoose

const studentSchema=mongoose.model(
    {
        uid:
        {
            type: Number,
            require: true
        },
        name:
        {
            type: String,
            require: true
        }
    }
)

const Student=mongoose.model("Student", studentSchema);

export default Student;