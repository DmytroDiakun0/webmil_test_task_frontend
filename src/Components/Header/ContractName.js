import {Box} from "@mui/material";

function ContractName(props) {
    return (
        <Box className={props.className}>{props.contractName}</Box>
    );
}

export default ContractName;