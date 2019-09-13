import React from 'react'
import { withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'

function UserForm({ values, errors, touched}){
    return (
        <Form>
            <div>
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type='text' name="username" placeholder="Type your name here:" />
            </div>
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type='email' name="email" placeholder="Type your email here:" />
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type='password' name="password" placeholder="Type your password here:" />
            </div>
            <label>
                <Field type="checkbox" name="tos" checked={values.tos} />
                    Accept Terms Of Service 
            </label>
            <button>Submit</button>
        </Form>
                
    );
}

const FormikUserForm = withFormik({

    mapPropsToValues({ username, email, password, tos }) {
      return {
        username: username || "",
        email: email || "",
        password: password || "",
        tos: tos || false
      }
    }, 
    //======VALIDATION SCHEMA==========
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("Username is required"),
        email: Yup.string()
            .email("Email is not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(12, "Your password must be at least 12 characters or longer")
            .required("Password is required")
    }),
    //======END VALIDATION SCHEMA==========

    handleSubmit(values){
        console.log(values)
    }
    })(UserForm);
  
    export default FormikUserForm;