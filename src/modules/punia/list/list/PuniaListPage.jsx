import { PuniaCard } from "../../components/PuniaCard";
import { ScrollComponent } from "../../../../components/ScrollComponent";

export const PuniaListPage = ({ data, onclicked }) => {
    return (
        <ScrollComponent
            component={
                <div>
                    {data.map((puniaProgram) => (
                        <div onClick={() => onclicked(puniaProgram.id)}>
                            <PuniaCard data={puniaProgram} />
                        </div>
                    ))}
                </div>
            }
        />
    );
}