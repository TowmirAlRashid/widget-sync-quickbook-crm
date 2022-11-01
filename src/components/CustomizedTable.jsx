import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react'

const CustomizedTable = ({ control, fields, setValue, selected, setSelected }) => {
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
                    backgroundColor: `${index % 2 === 1 ? "#e3effe" : "white"}`
                  }}
                ></TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </Box>
  )
}

export default CustomizedTable