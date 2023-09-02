
import { BrowserRouter as Router, Routes, Route, redirect, Navigate } from 'react-router-dom';
import { Error404NotFound } from '../helpers/errors/error.404';
import { routeAuthSignIn, routeAuthSignUpOrganizationAdmin, routeAuthSignUpPendharmaPunia, routeDashboardOrganizationAdmin, routeDashboardPendharmaPunia, routePunia, routePuniaDetail } from './AppRouteName';
import { SignInPage } from '../modules/auth/sign_in/SignInPage';
import { SignUpPendharmaPuniaPage } from '../modules/auth/sign_up/pendharma_punia/SignUpPendharmaPuniaPage';
import { SignUpOrganizationAdminPage } from '../modules/auth/sign_up/organization_admin/SignUpOrganizationAdminPage';
import { PuniaListPage } from '../modules/punia/list/PuniaListPage';
import { PuniaDetailPage } from '../modules/punia/detail/PuniaDetailPage';
import { DashboardPendharmaPuniaPage } from '../modules/dashboard/pendharma_punia/DashboardPendharmaPuniaPage';
import { DashboardOrganizationAdminPage } from '../modules/dashboard/organization_admin/DashboardOrganizationAdminPage';
import { AuthPage } from '../modules/auth/auth/AuthPage';
import AuthStore from '../modules/auth/auth/AuthStore';
import { ProtectedComponent } from './protected/ProtectedComponent';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to={routeDashboardPendharmaPunia} />}
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
                    path={routeDashboardPendharmaPunia}
                    element={<DashboardPendharmaPuniaPage />}
                />
                <Route
                    exact
                    path={routeDashboardOrganizationAdmin}
                    element={<ProtectedComponent Component={DashboardOrganizationAdminPage} />}
                />
            </Routes>
        </Router>
    );
}