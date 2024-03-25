import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

export function UsersListItem({user}) {
  return (
    <ListItem>
      <ListItemPrefix>
        <Avatar
          variant="circular"
          alt={user.name}
          src={user.profile_img}
        />
      </ListItemPrefix>
      <div>
        <Typography variant="h6" color="blue-gray">
          {user.name}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {user.email}
        </Typography>
      </div>
    </ListItem>
  );
}
