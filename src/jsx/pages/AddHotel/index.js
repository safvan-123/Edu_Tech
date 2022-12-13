import React from 'react'
import { Card, Nav, Tab } from 'react-bootstrap';
import BasicInfo from './BasicInfo';

function AddHotel() {

    return (
        <Card>
            <Card.Body>
                <Tab.Container defaultActiveKey={"basic_info"}>
                    <Nav as="ul" className="nav-pills pill-info mb-4 justify-content-start ">
                        <Nav.Item as="li" className='mx-2' >
                            <Nav.Link eventKey={"basic_info"}>
                                Basic Info
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='mx-2' >
                            <Nav.Link eventKey={"location"}>
                                Location
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='mx-2' >
                            <Nav.Link eventKey={"amenities"}>
                                Amenities
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='mx-2' >
                            <Nav.Link eventKey={"rooms"}>
                                Rooms
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='mx-2' >
                            <Nav.Link eventKey={"photos"}>
                                Photos
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='mx-2' >
                            <Nav.Link eventKey={"policies"}>
                                Policies
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='mx-2' >
                            <Nav.Link eventKey={"financelegal"}>
                                Finance & Legal
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content className="">
                        <Tab.Pane eventKey={"basic_info"} >
                            <BasicInfo />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Card.Body>
        </Card>
    )
}

export default AddHotel