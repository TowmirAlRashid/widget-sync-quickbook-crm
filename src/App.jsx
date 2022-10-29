import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {DatePicker} from '@mui/x-date-pickers';


function App() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }


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
                justifyContent: "flex-end"
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
                      gap: "4px"
                    }}
                  >
                    <label htmlFor="date">DATE</label>
                    <Controller 
                      name="DATE"
                      control={control}
                      render={({ field: { ref, ...rest } }) => (
                        <TextField id="date" variant="outlined" type="date" format="MM/dd/yyyy" sx={{
                            backgroundColor: "#efefef",
                            border: "1px solid #c0c0c0",
                            borderRadius: "5px",
                            "& .MuiInputBase-root": {
                              height: "2.5rem !important"
                            }
                          }} 
                          {...rest}
                        />
                      )}
                    />
                  </Box>

                  <Box      //estimate
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px"
                    }}
                  >
                    <label htmlFor="estimate">ESTIMATE #</label>
                    <Controller 
                      name="ESTIMATE"
                      control={control}
                      render={({ field: { ref, ...rest } }) => (
                        <TextField id="estimate" variant="outlined" type="number" sx={{
                            backgroundColor: "#efefef",
                            border: "1px solid #c0c0c0",
                            borderRadius: "5px",
                            "& .MuiInputBase-root": {
                              height: "2.5rem !important"
                            }
                          }} 
                          {...rest}
                        />
                      )}
                    />
                  </Box>
                </Box>

                <Box            // div to hold the USTOMER / BILL TO textfield
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
                    <label htmlFor="customer_bill_to">CUSTOMER / BILL TO</label>
                    <Controller 
                      name="Customer_Bill/To"
                      control={control}
                      render={({ field: { ref, ...rest } }) => (
                        <TextField id="customer_bill_to" multiline={true} variant="outlined" type="text" rows="5" sx={{
                            backgroundColor: "#efefef",
                            border: "1px solid #c0c0c0",
                            borderRadius: "5px",
                            "& .MuiInputBase-inputMultiline": {
                              minWidth: "8rem !important"
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
                  <Box      //Date
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "end",
                      gap: "4px"
                    }}
                  >
                    <label htmlFor="ship_to">SHIP TO</label>
                    <TextField id="ship_to" variant="outlined" type="text" sx={{
                      backgroundColor: "#efefef",
                      border: "1px solid #c0c0c0",
                      borderRadius: "5px",
                      "& .MuiInputBase-root": {
                        height: "2.5rem !important"
                      }
                    }} />
                  </Box>
                  <Box>
                    <TextField variant="outlined" multiline={true} type="text" rows="6" sx={{
                        backgroundColor: "#efefef",
                        border: "1px solid #c0c0c0",
                        borderRadius: "5px"
                      }} />
                  </Box>
                </Box>
              </Box>
              <Box></Box>
            </Box>
          </Box>

          <Button type="submit" variant="outlined">Submit?</Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
