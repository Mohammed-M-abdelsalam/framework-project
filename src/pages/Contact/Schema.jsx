import * as yup from 'yup';

export const schema = yup.object({
    name: yup.string("Please enter your name").required("Name is required").min(3, "Name must be at least 3 characters"),
    age: yup.number("Please enter your age").required("Age is required"),
    email: yup.string("Please enter your email").email("Please enter a valid email").required("Email is required"),
    password: yup.string("Please enter your password").required("Password is required").min(6, "Password must be at least 6 characters"),
    repassword: yup.string("Please enter your password").required("Password is required").min(6, "Password must be at least 6 characters").oneOf([yup.ref('password')], 'Passwords must match'),
});