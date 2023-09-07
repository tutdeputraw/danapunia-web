import { useEffect, useState } from "react";
import { APIGetPuniaList } from "../../../../api/api";
import { PuniaListPage } from "../list/PuniaListPage";
import { useNavigate } from "react-router-dom";
import { routePuniaDetailCall } from "../../../../routes/AppRouteName";

export const PuniaListOrganizationAdminPage = () => {
    const navigate = useNavigate();
    const [puniaPrograms, setPuniaPrograms] = useState([]);

    useEffect(() => {
        fetchPuniaPrograms();
    }, []);

    const fetchPuniaPrograms = async () => {
        const puniaList = await APIGetPuniaList();
        setPuniaPrograms(puniaList);
    }

    const cardOnClicked = id => {
        navigate(routePuniaDetailCall(id))
        // console.log("OPOSEH", id);
    }

    return (<PuniaListPage
        data={puniaPrograms}
        onclicked={cardOnClicked}
    />);
}