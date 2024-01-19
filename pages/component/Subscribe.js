import React, { useEffect, useRef, useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import smallArrow from "../assets/images/smallarrow.svg";

import axios from "@/src/axios";
import Loader from "./Loader";
import Image from "next/image";

const Subscribe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [Err, setErr] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const emailRef = useRef();


  const validateEmail = (email) => {
    // Regular expression to validate the email format
    const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailPattern.test(email);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setErr("");
      setIsLoading(true);
      setIsSuccess(false);

      const email = emailRef.current.value;

      if (!email) {
        throw new Error("This field is required");
      }

      if (!validateEmail(email)) {
        throw new Error("Invalid email");
      }

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
      
      if (data.status === 400 && data.message === "Validation error") {
        if (
          data.errors.validation_error.email ===
          "The Email field must contain a unique value."
        ) {
          throw new Error("Email is already subscribed.");
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
      //setErr("");
    }, 2000);
    return () => {
      clearTimeout(feedbackTimeout);
    };
  }, [Err, isSuccess]);

  return (
    <Col lg={8} md={6}>
      <div className="new-wrap">
        {isLoading && <Loader />}
        <h2 className=" wow fadeInUp">Stay updated.</h2>

        <Form className="d-flex  wow fadeInUp" onSubmit={submitHandler}>
          <Form.Group className="w-100" controlId="exampleForm.ControlInput1">
            <Form.Control
              ref={emailRef}
              type="text"
              placeholder="Email Address*"
              
            />
          </Form.Group>
          <Button type="submit" disabled={isLoading ? true : false}>
            <Image src={smallArrow} alt="smallArrow" />
          </Button>
        </Form>
        <div>
          {isSuccess && (
            <p className="pt-2 mb-0" style={{ color: "green", fontSize:"13px" }}>
              You have subscribed successfuly.
            </p>
          )}
          {Err && (
            <p className="pt-2  mb-0" style={{ color: "red", fontSize:"13px"  }}>
              {Err}
            </p>
          )}
        </div>
      </div>
    </Col>
  );
};

export default Subscribe;
