import { Box, Button, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import ReactHookFormWithSelect from './ReactHookFormWithSelect'

const CustomizedTable = () => {
    const { control, watch, handleSubmit,  setValue } = useForm({
        test: [
            { ITEM: "mr. a", DESCRIPTION: "aaaaa", QTY: "1", COST: "1000", AMOUNT: "1000", MARKUP: "0", TOTAL: "1000", TAX: "NON" },
            { ITEM: "mr. a", DESCRIPTION: "aaaaa", QTY: "1", COST: "1000", AMOUNT: "1000", MARKUP: "0", TOTAL: "1000", TAX: "NON" },
            { ITEM: "mr. a", DESCRIPTION: "aaaaa", QTY: "1", COST: "1000", AMOUNT: "1000", MARKUP: "0", TOTAL: "1000", TAX: "NON" },
            { ITEM: "mr. a", DESCRIPTION: "aaaaa", QTY: "1", COST: "1000", AMOUNT: "1000", MARKUP: "0", TOTAL: "1000", TAX: "NON" },
            { ITEM: "mr. a", DESCRIPTION: "aaaaa", QTY: "1", COST: "1000", AMOUNT: "1000", MARKUP: "0", TOTAL: "1000", TAX: "NON" },
            { ITEM: "mr. a", DESCRIPTION: "aaaaa", QTY: "1", COST: "1000", AMOUNT: "1000", MARKUP: "0", TOTAL: "1000", TAX: "NON" },
            { ITEM: "mr. a", DESCRIPTION: "aaaaa", QTY: "1", COST: "1000", AMOUNT: "1000", MARKUP: "0", TOTAL: "1000", TAX: "NON" },
            { ITEM: "mr. a", DESCRIPTION: "aaaaa", QTY: "1", COST: "1000", AMOUNT: "1000", MARKUP: "0", TOTAL: "1000", TAX: "NON" },
            { ITEM: "mr. a", DESCRIPTION: "aaaaa", QTY: "1", COST: "1000", AMOUNT: "1000", MARKUP: "0", TOTAL: "1000", TAX: "NON" },
            { ITEM: "mr. a", DESCRIPTION: "aaaaa", QTY: "1", COST: "1000", AMOUNT: "1000", MARKUP: "0", TOTAL: "1000", TAX: "NON" },
        ]
    })

    const { fields } = useFieldArray(  //field array that controls each row
        {
            control,
            name: "test"
        }
    );

    const stage = watch();



  return (
    <Box sx={{ width: "100%" }}>
        <Table sx={{ width: "100%" }}>
            <TableHead>
              <TableRow sx={{ 
                    "& .MuiTableCell-head": {
                        borderRight: "1px dotted #acacac !important"
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

            <TableBody>
              {
                fields.map((row, index) => {
                return (
                  <TableRow key={row.id} sx={{ 
                    backgroundColor: `${index % 2 === 1 ? "#e3effe" : "white"}`,
                    "& .MuiInputBase-input::after": {
                        borderBottom: "none !important"
                    }
                }}>
                    <TableCell>
                        <ReactHookFormWithSelect
                            name={`test[${index}].ITEM`}
                            control={control}
                            variant="outlined"
                            margin="normal"
                            justifyContent="flex-end"
                            flexDirection="row"
                            alignItems="end"
                            >
                                <MenuItem value="mr.a">Mr. A</MenuItem>
                                <MenuItem value="mr.b">Mr. B</MenuItem>
                                <MenuItem value="mr.c">Mr. C</MenuItem>
                                <MenuItem value="mr.d">Mr. D</MenuItem>
                                <MenuItem value="mr.e">Mr. E</MenuItem>
                        </ReactHookFormWithSelect>
                    </TableCell>

                    <TableCell>
                      <Controller
                        name={`test[${index}].DESCRIPTION`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{ pointerEvents: "none" }}
                                {...field}
                                value={test[index].DESCRIPTION}
                            />
                        )}
                      />
                    </TableCell>
                    <TableCell>
                        <Controller
                            name={`test[${index}].QTY`}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    variant="standard"
                                    // sx={{ pointerEvents: "none" }}
                                    {...field}
                                />
                            )}
                        />
                    </TableCell>
                    <TableCell>
                      <Controller
                        name={`test[${index}].Quantity`}
                        control={control}
                        render={({ field }) => (
                          <TextField
                            variant="standard"
                            {...field}
                           onChange={(e)=> { setValue(`test[${index}].Total`, ((stage.test[index].Currency_1 || 0) * e.target.value).toString()); field.onChange(e.target.value) } }
                          />
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <Controller
                        name={`test[${index}].Total`}
                        control={control}
                        render={({ field }) => (
                          <TextField
                            variant="standard"
                            sx={{ pointerEvents: "none" }}
                            {...field}
                          />
                        )}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
        </Table>
    </Box>
  )
}

export default CustomizedTable