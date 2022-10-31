
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
  length,
  border,
  color
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
      {
        label && <InputLabel sx={{
          color: "#666 !important"
        }} id={labelId}>{label}</InputLabel>
      }
      
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select labelId={labelId} label={label} value={value}  onChange={onChange} sx={{
            backgroundColor: `${color}`,
            border: `${border} !important`,
            borderRadius: "5px",
            "& .MuiSelect-select": {
                height: "1.8rem !important",
                width: `${length}rem !important`,
                padding: "0 !important"
              },
            outline: "none"
          }}>
            {children}
          </Select>
        )}
      />
    </Box>
  );
};
export default ReactHookFormWithSelect;