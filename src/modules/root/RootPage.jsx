import { useEffect, useState } from "react"
import AuthStore from "../auth/auth/AuthStore"
import { DashboardOrganizationAdminPage } from "../dashboard/organization_admin/DashboardOrganizationAdminPage"
import { DashboardPendharmaPuniaPage } from "../dashboard/pendharma_punia/DashboardPendharmaPuniaPage"
import { LoadingComponent } from "../../components/LoadingComponent"
import { AUTH_CONSTANT_ROLE_ORGANIZATION_ADMIN, AUTH_CONSTANT_ROLE_PENDHARMA_PUNIA } from "../auth/constants/AuthConstant"

export const RootPage = () => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        const getUserRole = async () => setRole(await AuthStore.getUserRole());
        getUserRole();
    }, [])


    switch (role) {
        case AUTH_CONSTANT_ROLE_ORGANIZATION_ADMIN:
            return <DashboardOrganizationAdminPage />
        case AUTH_CONSTANT_ROLE_PENDHARMA_PUNIA:
            return <DashboardPendharmaPuniaPage />
        default:
            return <LoadingComponent />
    }
}