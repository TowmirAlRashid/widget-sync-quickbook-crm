import { Autocomplete, Box, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import React from 'react'
import { Controller } from 'react-hook-form';

import mainData from '../data';

const CustomizedTable = ({ control, fields, setValue, selected, setSelected, stage }) => {
  const handleClick = (event, rowIndex) => {
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
  }

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

        <TableBody
          sx={{
            border: "1px solid black !important"
          }}
        >
          {
            fields.map((row, index) => {
              return (
                <TableRow
                  key={row.id}  
                  sx={{ 
                    backgroundColor: `${index % 2 === 1 ? "#e3effe" : "white"}`,
                    height: "28px"
                  }}
                  onClick={(event) =>!row.editable && handleClick(event, index)}
                >
                  <TableCell
                    sx={{ 
                      width: "200px",
                      borderRight: "1px solid #c2c2c2 !important", 
                      borderTop: `${row.editable? "1px solid black !important": "none"}`,
                      borderBottom: `${row.editable? "1px solid black !important": "none"}`,
                      "& .MuiTableCell-body:last-child": { 
                        borderBottom: "1px solid black" 
                      },
                    }}
                  >
                    {
                      row.editable ? 
                        <Controller 
                          name={`test[${index}].ITEM`}
                          control={control}
                          render={({ field }) => {
                            return (
                              <Autocomplete 
                                {...field}
                                sx={{
                                  "& .MuiAutocomplete-inputRoot": {
                                    height: "1.8rem !important", 
                                    padding: "0 !important",
                                    backgroundColor: "white !important"
                                  },
                                  "& .MuiInputBase-input": {
                                    padding: "0 !important",
                                    paddingLeft: "6px !important"
                                  },
                                  "& .MuiInputBase-root": {
                                    borderRadius: "0 !important"
                                  }
                                }}
                                disablePortal
                                options={mainData?.map(item => item.item)}
                                getOptionLabel={(option) => option}
                                onChange={(_, data) => {
                                  field.onChange(data)
                                  setValue(`test[${index}].DESCRIPTION`, mainData?.filter(item => item.item === data)?.[0]?.description)
                                  setValue(`test[${index}].COST`, mainData?.filter(item => item.item === data)?.[0]?.cost)
                                  setValue('test', fields.map((row, rowIndex) => {        // need to work here
                                    if (index === rowIndex) {
                                      return {
                                        ...row,
                                        ITEM: data
                                      }
                                    }
                                  }))
                                }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                  />
                                )}
                              />
                            )
                          }}
                        />
                        :
                        row.ITEM
                    }
                  </TableCell>

                  <TableCell
                    sx={{
                      borderRight: "1px solid #c2c2c2 !important",
                      borderTop: `${row.editable? "1px solid black !important": "none"}`,
                      borderBottom: `${row.editable? "1px solid black !important": "none"}`,
                    }}
                  >
                    {
                      row.editable ?
                        <Controller
                          name={`test[${index}].DESCRIPTION`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{ 
                                  pointerEvents: "none",
                                  marginLeft: "5px !important"
                                }}
                                {...field}
                                InputProps={{ disableUnderline: true }}
                            />
                          )}
                        />
                        :
                        row.DESCRIPTION
                    }
                  </TableCell>

                  <TableCell
                    sx={{
                      borderRight: "1px solid #c2c2c2 !important", 
                      borderTop: `${row.editable? "1px solid black !important": "none"}`,
                      borderBottom: `${row.editable? "1px solid black !important": "none"}`,
                      backgroundColor: `${row?.editable ? "white !important" : "inherit"}`,
                      width: "150px"
                    }}
                  >
                    {
                      row.editable ?
                        <Controller
                          name={`test[${index}].QTY`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{marginLeft: "5px !important"}}
                                {...field}
                                InputProps={{ disableUnderline: true }}
                                onChange={(e) => {
                                  field.onChange(e.target.value);
                                  setValue(`test[${index}].AMOUNT`, ((stage.test[index].COST || 0) * e.target.value).toString());
                                  setValue(`test[${index}].TOTAL`, ((Number(stage.test[index].AMOUNT) || 0) + (Number(stage.test[index].MARKUP) || 0)).toString());
                                }}
                            />
                          )}
                        />
                        :
                        row.QTY
                    }
                  </TableCell>

                  <TableCell
                    sx={{
                      borderRight: "1px solid #c2c2c2 !important", 
                      borderTop: `${row.editable? "1px solid black !important": "none"}`,
                      borderBottom: `${row.editable? "1px solid black !important": "none"}`,
                      backgroundColor: `${row?.editable ? "white !important" : "inherit"}`,
                      width: "180px"
                    }} 
                    align="right"
                  >
                    {
                      row.editable ?
                        <Controller
                          name={`test[${index}].COST`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{ pointerEvents: "none", marginLeft: "5px !important", textAlign: 'right !important' }}
                                {...field}
                                InputProps={{ disableUnderline: true }}
                            />
                          )}
                        />
                        :
                        row.COST
                    }
                  </TableCell>

                  <TableCell
                    sx={{
                      borderRight: "1px solid #c2c2c2 !important", 
                      borderTop: `${row.editable? "1px solid black !important": "none"}`,
                      borderBottom: `${row.editable? "1px solid black !important": "none"}`,
                      backgroundColor: `${row?.editable ? "white !important" : "inherit"}`,
                      width: "120px"
                    }} 
                    align="right"
                  >
                    {
                      row.editable ?
                        <Controller
                          name={`test[${index}].AMOUNT`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{ pointerEvents: "none",marginLeft: "5px !important" }}
                                {...field}
                                InputProps={{ disableUnderline: true }}
                            />
                          )}
                        />
                        :
                        row.AMOUNT
                    }
                  </TableCell>

                  <TableCell
                    sx={{
                      borderRight: "1px solid #c2c2c2 !important", 
                      borderTop: `${row.editable? "1px solid black !important": "none"}`,
                      borderBottom: `${row.editable? "1px solid black !important": "none"}`,
                      backgroundColor: `${row?.editable ? "white !important" : "inherit"}`,
                      width: "140px"
                    }} 
                    align="right"
                  >
                    {
                      row.editable ?
                        <Controller
                          name={`test[${index}].MARKUP`}
                          control={control}
                          render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{marginRight: "5px !important"}}
                                {...field}
                                InputProps={{ disableUnderline: true }}
                                onChange={(e) => {
                                  setValue(`test[${index}].TOTAL`, (Number((stage.test[index].AMOUNT) || 0) + Number((e.target.value) || 0)).toString());
                                  field.onChange(e.target.value);
                                }}
                            />
                          )}
                        />
                        :
                        row.MARKUP
                    }
                  </TableCell>

                  <TableCell
                    sx={{
                      borderRight: "1px solid #c2c2c2 !important", 
                      borderTop: `${row.editable? "1px solid black !important": "none"}`,
                      borderBottom: `${row.editable? "1px solid black !important": "none"}`,
                      backgroundColor: `${row?.editable ? "white !important" : "inherit"}`,
                      width: "120px"
                    }} 
                    align="right"
                  >
                    {
                      row.editable ?
                        <Controller
                          name={`test[${index}].TOTAL`}
                          control={control}
                          value={stage.test[index].TOTAL}
                          render={({ field }) => (
                            <TextField
                                variant="standard"
                                sx={{marginRight: "5px !important", pointerEvents: "none"}}
                                {...field}
                                InputProps={{ disableUnderline: true }}
                            />
                          )}
                        />
                        :
                        row.TOTAL
                    }
                  </TableCell>

                  <TableCell
                    sx={{
                      width: "90px", 
                      borderTop: `${row.editable? "1px solid black !important": "none"}`,
                      borderBottom: `${row.editable? "1px solid black !important": "none"}`,
                      backgroundColor: `${row?.editable ? "white !important" : "inherit"}`,
                    }}
                  >
                    {row.TAX}
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </Box>
  )
}

export default CustomizedTable