import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup.string()
  .min(5, 'Password must be 5 characters long')
  
  
});

 const Evalidation = () => {

  return(
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password:'',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {

        // same shape as initial values
        const requestOptions={
            method:'POST',   
            body:JSON.stringify(values),
            headers:{'Content-Type':'application/json'}
            }
            
            fetch('http://localhost:3001/userDetails',requestOptions)
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label>firstName:
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          </label>
          <label>lastName:
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          </label>
          <label> email
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </label>
          <label> Password:
          <Field name="password" type="password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          </label>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
  )
 }

export default Evalidation;
