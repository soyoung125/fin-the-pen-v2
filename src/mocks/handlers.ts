// src/mocks/handlers.js
import {rest} from 'msw'
import {getSessionStorage, setSessionStorage} from "../utils/storage.ts";
import {SESSION_STORAGE_KEY_IS_AUTHENTICATED} from "../constants/keys.ts";

export const handlers = [

  rest.post('/fin-the-pen-web/sign-in', (req, res, ctx) => {
    alert('서버가 정상적으로 동작하지 않지만 게스트 모드로 로그인 합니다.')
    setSessionStorage(SESSION_STORAGE_KEY_IS_AUTHENTICATED, true); //JWT나 Basic으로 이전 예정

    return res(
      ctx.status(200),
      ctx.delay(1000),
    )
  }),

  rest.post('/fin-the-pen-web/user', (req, res, ctx) => {
    const isAuthenticated = getSessionStorage<boolean>(SESSION_STORAGE_KEY_IS_AUTHENTICATED, false)
    if (isAuthenticated) {
      console.log('is-authenticated')
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
    }
    return res(
      ctx.status(403),
      ctx.delay(100),
    )
  }),

]
