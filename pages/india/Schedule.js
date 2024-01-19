import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
//import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Axios from "@/src/axios";
import Loader from "../component/Loader";
import { useRouter } from 'next/router';

function Schedule(props) {
  const router = useRouter();
  const [validErrors, setValidErrors] = useState({});
  const [hasErr, setHasErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();


   // Get the current date in the format YYYY-MM-DD
   const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    // Set the minimum date to the current date when the component mounts
    setValue('tour_date', getCurrentDate());
  }, [setValue])

  async function onSubmit(sendingData, data) {

    console.log(data);
    try {
      setIsLoading(true);

      const axiosConfig = {
        method: "post",
        url: "/schedule-tour",
        headers: {
          Accept: "application/json",
        },
        data: JSON.stringify(sendingData),
      };

      const response = await Axios(axiosConfig);
      const data = await response.data;

      if (data.status === 400) {
        setValidErrors(data.errors.validation_error);
      } else if (data.status !== 200) {
        setHasErr(true);
      }
    } catch (err) {
      console.log(err);
      setHasErr(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      router.push('/thank-you');
    }
  }

  return (
    <Modal
      {...props}
      className="modal_edit"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Header closeButton className="w-100">
        <Modal.Title>Schedule A Tour</Modal.Title>
      </Modal.Header>
      <Modal.Body className="w-100 p-0  conversation-wrapper">
        <Form onSubmit={handleSubmit(onSubmit)} method="post">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
               

<Form.Control
  type="text"
  placeholder="Name*"
  autoComplete="off"
  {...register("name", {
    required: {
      value: true,
      message: "This field is required",
    },
    pattern: {
      value: /^[A-Za-z ]+$/,
      message: "Invalid mobile number. Only alphabetic characters are allowed.",
    },
  })}
  onKeyPress={(event) => {
    const keyCode = event.which || event.keyCode;
    const keyValue = String.fromCharCode(keyCode);
    const isAlphabetic = /^[A-Za-z ]+$/.test(keyValue);

    if (!isAlphabetic) {
      event.preventDefault();
    }
  }}
/>
                {errors.name && <p className="error">{errors.name?.message}</p>}
                <p className="error">{validErrors.name}</p>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Email*"
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                    pattern: {
                      value: /^\S+@\S+.\S+$/,
                      message: "Invalid email",
                    },
                  })}
                />

                {errors.email && (
                  <p className="error">{errors.email?.message}</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="error">{errors.email?.pattern?.message}</p>
                )}
                <p className="error">{validErrors.email}</p>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  maxLength="10"
                  placeholder="Phone Number*"
                  autoComplete="off"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Invalid mobile number",
                    },
                  })}
                  onKeyPress={(event) => {
                    const keyCode = event.which || event.keyCode;
                    const keyValue = String.fromCharCode(keyCode);
                    const isNumber = /^\d+$/.test(keyValue);
                
                    if (!isNumber) {
                      event.preventDefault();
                    }
                  }}
                />
                {errors.phone && (
                  <p className="error">{errors.phone?.message}</p>
                )}
                <p className="error">{validErrors.phone}</p>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
              

<Form.Control
  type="text"
  placeholder="Company Name*"
  autoComplete="off"
  {...register("company", {
    required: {
      value: true,
      message: "This field is required",
    },
    pattern: {
      value: /^[A-Za-z ]+$/,
      message: "Invalid mobile number. Only alphabetic characters are allowed.",
    },
  })}
  onKeyPress={(event) => {
    const keyCode = event.which || event.keyCode;
    const keyValue = String.fromCharCode(keyCode);
    const isAlphabetic = /^[A-Za-z ]+$/.test(keyValue);

    if (!isAlphabetic) {
      event.preventDefault();
    }
  }}
/>


                {errors.company && (
                  <p className="error">{errors.company?.message}</p>
                )}
                <p className="error">{validErrors.company}</p>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Select
                  {...register("data_center_location", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                >
                  <option value="">Data Center Location*</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Mumbai">Mumbai</option>
                </Form.Select>
                {errors.data_center_location && (
                  <p className="error">
                    {errors.data_center_location?.message}
                  </p>
                )}
                <p className="error">{validErrors.data_center_location}</p>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="date"
                  autoComplete="off"
                  placeholder="Desired Tour Date"
                  className="text-uppercase date-input"
                  style={{ color: "#656565" }}
                  {...register("tour_date", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  min={getCurrentDate()} // Set the minimum date dynamically
                />

                
                {errors.tour_date && (
                  <p className="error">{errors.tour_date?.message}</p>
                )}
                <p className="error">{validErrors.tour_date}</p>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Select
                  {...register("contact_method", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                >
                  {/* set values of all the options */}
                  <option value="">Preferred Contact Method*</option>
                  <option value="Message">Message</option>
                  <option value="Call">Call</option>
                </Form.Select>
                {errors.contact_method && (
                <p className="error">{errors.contact_method?.message}</p>
              )}
              <p className="error">{validErrors.contact_method}</p>
              </Form.Group>
             
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  autoComplete="off"
                  rows={3}
                  placeholder="Comments / Special Requests"
                  {...register("comments", {
                  })}
                />
                
                

                
              </Form.Group>
            </Col>

            <Col md={12} className="text-center">
              <Button type="submit" className="btns mt-0">
                <span>SUBMIT</span>
              </Button>
            </Col>
          </Row>
        </Form>
        {hasErr && <p className="error">Something went wrong!</p>}
        {isLoading && <Loader />}
      </Modal.Body>
    </Modal>
  );
}

export default Schedule;
