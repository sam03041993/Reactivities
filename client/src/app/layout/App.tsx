import { useEffect, useState } from "react"
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:5001/api/Activities")
      .then(response => setActivities(response.data));

    return () => { }
  }, [])

  return (
    <>
      <Typography variant="h2">Reactivities List</Typography>
      <List>
        {activities.map((x) => (
          <ListItem key={x.id}>
            <ListItemText> {x.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
