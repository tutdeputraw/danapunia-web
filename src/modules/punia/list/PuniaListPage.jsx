import { useEffect, useState } from "react";
import { APIGetPuniaList } from "../../../api/api";
import { PuniaCard } from "../components/PuniaCard";
import { List, Paper } from "@mui/material";

export const PuniaListPage = () => {
    const [puniaPrograms, setPuniaPrograms] = useState([]);

    useEffect(() => {
        fetchPuniaPrograms();
    }, []);

    const fetchPuniaPrograms = async () => {
        const puniaList = await APIGetPuniaList();
        setPuniaPrograms(puniaList);
    }

    return (
        <div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
            {puniaPrograms.map((puniaProgram) => (
                <PuniaCard data={puniaProgram} />
            ))}
            <div style={{ height: '120px' }}></div>
        </div>
    );
}