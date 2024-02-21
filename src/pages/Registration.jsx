import { useForm } from "react-hook-form"
import store from "../redux/Store";
import { useNavigate } from "react-router-dom";
import { formSubmitted } from "../redux/Action";
import "./Registration.css"



const Registration = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        store.dispatch(formSubmitted(data))
        navigate(-1)
    }

    return (
        <div className="registration-container">
            <h1>Create account</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-box-container">
                        <input type="text" placeholder="Enter your name" {...register("name", {
                            required: "Name is required",
                            maxLength: { value: 30, message: "Name must have less than 30 characters" },
                            minLength: { value: 3, message: "Name must have greater than 3 charcters" },
                        })} />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className="input-box-container">
                        <input type="text" placeholder="Enter your email" {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                            }
                        })} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="input-box-container">
                        <input type="password" placeholder="Enter your password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 10, message: "Password must have at least 10 characters" },
                            pattern: {
                                value: /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/,
                                message: "Password must contain at least one special character"
                            }
                        })} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <div className="input-box-container">
                        <input type="password" placeholder="Confirm your password" {...register("confirmPassword", {
                            required: "Confirm password is required",
                            validate: (value) => value === watch("password") || "The passwords do not match"
                        })} />
                        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                    </div>
                    <div className="submit-btn-container">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration