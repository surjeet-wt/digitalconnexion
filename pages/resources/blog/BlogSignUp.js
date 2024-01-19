import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "@/src/axios";
import Loader from "@/pages/component/Loader";

const BlogSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const emailRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setErr("");
      setIsLoading(true);
      setIsSuccess(false);

      const axiosConfig = {
        method: "POST",
        url: `/subscribe`,
        headers: {
          Accept: "application/json",
        },
        data: JSON.stringify({ email: emailRef.current.value }),
      };

      const response = await axios(axiosConfig);
      const data = await response.data;

      //Checking if err is due to validation and showing appropriate msg
      if (data.status === 400) {
        if (data.message === "Validation error") {
          console.log("Validation error triggered");
          if (
            data.errors.validation_error.email ===
            "The Email field must contain a unique value."
          ) {
            throw new Error("Email is already subscribed.");
          }
        }
      }

      if (data.status !== 200) {
        throw new Error("Something went wrong.");
      }

      emailRef.current.value = "";
      setIsSuccess(true);
    } catch (error) {
      setErr(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const feedbackTimeout = setTimeout(() => {
      setIsSuccess(false);
      setErr("");
    }, 2000);
    return () => {
      clearTimeout(feedbackTimeout);
    };
  }, [err, isSuccess]);

  return (
    <div className="share grey p-0 topics">
      {isLoading && <Loader />}
      <h2>Sign up for Blog Updates</h2>
      <Form className="wow fadeInUp" onSubmit={submitHandler}>
        <Form.Group
          className="w-100 mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email Address*"
            required={true}
          />
        </Form.Group>
        <Button
          type="submit"
          className="btns h-auto"
          disabled={isLoading ? true : false}
        >
          <span className="p-0 m-0 border-0" style={{ color: "#fff" }}>
            SUBSCRIBE
          </span>
        </Button>
      </Form>
      <div>
        {isSuccess && (
          <h2 className="pt-0" style={{ color: "green" }}>
            You have subscribed successfuly.
          </h2>
        )}
        {err && (
          <h2 className="pt-0" style={{ color: "red" }}>
            {err}
          </h2>
        )}
      </div>
    </div>
  );
};

export default BlogSignUp;
