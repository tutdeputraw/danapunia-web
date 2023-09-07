import { useParams } from "react-router-dom";

export const PuniaDetailPendharmaPunia = () => {
    const { id } = useParams();
    return (
        <div>
            PuniaPendharmaPuniaDetail {id}
        </div>
    );
}