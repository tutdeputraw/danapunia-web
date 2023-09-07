import { useParams } from "react-router-dom";

export const PuniaDetailPendharmaPuniaPage = () => {
    const { id } = useParams();
    return (
        <div>
            PuniaPendharmaPuniaDetail {id}
        </div>
    );
}