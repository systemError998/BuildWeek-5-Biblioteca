import React from "react";
import { Container } from "react-bootstrap";
import { AddUserForm } from "../../Components/AdminPageComp/AddUserForm";
import { Link } from "react-router-dom";
import AllUsersAdmin from "../../Components/AdminPageComp/AllUsersAdmin";

export default function AdminPage() {
  return (
    <Container>
      <div  className=" my-4">
        <Link to={"/admin/createUser"} className=" btn btn-light bg-white ">
          Add User
        </Link>
      </div>
      <AllUsersAdmin />
    </Container>
  );
}
