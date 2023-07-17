import { Typography } from "@mui/material";
import RoundedButton from "../../../../../component/common/RoundedButton";
import PATH from "../../../../../domain/constants/path";
import { useNavigate } from "react-router-dom";
import logo from '../../../../../assets/logos/logo_white.png';

function LogoButton() {
    const navigate = useNavigate();
    // const guestMode = useAppSelector(selectGuestMode);
    const guestMode = true;
    return (
      <RoundedButton value="user" onClick={() => navigate(PATH.home)}>
        <img src={logo} alt="" width="26px" height="26px" />
        {
          guestMode && (<Typography ml={1}>GUEST MODE</Typography>)
        }
      </RoundedButton>
    );
  }
  export default LogoButton;