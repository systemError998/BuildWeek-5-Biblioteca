import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddUserForm } from "../../Components/AdminPageComp/AddUserForm";
import { Link } from "react-router-dom";
import AllUsersAdmin from "../../Components/AdminPageComp/AllUsersAdmin";
import Chart from "./Chart";
import PieChart from "./PieChart";

export default function AdminPage() {
  return (
    <Container>
      <Row>
        <Col>
          <Link to={"/admin/createUser"} className=" btn btn-light bg-white my-4">
            Add User
          </Link>
          <AllUsersAdmin />
        </Col>
        <Col>
        <Row className="mt-5">
          <Chart />
        </Row>
        <Row className="my-4">
          <PieChart />
        </Row>
        </Col>
      </Row>
    </Container>
  );
}
