import { AvField, AvForm } from 'availity-reactstrap-validation'
import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Switch from "react-switch";

function BasicInfo() {
    const handleValidSubmit = (_, values) => {
        console.log(values);
    }
    const [chanelManager, setChanelManager] = useState(false)

    return (
        <div>

            <h6 className='my-4 mb-5 mt-5'>Please fill basic details of your property</h6>
            <AvForm
                className="form-horizontal form-validate"
                onValidSubmit={(e, v) => {
                    handleValidSubmit(e, v)
                }}
            >
                <Row>
                    <Col lg={6}>
                        <div className="form-group mb-3 mt-2">
                            <AvField
                                name="property_name"
                                label="Property Name*"
                                className="form-control"
                                placeholder="Enter Property Name"
                                type="text"
                                validate={{
                                    required: { value: true, errorMessage: 'Please enter a Property Name' },
                                }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-group mb-3 mt-2">
                            <AvField type="select" name="hotel_star_rating" className="form-control" label="Hotel Star Rating*" helpMessage=""
                                validate={{
                                    required: { value: true, errorMessage: 'Please select a Star Rating' },
                                }}
                            >
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </AvField>
                        </div></Col>
                    <Col lg={6}>
                        <div className="form-group mb-3 mt-2">
                            <AvField type="select" name="taking_booking_since_year" className="form-control" label="Taking booking since year" helpMessage="">
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                            </AvField>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <p>Do you work with channel manager?</p>
                        <Switch
                            uncheckedIcon={<Offsymbol />}
                            checkedIcon={<OnSymbol />}
                            className="me-1 mb-sm-8 mb-2 react-switch"
                            onChange={() => {
                                setChanelManager(!chanelManager)
                            }}
                            checked={chanelManager || false}
                        />
                    </Col>
                </Row>

                <div className='mt-5'>
                    <h6 className='my-4 mb-2'>Contact Details</h6>
                    <Row>
                        <Col lg={6}>
                            <div className="form-group mb-3 mt-2">
                                <AvField
                                    name="contact_number"
                                    label="Contact Number*"
                                    className="form-control"
                                    placeholder="Enter Contact Number"
                                    type="phone"
                                    validate={{
                                        required: { value: true, errorMessage: 'Please Enter a Phone number or mobile' },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="form-group mb-3 mt-2">
                                <AvField
                                    name="email"
                                    label="Email*"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    type="email"
                                    validate={{
                                        required: { value: true, errorMessage: 'Please Enter a valid email address' },
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className='justify-content-end mt-5'>
                    <Col lg={3}>
                        <Button variant="success" type='submit'>Save and Continue</Button>
                    </Col>
                </Row>
            </AvForm>
        </div>
    )
}

export default BasicInfo


const Offsymbol = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 12,
                color: "#fff",
                paddingRight: 2,
            }}
        >
            {" "}
            No
        </div>
    )
}

const OnSymbol = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 12,
                color: "#fff",
                paddingRight: 2,
            }}
        >
            {" "}
            Yes
        </div>
    )
}