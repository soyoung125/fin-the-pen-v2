import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { SCHEDULE_DRAWER } from "../../types/schedule.ts";

function NameInput() {
  return (
    <FormControl fullWidth>
      <OutlinedInput
        id="event_name"
        startAdornment={
          <InputAdornment position="start">
            {SCHEDULE_DRAWER.name}
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {}}
              edge="end"
            >
              <NotificationsNoneIcon />
            </IconButton>
          </InputAdornment>
        }
        value={""}
        onChange={() => {}}
        size="small"
        inputProps={{
          style: { textAlign: "right" },
        }}
      />
    </FormControl>
  );
}

export default NameInput;
