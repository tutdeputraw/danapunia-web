
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../modules/home/Home';
import { Error404NotFound } from '../helpers/errors/error.404';
import { SignIn } from '../modules/auth/SignIn'
import { PPSignUp } from '../modules/auth/PP.SignUp'
import { OASignUp } from '../modules/auth/OA.SignUp'
import { PuniaDetail } from '../modules/punia/detail/PuniaDetail'
import { PuniaList } from '../modules/punia/list/PuniaList'

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error404NotFound />} />

                <Route exact path="/auth/sign-in" element={<SignIn />} />
                <Route exact path="/auth/sign-up/pendharma-punia" element={<PPSignUp />} />
                <Route exact path="/auth/sign-up/organization-admin" element={<OASignUp />} />

                <Route exact path="/punia" element={<PuniaList />} />
                <Route exact path="/punia/:id" element={<PuniaDetail />} />
            </Routes>
        </Router>
    );
}