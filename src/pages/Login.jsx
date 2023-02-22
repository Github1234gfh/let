import { _LoginContent } from "../Components/Login/Content"

export const Login = ({token, setToken}) => {
    return (
        <>
					<_LoginContent token={token} setToken={setToken}/>
				</>
    )
}