import Footer from "../../containers/sign/signInContainer/Footer.tsx";
import {Stack} from "@mui/material";
import CenterBox from "../../components/layouts/CenterBox.tsx";

function SignIn() {
  return(
    <CenterBox>
      <Stack
        justifyContent="center"
        alignItems="center"
        px={1}
      >
        <Footer />
      </Stack>

    </CenterBox>
  )
}

export default SignIn;
