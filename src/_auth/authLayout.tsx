 import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='h-screen w-screen grid md:grid-cols-2 overflow-hidden'>
        <section className=''>
            <Outlet/>
        </section>

        <section className='bg-[url(https://picsum.photos/800/800)] h-[100vh] bg-cover bg-no-repeat hidden md:block'>

        </section>
    </div>
  )
}

export default AuthLayout