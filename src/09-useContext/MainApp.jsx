import { Routes, Route, Navigate } from 'react-router-dom'
import{ HomePage, AboutPage, LoginPage, Navbar } from './'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
    return (
        <UserProvider>

            <Navbar />

            <hr />
            
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="about" element={ <AboutPage /> } />
                <Route path="login" element={ <LoginPage /> } />

                {/* <Route path="/*" element={ <LoginPage /> } /> */}
                <Route path="/*" element={ <Navigate to="/about" /> } /> {/*This line link the user when there is a wrong direction */}
            </Routes>

        </UserProvider>
    )
}
