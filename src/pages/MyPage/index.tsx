import {useQuery} from "@tanstack/react-query";
import {User} from "../../types";

export const fetchUser = async () =>
  fetch("/fin-the-pen-web/user", {
    method: "POST"
    //   이후 헤더에서 로그인 토큰을 넘겨줘야함
  }).then((res) => res.json());

function MyPage() {
  const {data, isSuccess, isLoading, isError} = useQuery<User>({
    queryKey: ["user"],
    queryFn: fetchUser
  })

  if (isLoading) {
    return <div>⌛</div>;
  }

  return (
    <div>
      <div>
        MyPage
      </div>
      {
        isSuccess && (
          <div>data:{JSON.stringify(data)}</div>
        )
      }
      {
        isError && (
          <div>로그인 하세요</div>
        )
      }
    </div>
  )
}

export default MyPage;
