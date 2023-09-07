import AuthStore from "../../../auth/auth/AuthStore";
import { useEffect, useState } from "react";
import { LoadingComponent } from "../../../../components/LoadingComponent";
import { AUTH_CONSTANT_ROLE_ORGANIZATION_ADMIN, AUTH_CONSTANT_ROLE_PENDHARMA_PUNIA } from "../../../auth/constants/AuthConstant";
import { PuniaDetailOrganizationAdmin } from "../organization_admin/PuniaDetailOrganizationAdmin";
import { PuniaDetailPendharmaPunia } from "../pendharma_punia/PuniaDetailPendharmaPunia";

export const PuniaDetailPage = () => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        const initRole = async () => setRole(await AuthStore.getUserRole());
        initRole();
    }, [])


    switch (role) {
        case AUTH_CONSTANT_ROLE_ORGANIZATION_ADMIN:
            return <PuniaDetailOrganizationAdmin />
        case AUTH_CONSTANT_ROLE_PENDHARMA_PUNIA:
            return <PuniaDetailPendharmaPunia />
        default:
            return <LoadingComponent />;
    }
}