import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      console.log('form: ', values);
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      let RegExpEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/; //We use the RFC 5322 compliant regex to validate the email
      if(!values.emailField) errors.emailField = 'Required Field';
      if(!values.pswField) errors.pswField = 'Required Field';
      if(!RegExpEmail.test(values.emailField)) errors.emailFieldFormat = 'Username should be an email';
      return errors;
    }
  })

  return (
    <div className="m-4">
      <h1 className="display-1 mb-5 text-center">Sign Up</h1>
      <form onSubmit={formik.handleSubmit} >
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input id="emailField" type="text" className="form-control" onChange={formik.handleChange} value={formik.values.emailField} placeholder="yourEmail@example.com"/>
          {/*Incrust the error message if the errors ocurrs*/
          formik.errors.emailField ? <div style={{color: 'red'}}>{formik.errors.emailField}</div> : formik.errors.emailFieldFormat ? <div style={{color: 'red'}}>{formik.errors.emailFieldFormat}</div> : null
          }
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input id="pswField" type="password" className="form-control" onChange={formik.handleChange} value={formik.values.pswField}/>
          {/*Incrust the error message if the errors ocurrs*/
          formik.errors.pswField ? <div style={{color: 'red'}}>{formik.errors.pswField}</div> : null
        }
        </div>
        <button id="submitBtn" type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
