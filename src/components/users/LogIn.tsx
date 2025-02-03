// "use client";

// import React, { useState } from "react";
// import axios from "axios";
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   Paper,
//   Grid,
//   Snackbar,
//   Alert,
// } from "@mui/material";

// const LoginPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     identifier: "", // Can be mobileNumber or username
//     password: "",
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [loading, setLoading] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     let newErrors: { [key: string]: string } = {};
//     if (!formData.identifier) newErrors.identifier = "Username or Mobile Number is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:5353/api/login", formData, {
//         headers: { "Content-Type": "application/json" },withCredentials:true
        
//       });
//       setSnackbarMessage("Login successful!");
//       setSnackbarSeverity("success");
//       setOpenSnackbar(true);
//       console.log("Login response:", response.data);
//     } catch (error) {
//       setSnackbarMessage("Login failed. Please check your credentials.");
//       setSnackbarSeverity("error");
//       setOpenSnackbar(true);
//       console.error("Login error:", error.response?.data || error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={4} sx={{ padding: 4, borderRadius: 3, marginTop: 5 }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Login
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Username or Mobile Number"
//               name="identifier"
//               value={formData.identifier}
//               onChange={handleChange}
//               error={!!errors.identifier}
//               helperText={errors.identifier}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               error={!!errors.password}
//               helperText={errors.password}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               onClick={handleSubmit}
//               disabled={loading}
//               sx={{ padding: 1.5, fontSize: "1rem" }}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>

//       {/* Snackbar for success/failure messages */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={4000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default LoginPage;




















"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.identifier) newErrors.identifier = "Username or Mobile Number is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await signIn("credentials", {
        identifier: formData.identifier,
        password: formData.password,
        redirect: false, // Prevents auto-redirect
      });
     console.log(res);
     
      if (res?.error) {
        setSnackbarMessage("Login failed. Check credentials.");
        setSnackbarSeverity("error");
      } else {
        setSnackbarMessage("Login successful!");
        setSnackbarSeverity("success");
        // window.location.href = "/dashboard"; // Redirect to dashboard
      }
    } catch (error) {
      console.error("Login error:", error);
      setSnackbarMessage("An error occurred. Try again.");
      setSnackbarSeverity("error");
    } finally {
      setOpenSnackbar(true);
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ padding: 4, borderRadius: 3, marginTop: 5 }}>
        <Typography variant="h5" align="center" gutterBottom>Login</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username or Mobile Number"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              error={!!errors.identifier}
              helperText={errors.identifier}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              disabled={loading}
              sx={{ padding: 1.5, fontSize: "1rem" }}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Snackbar for success/failure messages */}
      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert severity={snackbarSeverity} onClose={handleCloseSnackbar} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginPage;
