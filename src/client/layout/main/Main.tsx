import Pill from "components/badge/pill/Pill";
import Table from "components/table/Table";
import { FunctionComponent, useEffect } from "react";
import { Switch, useHistory } from "react-router-dom";

const tablemock = {
    columns: ["Column1", "Column2", "Column3",],
    rows: [["CellA1", "CellA2", "CellA3"], ["CellA1", "CellA2", "CellA3"], ["CellA1", "CellA2", "CellA3"]]
}

interface MainProps {

}

const Main: FunctionComponent<MainProps> = () => {
    const history = useHistory();

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        return () => unlisten();
    }, [history]);

    return (
        <main>
            <Pill label="NUEVO" />
            <Table {...tablemock} />
            <Switch>

            </Switch>
        </main>
    );
}

export default Main;