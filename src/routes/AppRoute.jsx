
import { BrowserRouter as Router, Routes, Route, redirect, Navigate } from 'react-router-dom';
import { Error404NotFound } from '../helpers/errors/error.404';
import { routeAuthSignIn, routeAuthSignUpOrganizationAdmin, routeAuthSignUpPendharmaPunia, routeDashboardOrganizationAdmin, routeDashboardPendharmaPunia, routePunia, routePuniaCreate, routePuniaDetail } from './AppRouteName';
import { SignInPage } from '../modules/auth/sign_in/SignInPage';
import { SignUpPendharmaPuniaPage } from '../modules/auth/sign_up/pendharma_punia/SignUpPendharmaPuniaPage';
import { SignUpOrganizationAdminPage } from '../modules/auth/sign_up/organization_admin/SignUpOrganizationAdminPage';
import { PuniaListPage } from '../modules/punia/list/list/PuniaListPage';
import { PuniaDetailPage } from '../modules/punia/detail/detail/PuniaDetailPage';
import { AuthPage } from '../modules/auth/auth/AuthPage';
import { RootPage } from '../modules/root/RootPage';
import { PuniaCreateOrganizationAdmin } from '../modules/punia/create/organization_admin/PuniaCreateOrganizationAdmin';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    // element={<Navigate to={routeDashboardPendharmaPunia} />}
                    element={<RootPage />}
                />
                <Route
                    path="*"
                    element={<Error404NotFound />}
                />

                <Route
                    exact
                    path={routeAuthSignIn}
                    element={<SignInPage />}
                />
                <Route
                    exact
                    path={routeAuthSignUpPendharmaPunia}
                    element={<SignUpPendharmaPuniaPage />}
                />
                <Route
                    exact
                    path={routeAuthSignUpOrganizationAdmin}
                    element={<SignUpOrganizationAdminPage />}
                />

                <Route
                    exact
                    path={routePunia}
                    element={<PuniaListPage />}
                />
                <Route
                    exact
                    path={routePuniaDetail}
                    element={<PuniaDetailPage />}
                />
                <Route
                    exact
                    path={routePuniaCreate}
                    element={<PuniaCreateOrganizationAdmin />}
                />

                {/* <Route
                    exact
                    path={routeDashboardPendharmaPunia}
                    element={<DashboardPendharmaPuniaPage />}
                />
                <Route
                    exact
                    path={routeDashboardOrganizationAdmin}
                    element={<ProtectedComponent Component={DashboardOrganizationAdminPage} />}
                /> */}
            </Routes>
        </Router>
    );
}