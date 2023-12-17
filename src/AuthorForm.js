// AuthorForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    biography: Yup.string().required('Biography is required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        birthDate: '',
        biography: '',
        ...initialValues, // Make sure to include the provided initialValues
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Name:</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label>Birth Date:</label>
          <Field type="date" name="birthDate" />
          <ErrorMessage name="birthDate" component="div" />
        </div>

        <div>
          <label>Biography:</label>
          <Field as="textarea" name="biography" />
          <ErrorMessage name="biography" component="div" />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
