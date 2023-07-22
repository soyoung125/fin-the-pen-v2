import Footer from "../../containers/sign/signInContainer/Footer.tsx";
import {Stack} from "@mui/material";
import CenterBox from "../../components/layouts/CenterBox.tsx";
import Header from "../../containers/sign/signInContainer/Header.tsx";

function SignIn() {
  return(
    <CenterBox>
      <Stack
        justifyContent="center"
        alignItems="center"
        px={1}
      >
        <Header/>
        <Footer />
      </Stack>

    </CenterBox>
  )
}

export default SignIn;
