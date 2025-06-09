import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const LoginForm = () => {
  const dicpatch = useDispatch();

  const handleSubmit = (value, action) => {
    dicpatch(login(value));
    action.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Email
            <Field className={s.input} type="email" name="email" />
            <ErrorMessage className={s.err} name="email" component="p" />
          </label>
          <label className={s.label}>
            Password
            <Field className={s.input} type="password" name="password" />
            <ErrorMessage className={s.err} name="password" component="p" />
          </label>
          <button className={s.btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
