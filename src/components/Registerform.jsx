import React from "react";
import {
  ErrorMessage,
  FastField,
  Field,
  Form,
  Formik,
  FieldArray,
  useFormik,
} from "formik";
import * as Yub from "yup";
import Personalfield from "./Personalfield";
import Personalerror from "./Personalerror";
import FavoritsField from "./FavoritsField";
const initialValues = {
  name: "zoheir",
  email: "",
  password: "",
  bio: "",
  adress: {
    city: "",
    postalcode: "",
  },
  phone: ['', ''],
  favorits: [''],
};
const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "لطفا نام را وارد کنید";
  }
  if (!values.email) {
    errors.email = "لطفا ایمیل را وارد کنید";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "لطفا قالب ایمیل را رعایت کنید مثال : aaa@example.bbb";
  }
  if (!values.password) {
    errors.password = "لطفا پسورد را وارد کنید";
  }
  return errors;
};
const validationSchema = Yub.object({
  name: Yub.string().required("لطفا نام را وارد کنید"),
  email: Yub.string()
    .email("لطفا قالب ایمیل را رعایت کنید مثال : aaa@example.bbb")
    .required("لطفا ایمیل را وارد کنید"),
  password: Yub.string()
    .required("لطفا پسورد را وارد کنید")
    .min("حداقل 8 کاراکتر استفاده کن"),
  adress: Yub.object({
    city: Yub.string().required("لطفا نام را وارد کنید"),
    postalcode: Yub.string().required("لطفا نام را وارد کنید"),
  }),
  phone: Yub.array().of(Yub.string().required("لطفا نام را وارد کنید")),
  favorits: Yub.array().of(Yub.string().required("لطفا نام را وارد کنید")),
  
});
const Registerform = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <div className="auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0">
        <div className="row w-100 justify-content-center align-items-center">
          <div className="auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3">
            <Form>
              <h1 className="text-center">
                <i className="fas fa-user-plus text-primary"></i>
              </h1>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  نام
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
                <ErrorMessage name="name" component={Personalerror} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  ایمیل
                </label>
                <FastField
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="email"
                />
                <ErrorMessage name="email">
                  {(error) => (
                    <small className="d-block text-center text-danger">
                      {error}
                    </small>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  رمز عبور
                </label>
                <FastField name="password">
                  {(props) => <Personalfield {...props} />}
                </FastField>
              </div>
              <div className="mb-3">
                <label htmlFor="bio" className="form-label">
                  بیو{" "}
                </label>
                <FastField
                  type="text"
                  className="form-control"
                  id="bi"
                  name="bio"
                  component="textarea"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  شهر
                </label>
                <FastField
                  type="text"
                  className="form-control"
                  id="city"
                  name="adress.city"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="postalcode" className="form-label">
                  کد پستی
                </label>
                <FastField
                  type="text"
                  className="form-control"
                  id="postalcode"
                  name="adress.postalcode"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telphone" className="form-label">
                  تلفن
                </label>
                <FastField
                  type="text"
                  className="form-control"
                  id="telphone"
                  name="phone[0]"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  شماره همراه
                </label>
                <FastField
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="phon[1]"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  علاقه مندی
                </label>
                <div className="mb-3">
                                <FieldArray type="text" className="form-control" id="favorits" name='favorits'>
                                    {props=> <FavoritsField {...props}/>}
                                </FieldArray>

                            </div>
              </div>
              <div className="text-center w-100">
                <button type="submit" className="btn btn-primary">
                  ثبت نام
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default Registerform;
