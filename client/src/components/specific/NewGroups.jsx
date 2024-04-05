import React, {useState } from "react";
import {
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import {sampleUsers} from '../constants/sampleData'
import UserItem from "../shared/UserItem";
import { useInputValidation } from '6pp';
const NewGroups = () => {

  const groupNames = useInputValidation("")
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const selectMemberHandler = (id) => { 
    setSelectedMembers(prev => prev.includes(id) ? prev.filter((currElement) => currElement !== id) : [...prev, id])
    
  }
  const submitHandler = () => {}
  return (
    <Dialog open>
      <Stack
        p={{
          xs: "1rem",
          sm: "3rem",
        }}
        width={"25rem"}
        spacing={"2rem"}
      >
        <DialogTitle textAlign="center" variant="h4">New Group</DialogTitle>
        <TextField
          label="Group Name"
          value={groupNames.value} onChange={groupNames.changeHandler} />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {sampleUsers.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(i._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="outlined" color="error" size="large">Cancel</Button>
          <Button variant="contained" size="large" onClick={submitHandler}>Create</Button>

        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroups;
