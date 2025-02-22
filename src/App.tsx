 import { Route, Routes } from 'react-router'
import './App.css'
import AuthLayout from './_auth/authLayout'
import SignIn from './_auth/forms/sign-in'
import SignUp from './_auth/forms/sign-up'
 import RootLayout from "./_root/rootLayout.tsx";
 import Home from "./_root/home.tsx";
 import Explore from "./_root/pages/explore.tsx";
 import CreatePost from "./_root/pages/createPost.tsx";
 import People from "./_root/pages/people.tsx";
 import Logout from "./_root/pages/logout.tsx";
 import Profile from "./_root/pages/Profile.tsx";

function App() { 

  return (
    <main className=''> 
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

          <Route element={<RootLayout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/explore" element={<Explore/>}/>
              <Route path="/people" element={<People/>}/>
              <Route path="/saved" element={<Explore/>}/>
              <Route path="/create-post" element={<CreatePost/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/profile" element={<Profile/>}/>
          </Route>
      </Routes>
    </main>
  )
}

export default App
