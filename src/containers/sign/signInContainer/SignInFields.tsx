import { Box, Button, TextField } from '@mui/material';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import PATH from '../../../domain/constants/path';

function SignInFields() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const sign = {
      user_id: data.get('email'),
      password: data.get('password'),
    };
    alert(JSON.stringify(sign))
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ maxWidth: '400px' }}
    >

      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />

      <Button onClick={() => alert('You forget a thousand things every day. Make sure this is one of them :)')}>
        비밀번호를 잊으셨나요?
      </Button>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        로그인
      </Button>

      <Button onClick={() => navigate(PATH.signUp)}>
        계정이 없으신가요?
      </Button>
    </Box>
  );
}
export default SignInFields;
