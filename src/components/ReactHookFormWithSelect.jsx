
import { Box, InputLabel, Select } from "@mui/material";
import { Controller } from "react-hook-form";

const ReactHookFormWithSelect = ({
  name,
  label,
  control,
  children,
  justifyContent,
  flexDirection,
  alignItems,
  length
}) => {
  const labelId = `${name}-label`;
  return (
    <Box sx={{
        display: "flex",
        flexDirection: `${flexDirection}`,
        justifyContent: `${justifyContent}`,
        alignItems: `${alignItems}`,
        gap: "4px"
    }}>
      <InputLabel sx={{
        color: "black !important"
      }} id={labelId}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select labelId={labelId} label={label} value={value}  onChange={onChange} sx={{
            backgroundColor: "#efefef",
            border: "1px solid #c0c0c0",
            borderRadius: "5px",
            "& .MuiSelect-select": {
                height: "1.8rem !important",
                width: `${length}rem !important`,
                padding: "0 !important"
              }
          }}>
            {children}
          </Select>
        )}
      />
    </Box>
  );
};
export default ReactHookFormWithSelect;