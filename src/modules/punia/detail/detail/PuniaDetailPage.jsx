import AuthStore from "../../../auth/auth/AuthStore";
import { useEffect, useState } from "react";
import { LoadingComponent } from "../../../../components/LoadingComponent";
import { AUTH_CONSTANT_ROLE_ORGANIZATION_ADMIN, AUTH_CONSTANT_ROLE_PENDHARMA_PUNIA } from "../../../auth/constants/AuthConstant";
import { PuniaDetailOrganizationAdminPage } from "../organization_admin/PuniaDetailOrganizationAdminPage";
import { PuniaDetailPendharmaPuniaPage } from "../pendharma_punia/PuniaDetailPendharmaPuniaPage";

export const PuniaDetailPage = () => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        const initRole = async () => setRole(await AuthStore.getUserRole());
        initRole();
    }, [])


    switch (role) {
        case AUTH_CONSTANT_ROLE_ORGANIZATION_ADMIN:
            return <PuniaDetailOrganizationAdminPage />
        case AUTH_CONSTANT_ROLE_PENDHARMA_PUNIA:
            return <PuniaDetailPendharmaPuniaPage />
        default:
            return <LoadingComponent />;
    }
}