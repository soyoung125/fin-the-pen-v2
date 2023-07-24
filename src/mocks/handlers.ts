// src/mocks/handlers.js
import {rest} from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')

    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),

  rest.post('/fin-the-pen-web/sign-in', (req, res, ctx) => {
    alert('서버가 정상적으로 동작하지 않지만 게스트 모드로 로그인 합니다.')

    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        id: -1,
        user_id: 'guest@finthepen.com',
        name: '게스트',
        bday: '2023-07-25',
        registerDate: '2023-01-01',
        phone_number: '010-1234-5678'
      })
    )
  }),

]
