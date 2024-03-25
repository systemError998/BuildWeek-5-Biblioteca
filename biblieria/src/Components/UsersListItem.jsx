import {
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { Button } from "react-bootstrap";
import axios from "../api/axios";

export function UsersListItem({ user }) {
  const deleteUser = (id) => {
    axios.delete("/admin/user/" + id);
    // .then(() => getUsers())
  };

  return (
    <ListItem>
      <ListItemPrefix>
        <Avatar variant="circular" alt={user.name} src={user.profile_img} />
      </ListItemPrefix>
      <div>
        <Typography variant="h6" color="blue-gray">
          {user.name}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {user.email}
        </Typography>

      </div>
        <Button className="float-end" onClick={() => deleteUser(user.id)}>X</Button>
    </ListItem>
  );
}
