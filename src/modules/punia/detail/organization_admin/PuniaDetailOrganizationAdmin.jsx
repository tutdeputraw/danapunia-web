import { useParams } from "react-router-dom";

export const PuniaDetailOrganizationAdmin = () => {
    const { id } = useParams();
    return (
        <div>
            PuniaOrganizationAdminDetail {id}
        </div>
    );
}