import { Navigate, redirect, Route } from 'react-router-dom';
import { routeAuthSignIn } from '../AppRouteName';
import AuthStore from '../../modules/auth/auth/AuthStore';

export const ProtectedComponent = ({ props, Component, isAuthenticated, fallbackPath }) => {
    if (isAuthenticated && isAuthenticated || AuthStore.isUserSignedIn()) {
        return <Component {...props} />
    }
    return <Navigate to={fallbackPath ?? routeAuthSignIn} replace />
}