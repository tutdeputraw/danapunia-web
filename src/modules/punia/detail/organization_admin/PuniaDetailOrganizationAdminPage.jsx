import { useParams } from "react-router-dom";

export const PuniaDetailOrganizationAdminPage = () => {
    const { id } = useParams();
    return (
        <div>
            PuniaOrganizationAdminDetail {id}
        </div>
    );
}