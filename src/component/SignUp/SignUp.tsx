import * as React from "react";
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
import { loginService } from "../../services/loginService";
import { Controller, useForm } from "react-hook-form";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import CountrySelect from "../SelectCountry";
import { styled } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (values:any) => {
    console.log(values);
    // loginService(values);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <Grid container >
              <FormControl>
              <FormLabel sx={{textAlign:'start'}} id="demo-row-radio-buttons-group-label">Looking for?*</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel sx={{
                  color:'#c1c1c2',
                  background:'#eeeeee',
                  paddingY:1,
                  paddingX:2
                  ,borderRadius:'10px',
                  '&$checked': {
                    color: 'red',
                  },
                 }} value="female" control={<Radio />} label="Female" />
                <FormControlLabel sx={{color:'#c1c1c2',background:'#eeeeee',paddingY:1,paddingX:2,borderRadius:'10px'}} value="male" control={<Radio />} label="Male" />
               
              </RadioGroup>
            </FormControl>
              </Grid>
        
              <Grid container>
                <Grid item sm={12} md={12} lg={12}>
                  <InputLabel sx={{color:'black',textAlign:'start'}} variant="standard">Company Name</InputLabel>
                  <TextField
                  placeholder="Enter Company Name"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    borderRadius:'10px',
                   background:'#eeeeee',
                   paddingY:1,paddingX:2
                  }}
                    margin="normal"
                    required
                    fullWidth
                    
                    type="text"
                    id="address"
                    autoComplete="current-password"
                    {...register("adress")}
                  />
                </Grid>
                <Grid item sm={12} md={12} lg={12}>
                  <InputLabel sx={{color:'black',textAlign:'start'}} variant="standard">Address</InputLabel>
                  <TextField
                  placeholder="Enter Complete Address"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    borderRadius:'10px',
                   background:'#eeeeee',
                   paddingY:1,paddingX:2
                  }}
                    margin="normal"
                    required
                    fullWidth
                    
                    type="text"
                    id="address"
                    autoComplete="current-password"
                    {...register("adress")}
                  />
                </Grid>
                <Grid container>
                  
                  <Grid item sm={6} md={6} lg={6}>
                  
                    <CountrySelect/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item></Grid>
              </Grid>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
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


// function SignUp() {
//   return (
//     <Grid container sx={{ height: "100vh" }}>
//       <Grid item xl={6} component={Paper} sx={{ height: "100vh" }}>
//         <Box
//           sx={{
//             my: 20,
//             mx: 4,
//             display: "flex",
//             textAlign: "start",
//             height: "50vh",
//             flexDirection: "column",
//           }}
//         >
//           <Typography
//             component="h1"
//             variant="h1"
//             sx={{ fontSize: 40, fontWeight: "bold" }}
//           >
//             Sing Up
//           </Typography>
//           <Typography component="h6" variant="h6" sx={{ fontSize: 12 }}>
//             Already have an account ? <span> Log in</span>
//           </Typography>
//           <br />
//           <br />
//           <Typography
//             component="h5"
//             variant="h5"
//             sx={{ fontSize: 12, fontWeight: "bold" }}
//           >
//             Looking for ?
//           </Typography>
//           <Grid container>
//             <Grid item xs={12} sm={6} md={6} xl={6}>
//                 <Box >
//                 <FormControlLabel
//                 value="female"
//                 control={<Radio />}
//                 label="Female"
//               />
//                 </Box>
                
//               </Grid>
//             <Grid item xs={12} sm={6} md={6} xl={6} >
//             <FormControlLabel value="male" control={<Radio />} label="Male" />
//             </Grid>
            
//           </Grid>
//           {/* <FormControl>
//             <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//             <RadioGroup
//               aria-labelledby="demo-radio-buttons-group-label"
//               defaultValue="female"
//               name="radio-buttons-group"
//             >
//               <FormControlLabel
//                 value="female"
//                 control={<Radio />}
//                 label="Female"
//               />
//               <FormControlLabel value="male" control={<Radio />} label="Male" />
              
//             </RadioGroup>
//           </FormControl> */}

//         </Box>
//       </Grid>
//       <Grid
//         item
//         xs={false}
//         sm={4}
//         md={7}
//         xl={6}
//         sx={{
//           backgroundImage: "url(https://source.unsplash.com/random)",
//           backgroundRepeat: "no-repeat",
//           backgroundColor: (t) =>
//             t.palette.mode === "light"
//               ? t.palette.grey[50]
//               : t.palette.grey[900],
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />
//     </Grid>
//   );
// }

// export default SignUp;
