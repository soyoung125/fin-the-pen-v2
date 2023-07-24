import {Box, Button, TextField} from '@mui/material';
import {FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import PATH from '../../../domain/constants/path';
import {useMutation, useQueryClient} from "@tanstack/react-query";

interface Sign {
  user_id: string;
  password: string
}

export const signIn = async (credentials: Sign) =>
  fetch("/fin-the-pen-web/sign-in", {
    method: "POST",
    body: JSON.stringify({
      user_name: credentials.user_id,
      password: credentials.password,
    }),
  });

function SignInFields() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSettled: () => queryClient.invalidateQueries({queryKey: ["user"]}),
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const sign: Sign = {
      user_id: data.get('email') as string,
      password: data.get('password') as string,
    };
    signInMutation.mutate(sign)
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{maxWidth: '400px'}}
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
        color={signInMutation.isLoading ? 'warning' : 'primary'}
        sx={{mt: 3, mb: 2}}
      >
        {signInMutation.isLoading ? <span>Loading...</span> : "로그인"}
      </Button>
      {signInMutation.isError && <span>시스템 에러</span>}

      <Button onClick={() => navigate(PATH.signUp)}>
        계정이 없으신가요?
      </Button>
    </Box>
  );
}

export default SignInFields;
