import Footer from "../../containers/sign/signInContainer/Footer.tsx";
import {Stack} from "@mui/material";
import CenterBox from "../../components/layouts/CenterBox.tsx";
import Header from "../../containers/sign/signInContainer/Header.tsx";
import SignInFields from "../../containers/sign/signInContainer/SignInFields.tsx";

function SignIn() {
  return(
    <CenterBox>
      <Stack
        justifyContent="center"
        alignItems="center"
        px={1}
      >
        <Header/>
        <SignInFields/>
        <Footer />
      </Stack>

    </CenterBox>
  )
}

export default SignIn;
