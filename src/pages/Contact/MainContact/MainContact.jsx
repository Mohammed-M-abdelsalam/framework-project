import {useFormik} from "formik";
import {schema} from "../Schema";
import Star from "../../../components/Star/Star";

function MainContact(){
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
            password: '',
            repassword: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
        },
        
    })
    return(
        <main className="container-style h-screen flex items-center">
            <div className="w-full">
                <h1 className="text-4xl font-semibold text-center text-diffrent">Contact Us</h1>
                <Star color='balck' />
                <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                    <input value={values.name} onChange={handleChange} onBlur={handleBlur} className="border-b-2 p-3 outline-0 transition-[border] duration-500 focus:border-main" type="text" name="name" placeholder="user name" />
                    {touched.name && errors.name && <p className="text-red-600">*{errors.name}</p>}

                    <input value={values.age} onChange={handleChange} onBlur={handleBlur} className="border-b-2 p-3 outline-0 transition-[border] duration-500  focus:border-main" type="text" name="age" placeholder="user age" />
                    {touched.age && errors.age && <p className="text-red-600">*{errors.age}</p>}

                    <input value={values.email} onChange={handleChange} onBlur={handleBlur} className="border-b-2 p-3 outline-0 transition-[border] duration-500  focus:border-main" type="text" name="email" placeholder="user email"/>
                    {touched.email && errors.email && <p className="text-red-600">*{errors.email}</p>}

                    <input value={values.password} onChange={handleChange} onBlur={handleBlur} className="border-b-2 p-3 outline-0 transition-[border] duration-500  focus:border-main" type="password" name="password" placeholder="user password" />
                    {touched.password && errors.password && <p className="text-red-600">*{errors.password}</p>}

                    <input value={values.repassword} onChange={handleChange} onBlur={handleBlur} className="border-b-2 p-3 outline-0 transition-[border] duration-500  focus:border-main" type="password" name="repassword" placeholder="repassword" />
                    {touched.repassword && errors.repassword && <p className="text-red-600">*{errors.repassword}</p>}
                    <button type="submit" className="btn w-1/3">submit</button>
                </form>
            </div>
        </main>
    )
}

export default MainContact