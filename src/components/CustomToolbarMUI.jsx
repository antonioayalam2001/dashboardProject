import {GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton} from "@mui/x-data-grid";

export const CustomToolbarMUI = () => {
    return (
        <GridToolbarContainer>
            <GridToolbarExport color={"secondary"}/>
            <GridToolbarFilterButton/>
            <GridToolbarDensitySelector/>
        </GridToolbarContainer>
    );
}