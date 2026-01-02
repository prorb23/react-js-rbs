import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-white text-center bg-gray-600 text-3xl">ContextApi</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
