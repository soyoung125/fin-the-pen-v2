import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PATH from '../../../../../domain/constants/path';
import RoundedButton from '../../../../../components/common/RoundedButton';

function PersonalButton() {
  const navigate = useNavigate();
  // const user = useSelector(selectUser);
  const user = null;
  if (user === null) {
    return (
      <RoundedButton value="login" onClick={() => navigate(PATH.signIn)}>
        <LoginIcon />
      </RoundedButton>

    );
  }
  return (
    <RoundedButton value="user" onClick={() => navigate(PATH.myPage)}>
      <PersonOutlineOutlinedIcon />
    </RoundedButton>
  );
}

export default PersonalButton;
