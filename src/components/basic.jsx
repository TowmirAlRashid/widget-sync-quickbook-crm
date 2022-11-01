import { Box, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import ReactHookFormWithSelect from './ReactHookFormWithSelect'

import data from '../data';

const CustomizedTable = ({ control, fields, setValue, selected, setSelected }) => {

  // const [trigger, setTrigger]= React.useState(false);

  const handleClick = (event, rowIndex) => {
    // console.log(rowIndex)
    // console.log(fields, rowIndex);
    const updated= fields?.map((row, index) => {
      if(index === rowIndex) {
        return {
          ...row,
          editable : true,
        };
      } else {
        return {
          ...row,
          editable: false
        }
      }
    })
    setValue('test', updated);
    // setTrigger(!trigger);
  }

  // React.useEffect(() => {
  //   console.log('hi')
  // }, [trigger]);

  return (
    <Box sx={{ width: "100%" }}>
      {/* {JSON.stringify(fields)} */}
        <Table 
          sx={{ width: "100%", "& .MuiTableCell-root": {
            padding: "0 !important"
          }}}
          
        >
            <TableHead>
              <TableRow sx={{ 
                    "& .MuiTableCell-head:not(:last-child)": {
                        borderRight: "1px dotted #acacac !important",
                        color: "#666 !important",
                    },
                    "& .MuiTableCell-head": {
                      paddingLeft: "6px !important"
                    } 
                }}>
                <TableCell align="left">
                  ITEM
                </TableCell>
                <TableCell align="left">DESCRIPTION</TableCell>
                <TableCell align="left">QTY</TableCell>
                <TableCell align="left">COST</TableCell>
                <TableCell align="left">AMOUNT</TableCell>
                <TableCell align="left">MARKUP</TableCell>
                <TableCell align="left">TOTAL</TableCell>
                <TableCell align="left">TAX</TableCell>
              </TableRow>
            </TableHead>

            <TableBody sx={{
              border: "1px solid black !important"
            }}>
              {
                fields.map((row, index) => {
                  // const isItemSelected = isRowSelected(row.name);
                return (
                  <TableRow 
                    hover
                    // role="checkbox" 
                    key={row.id}  
                    sx={{ 
                      backgroundColor: `${index % 2 === 1 ? "#e3effe" : "white"}`
                    }}
                    // onClick={() => {
                    //   setIsSelected(!isSelected)
                    // }}
                    onClick={(event) => handleClick(event, index)}
                  >
                    <TableCell sx={{ width: "100px", borderRight: "1px solid #c2c2c2 !important", "& .MuiTableCell-body:last-child": { borderBottom: "1px solid black" }}}>
                        {!row.editable  && <span style={{visibility:"hidden"}}>something</span>  }
                        {/* {row.editable ? (
                          <ReactHookFormWithSelect
                            name={`test[${index}].ITEM`}
                            control={control}
                            variant="outlined"
                            margin="normal"
                            justifyContent="flex-end"
                            flexDirection="row"
                            alignItems="end"
                            length={8}
                            border="none"
                            color="white"
                            >
                                <MenuItem value="mr.a">Mr. A</MenuItem>
                                <MenuItem value="mr.b">Mr. B</MenuItem>
                                <MenuItem value="mr.c">Mr. C</MenuItem>
                                <MenuItem value="mr.d">Mr. D</MenuItem>
                                <MenuItem value="mr.e">Mr. E</MenuItem>
                          </ReactHookFormWithSelect>
                        )
                      :
                      <span style={{visibility:"hidden"}}>something</span>} */}
                    </TableCell>

                    <TableCell sx={{borderRight: "1px solid #c2c2c2 !important"}}>
                      {!selected  && ""}
                      {/* { selected  && (
                        <Controller
                          name={`test[${index}].DESCRIPTION`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{ pointerEvents: "none" }}
                                {...field}
                                // value={`test[${index}].DESCRIPTION`}
                                InputProps={{ disableUnderline: true }}
                            />
                          )}
                        />
                      )} */}
                      {/* <Controller
                        name={`test[${index}].DESCRIPTION`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{ pointerEvents: "none" }}
                                {...field}
                                // value={`test[${index}].DESCRIPTION`}
                                InputProps={{ disableUnderline: true }}
                            />
                        )}
                      /> */}
                    </TableCell>
                    <TableCell sx={{borderRight: "1px solid #c2c2c2 !important", width: "150px"}}>
                      {!selected  && ""}
                        {/* <Controller
                            name={`test[${index}].QTY`}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    variant="standard"
                                    {...field}
                                    InputProps={{ disableUnderline: true }}
                                    onChange={(e) => {
                                      // setValue(`test[${index}].AMOUNT`, (Number(`test[${index}].QTY`) * Number(`test[${index}].COST`)))
                                      setValue(`test[${index}].AMOUNT`, (Number(`test[${index}].QTY` || 0) * Number(`test[${index}].COST` || 0)).toString())
                                      field.onChange(e.target.value)
                                    }}
                                />
                            )}
                        /> */}
                    </TableCell>
                    <TableCell sx={{borderRight: "1px solid #c2c2c2 !important", width: "200px"}} align="right">
                      {!selected  && ""}
                      {/* {row.COST} */}
                      {/* <Controller
                        name={`test[${index}].COST`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{ pointerEvents: "none" }}
                                {...field}
                                InputProps={{ disableUnderline: true }}
                            />
                        )}
                      /> */}
                    </TableCell>
                    <TableCell sx={{borderRight: "1px solid #c2c2c2 !important", width: "100px"}} align="right">
                      {!selected  && ""}
                      {/* {row.AMOUNT} */}
                      {/* <Controller
                        name={`test[${index}].AMOUNT`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{ pointerEvents: "none" }}
                                {...field}
                                InputProps={{ disableUnderline: true }}
                            />
                        )}
                      /> */}
                    </TableCell>
                    <TableCell sx={{borderRight: "1px solid #c2c2c2 !important", width: "130px"}} align="right">
                      {!selected  && ""}
                      {/* {row.MARKUP} */}
                      {/* <Controller
                        name={`test[${index}].MARKUP`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{ pointerEvents: "none" }}
                                {...field}
                                InputProps={{ disableUnderline: true }}
                            />
                        )}
                      /> */}
                    </TableCell>
                    <TableCell sx={{borderRight: "1px solid #c2c2c2 !important", width: "100px"}} align="right">
                      {!selected  && ""}
                      {/* {row.TOTAL} */}
                      {/* <Controller
                        name={`test[${index}].TOTAL`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{ pointerEvents: "none" }}
                                {...field}
                                InputProps={{ disableUnderline: true }}
                            />
                        )}
                      /> */}
                    </TableCell>
                    <TableCell sx={{width: "100px", }}>
                      {!selected  && ""}
                      {/* <ReactHookFormWithSelect
                          name={`test[${index}].TAX`}
                          control={control}
                          variant="outlined"
                          margin="normal"
                          justifyContent="flex-end"
                          flexDirection="row"
                          alignItems="end"
                          length={8}
                          border="none"
                          color="white"
                          >
                              <MenuItem value="mr.a">Mr. A</MenuItem>
                              <MenuItem value="mr.b">Mr. B</MenuItem>
                              <MenuItem value="mr.c">Mr. C</MenuItem>
                              <MenuItem value="mr.d">Mr. D</MenuItem>
                              <MenuItem value="mr.e">Mr. E</MenuItem>
                      </ReactHookFormWithSelect> */}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
        </Table>
    </Box>
  )
}

export default CustomizedTable;