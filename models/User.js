import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      maxlength: 60,
    },
    password: {
      type: String,
      required: true,
      maxlength: 60,
    },
  },
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
