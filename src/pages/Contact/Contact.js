import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

// Define the validation schema with Yup
const validationSchema = Yup.object({
  clientName: Yup.string().required("Enter your Name"),
  email: Yup.string().email("Enter a Valid Email").required("Enter your Email"),
  messages: Yup.string().required("Enter your Messages"),
});

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  // Define initial values for Formik
  const initialValues = {
    clientName: "",
    email: "",
    messages: "",
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    // Here you can handle form submission, e.g., send values to an API
    console.log("Form data", values);
    // Show success message (if needed)
    alert(`Thank you dear ${values.clientName}, Your message has been received successfully. Further details will be sent to you by your email at ${values.email}.`);
    resetForm();
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="pb-20">
            <h1 className="font-titleFont font-semibold text-3xl">
              Fill up a Form
            </h1>
            <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Name
                </p>
                <Field
                  type="text"
                  id="clientName"
                  name="clientName"
                  placeholder="Enter your name here"
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                />
                <ErrorMessage name="clientName">
                  {msg => <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {msg}
                  </p>}
                </ErrorMessage>
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Email
                </p>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email here"
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                />
                <ErrorMessage name="email">
                  {msg => <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {msg}
                  </p>}
                </ErrorMessage>
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Messages
                </p>
                <Field
                  as="textarea"
                  id="messages"
                  name="messages"
                  cols="30"
                  rows="3"
                  placeholder="Enter your message here"
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                />
                <ErrorMessage name="messages">
                  {msg => <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {msg}
                  </p>}
                </ErrorMessage>
              </div>
              <button
                type="submit"
                className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
              >
                Post
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
