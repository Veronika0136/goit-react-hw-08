import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditContact } from '../../redux/contacts/selectors';
import { updateContact } from '../../redux/contacts/operations';
import s from './UpdateContact.module.css';

const UpdateContact = () => {
  const dispatch = useDispatch();
  const editContact = useSelector(selectEditContact);

  const handleSubmit = (value, action) => {
    dispatch(
      updateContact({
        ...editContact,
        name: value.name,
        number: value.number,
      })
    );
    action.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Mini 3 characters')
      .max(50, 'Max 50 characters')
      .trim()
      .required('Name is required'),
    number: Yup.string()
      .matches(/^[0-9\-()+\s]+$/, 'Must be a valid phone number')
      .min(9, 'There must be a number format')
      .max(12, 'Max 12 numbers')
      .trim()
      .required('Phone number is required'),
  });

  return (
    <div className={s.wrapper}>
      <Formik
        validationSchema={ContactSchema}
        initialValues={{
          name: editContact.name,
          number: editContact.number,
        }}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name" />
            <ErrorMessage className={s.err} name="name" component="p" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="number" />
            <ErrorMessage className={s.err} name="number" component="p" />
          </label>
          <button className={s.btn} type="submit">
            Edit contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateContact;
