import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Controller, useForm } from "react-hook-form";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useCallback, useMemo } from "react";

import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useState } from "react";
import "./signUp.css";
import CountrySelect from "../SelectCountry";
import * as yup from "yup";

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors: any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "&.MuiFormControlLabel-root ": {
    border: "1px solid black",
    padding: "0px 25px",
    borderRadius: "15px",
    backgroundColor: "#eeeeee",
  },
}));

// const WhiteBorderTextField = styled(TextField)`
//   & label.Mui-focused {
//     color: black;
//   }
//   & .MuiOutlinedInput-root {
//     &.Mui-focused fieldset {
//       border-color: white;
//     }
//     &.Mui
//   }
// `;

export default function SignUp() {
  const [value, setValue] = useState<string | undefined>();
  const [country, setCountry] = useState("");

  const validationSchema = yup.object().shape({
    address: yup.string().required("address required"),
    name: yup.string().required("company name required"),
    siren: yup.string().required("siren required"),
    // country: yup.string().required("country required"),
    // phone:yup.string().required('Please enter your phone number'),
  });

  const resolver = useYupValidationResolver(validationSchema);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    resolver,
    defaultValues: {
      role: "",
      name: "",
      address: "",
      phone: "",
      siren:"",
      country:""
    },
  });

  const onSubmit = (values: any) => {
    const data = { ...values, phone: value, country };
    console.log(data);
    // loginService(values);
  };

  const callbackFunc = (value: any) => {
    setCountry(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          square
          p={8}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{ fontSize: 40, fontWeight: "bold", mb: "8px" }}
            >
              Sing Up
            </Typography>
            <Typography component="h6" variant="h6" sx={{ fontSize: 12 }}>
              Already have an account ? <span> Log in</span>
            </Typography>
            <br />
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <Grid container>
                <FormControl component="fieldset">
                  <FormLabel sx={{ textAlign: "start" }} component="legend">
                    Looking for?*
                  </FormLabel>
                  <Controller
                    rules={{ required: true }}
                    control={control}
                    name="role"
                    render={({ field }) => (
                      <RadioGroup {...field} row>
                        <FormControlLabel
                          value="client"
                          control={<Radio />}
                          label="Client"
                        />
                        <FormControlLabel
                          value="retailer"
                          control={<Radio />}
                          label="Retailer"
                        />
                      </RadioGroup>
                    )}
                  />
                </FormControl>
              </Grid>
              <Box sx={{ mt: 3 }} />
              <Grid container>
                <Grid item sm={12} md={12} lg={12}>
                  <InputLabel
                    sx={{ color: "black", textAlign: "start" }}
                    variant="standard"
                  >
                    Company Name*
                  </InputLabel>
                  <TextField
                    placeholder="Enter Company Name"
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{
                      borderRadius: "10px",
                      background: "#eeeeee",
                      paddingY: 1,
                      paddingX: 2,
                    }}
                    margin="normal"
                    required
                    fullWidth
                    type="text"
                    id="company"
                    autoComplete="current-password"
                    {...register("name")}
                  />
                  {errors.name && (
                    <span role="alert">
                      {errors.name.message?.toString()}
                    </span>
                  )}
                </Grid>

                <Grid item sm={12} md={12} lg={12}>
                  <InputLabel
                    sx={{ color: "black", textAlign: "start" }}
                    variant="standard"
                  >
                    SIREN*
                  </InputLabel>
                  <TextField
                    placeholder="Enter SIREN or equivalent"
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{
                      borderRadius: "10px",
                      background: "#eeeeee",
                      paddingY: 1,
                      paddingX: 2,
                    }}
                    margin="normal"
                    required
                    fullWidth
                    type="text"
                    id="siren"
                    autoComplete="current-password"
                    {...register("siren")}
                  />
                   {errors.siren && (
                    <span role="alert">
                      {errors.siren.message?.toString()}
                    </span>
                  )}
                </Grid>

                <Box sx={{ mt: 14 }} />
                <Grid item sm={12} md={12} lg={12}>
                  <InputLabel
                    sx={{ color: "black", textAlign: "start" }}
                    variant="standard"
                  >
                    Address*
                  </InputLabel>
                  <TextField
                    placeholder="Enter complete address"
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{
                      borderRadius: "10px",
                      background: "#eeeeee",
                      paddingY: 1,
                      paddingX: 2,
                    }}
                    margin="normal"
                    required
                    fullWidth
                    type="text"
                    id="address"
                    autoComplete="current-password"
                    {...register("address")}
                  />
                  {errors.address && (
                    <span role="alert">
                      {errors.address.message?.toString()}
                    </span>
                  )}
                </Grid>
                <Grid container>
                  <Grid item sm={6} md={6} lg={6}>
                    <CountrySelect callbackFunc={callbackFunc} />
                    {errors.country && (
                    <span role="alert">
                      {errors.country.message?.toString()}
                    </span>
                  )}
                  </Grid>
                </Grid>
                <Box sx={{ mt: 8 }} />
                <Grid item sm={12} md={8} lg={8}>
                  <InputLabel
                    sx={{ color: "black", textAlign: "start" }}
                    variant="standard"
                  >
                    Phone
                  </InputLabel>
                  
                  {/* <FormControl sx={{display:"flex" , alignItems:"start"}}>                  
                
                  <Controller
                    rules={{ required: true }}
                    control={control}
                    name="phone"
                    render={({ field }) => (
                      <PhoneInput
                      {...register("phone")}
                      country={"us"}
                      value="phone"                     
                      onChange={(value) => {
                        setValue(value);
                      }}
                      />
                    )}
                  />
                </FormControl> */}
                  {/* <Controller
                    control={control}
                    name="phone"
                    rules={{ required: true }}
                    render={() => (
                      <PhoneInput
                      {...register("phone")}
                      country={"us"}
                      value="phone"                     
                      onChange={(value) => {
                        console.log(value);
                        setValue(value);
                      }}
                      />
                    )}
                  /> */}

                  <Box sx={{ backgroundColor: "#eeeeee" }}>
                    <PhoneInput
                      {...register("phone")}
                      country={"us"}
                      value="phone"
                      onChange={(value) => {
                        console.log(value);
                        setValue(value);
                      }}
                    />
                  </Box>
                  {errors.phone && (
                    <span role="alert">
                      {errors.phone.message?.toString()}
                    </span>
                  )}
                </Grid>
              </Grid>

              <Grid container>
                <Grid item>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#0F236E",
                      borderRadius: "24px",
                      maxWidth: "120px",
                      px: "36px",
                    }}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
