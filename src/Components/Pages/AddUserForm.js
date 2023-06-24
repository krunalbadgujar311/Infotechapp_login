import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css'; // Import your CSS file for styling

const AddUserForm = () => {

  const initialValues = {
    empid:'',
    firstName: '',
    lastName: '',
    age: 18,
    visits: 0,
    progress:0,
    status: 0
  };

  const validationSchema = Yup.object({
    
    empid: Yup.string().required('Employee ID Required'),
    firstName: Yup.string().required('First Name Required'),
    lastName: Yup.string().required('Last Name Required'),
    age: Yup.number().required('Age is required'),
    visits: Yup.number().required('Visits is required'),
    progress: Yup.number().required('Progress is required'),
    status: Yup.string().required('Please select Status'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="Mainbox1">
    <div className="registration-form">
      <h1>Register Employee</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          
          <form>
          
          <div className="form-group">
              <label htmlFor="empid">Employee ID:</label>
              <Field type="text" id="empid" name="empid" />
              <ErrorMessage name="empid" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <Field type="number" id="age" name="age" />
              <ErrorMessage name="age" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="visits">Visits:</label>
              <Field type="number" id="visits" name="visits" />
              <ErrorMessage name="visits" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="progress">Progress:</label>
              <Field type="number" id="progress" name="progress" />
              <ErrorMessage name="progress" component="div" className="error" />
            </div>

            <div className='Dropdown'>
          <label htmlFor='status'>Status:</label>
          <Field name="status" as="select">
          <option value="option1">Select Status</option>
          <option value="option2">Single</option>
          <option value="option3">Married</option>
          <option value="option4">Complicated</option>
          </Field>
          <ErrorMessage name="status" component="div" className="error" />
        </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          
        )}
      </Formik>
    </div>
    </div>
    
  );
};

export default AddUserForm;
