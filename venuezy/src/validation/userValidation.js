import * as yup from "yup";
import "yup-phone";

const userSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string(),
  phoneNumber: yup.number().phone()
});

export default userSchema;