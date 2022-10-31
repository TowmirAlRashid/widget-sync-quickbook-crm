import { Box, Button, MenuItem, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import ReactHookFormWithSelect from "./components/ReactHookFormWithSelect";
import CustomizedTable from "./components/CustomizedTable";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


function App() {
  // const {  } = useForm();

  const {  control, handleSubmit, watch, setValue  } = useForm({
    defaultValues: {
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
    }
})

const { fields } = useFieldArray(  //field array that controls each row
    {
        control,
        name: "test"
    }
);

  const onSubmit = (data) => {
    console.log(data)
  }

  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData('Frozen yoghurt', 159),
    createData('Ice cream sandwich', 237),
    createData('Eclair', 262),
    createData('Cupcake', 305),
  ];


  return (
    <div className="App">
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box                                                // this div holds the entire app
          sx={{
            width: "94%",
            margin: "20px auto"
          }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box                                              // this div holds the top section with logo and textfields
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            {/* holds the logo */}
            <Box>
              <Typography variant="h3">
                Quote
              </Typography>
            </Box>

            {/* holds the textfields */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                gap: "1rem"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: "2rem"
                }}
              >
                <Box            // div to hold the date and estimate
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}
                >
                  <Box      //Date
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      width: "10rem"
                    }}
                  >
                    <label htmlFor="date" style={{ color: "#666"}}>DATE</label>
                    <Controller 
                      name="DATE"
                      control={control}
                      render={({ field  }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker 
                            onChange={(newValue) => field.onChange(dayjs(newValue).format('MM/DD/YYYY'))}
                            // inputFormat="MM-DD-YYYY" 
                            {...field}
                            renderInput={(params) => <TextField id="date" variant="outlined" type="date" sx={{
                                  backgroundColor: "#efefef",
                                  border: "1px solid #c0c0c0",
                                  borderRadius: "5px",
                                  "& .MuiInputBase-root": {
                                    height: "1.8rem !important",
                                  }
                                }} {...params} required />}
                          />
                        </LocalizationProvider>
                      )}
                    />
                  </Box>

                  <Box      //estimate
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      width: "10rem"
                    }}
                  >
                    <label htmlFor="estimate" style={{ color: "#666"}}>ESTIMATE #</label>
                    <Controller 
                      name="ESTIMATE"
                      control={control}
                      render={({ field: { ref, ...rest } }) => (
                        <TextField id="estimate" variant="outlined" type="number" sx={{
                            backgroundColor: "#efefef",
                            border: "1px solid #c0c0c0",
                            borderRadius: "5px",
                            "& .MuiInputBase-root": {
                              height: "1.8rem !important"
                            }
                          }} 
                          {...rest}
                        />
                      )}
                    />
                  </Box>
                </Box>

                <Box            // div to hold the CUSTOMER / BILL TO textfield
                  sx={{
                    marginTop: "0.5rem"
                  }}
                >
                  <Box      
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px"
                    }}
                  >
                    <label htmlFor="customer_bill_to" style={{ color: "#666"}}>CUSTOMER / BILL TO</label>
                    <Controller 
                      name="Customer_Bill/To"
                      control={control}
                      render={({ field: { ref, ...rest } }) => (
                        <TextField id="customer_bill_to" multiline={true} variant="outlined" type="text" rows="3" sx={{
                            backgroundColor: "#efefef",
                            border: "1px solid #c0c0c0",
                            borderRadius: "5px",
                            "& .MuiTextField-root": {
                              Width: "8rem !important"
                            }
                          }} 
                          {...rest}
                        />
                      )}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "6px",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    gap: "4px"
                  }}
                >
                  <Box      //ship to
                    sx={{
                      marginTop: "-0.6rem"
                    }}
                  >
                    <ReactHookFormWithSelect
                      id="ship_to"
                      name="Ship_To"
                      label="SHIP TO"
                      control={control}
                      variant="outlined"
                      margin="normal"
                      justifyContent="flex-end"
                      flexDirection="row"
                      alignItems="end"
                      length={8}
                      border="1px solid #efefef"
                      color="#efefef"
                    >
                      <MenuItem value="mr.a">Mr. A</MenuItem>
                      <MenuItem value="mr.b">Mr. B</MenuItem>
                      <MenuItem value="mr.c">Mr. C</MenuItem>
                      <MenuItem value="mr.d">Mr. D</MenuItem>
                      <MenuItem value="mr.e">Mr. E</MenuItem>
                    </ReactHookFormWithSelect>
                  </Box>
                  <Box>
                    {/* <TextField variant="outlined" multiline={true} type="text" rows="4" sx={{
                        backgroundColor: "#efefef",
                        border: "1px solid #c0c0c0",
                        borderRadius: "5px"
                      }} /> */}
                      <Controller 
                      name="Ship_to_Textfield"
                      control={control}
                      render={({ field: { ref, ...rest } }) => (
                        <TextField id="ship_to_textfield" multiline={true} variant="outlined" type="text" rows="3" sx={{
                            backgroundColor: "#efefef",
                            border: "1px solid #c0c0c0",
                            borderRadius: "5px",
                            "& .MuiTextField-root": {
                              Width: "8rem !important"
                            }
                          }} 
                          {...rest}
                        />
                      )}
                    />
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                <ReactHookFormWithSelect
                  id="terms&conditions"
                  name="Terms_Conditions"
                  label="TERMS_CONDITIONS"
                  control={control}
                  variant="outlined"
                  margin="normal"
                  flexDirection="column"
                  justifyContent="start"
                  alignItems="start"
                  length={10}
                  border="1px solid #efefef"
                  color="#efefef"
                >
                  <MenuItem value="mr.a">Mr. A</MenuItem>
                  <MenuItem value="mr.b">Mr. B</MenuItem>
                  <MenuItem value="mr.c">Mr. C</MenuItem>
                  <MenuItem value="mr.d">Mr. D</MenuItem>
                  <MenuItem value="mr.e">Mr. E</MenuItem>
                </ReactHookFormWithSelect>

                <ReactHookFormWithSelect
                  id="terms&rep"
                  name="Rep"
                  label="REP"
                  control={control}
                  variant="outlined"
                  margin="normal"
                  flexDirection="column"
                  justifyContent="start"
                  alignItems="start"
                  length={8}
                  border="1px solid #efefef"
                  color="#efefef"
                >
                  <MenuItem value="mr.a">Mr. A</MenuItem>
                  <MenuItem value="mr.b">Mr. B</MenuItem>
                  <MenuItem value="mr.c">Mr. C</MenuItem>
                  <MenuItem value="mr.d">Mr. D</MenuItem>
                  <MenuItem value="mr.e">Mr. E</MenuItem>
                </ReactHookFormWithSelect>

                <Box      
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: 'start',
                      alignItems: "start",
                      gap: "4px",
                      width: "9rem"
                    }}
                  >
                    <label htmlFor="other" style={{ color: "#666"}}>OTHER</label>
                    <Controller 
                      name="Other"
                      control={control}
                      render={({ field: { ref, ...rest } }) => (
                        <TextField id="other" variant="outlined" type="text" sx={{
                            backgroundColor: "#efefef",
                            border: "1px solid #c0c0c0",
                            borderRadius: "5px",
                            "& .MuiInputBase-root": {
                              height: "1.8rem !important"
                            }
                          }} 
                          {...rest}
                        />
                      )}
                    />
                  </Box>
              </Box>
            </Box>
          </Box>

          <Box                                              // this div holds the table
            sx={{
              width: "100%",
              margin: "20px 0"
            }}
          >
            <CustomizedTable
              control={control}
              fields={fields}
              setValue={setValue}
            />
          </Box>

          <Box                                              // this table holds the bottom calculation
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end"
            }}
          >
            <Box sx={{ width: "25%" }}>
            <Table aria-label="simple table" sx={{"& .MuiTableCell-root": {
                padding: "0 !important"
              },
              marginBottom: "30px"
          }}>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, "& .MuiTableCell-root": { borderBottom: "none" } }}
                  >
                    <TableCell component="th" scope="row" align="right">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: "1rem"
            }}
          >
            <Button type="submit" variant="outlined" sx={{ backgroundColor: "#f0f0f0", border: "1px solid #f0f0f0"}}>Save & Close</Button>
            <Button type="submit" variant="contained">Save & New</Button>
            <Button variant="outlined" sx={{ backgroundColor: "#f0f0f0", border: "1px solid #f0f0f0"}}>Clear</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
