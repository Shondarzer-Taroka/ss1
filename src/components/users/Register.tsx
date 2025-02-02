
// "use client";

// import React, { useState } from "react";
// import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
// import axios from "axios";
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   Box,
//   Avatar,
//   Grid,
//   Paper,
//   CircularProgress,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { PhotoCamera } from "@mui/icons-material";

// const Input = styled("input")({
//   display: "none",
// });

// const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dw72swggv/image/upload";
// const CLOUDINARY_UPLOAD_PRESET = "my-uploads";

// const RegisterPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobileNumber: "",
//     username: "",
//     password: "",
//     photo: "",
//     role:"student"
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [uploading, setUploading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
//       formData.append("cloud_name", "dw72swggv"); // Add your Cloudinary cloud name
  
//       setUploading(true);
//       try {
//         const response = await axios.post(CLOUDINARY_URL, formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });
  
//         console.log("Cloudinary Upload Response:", response.data); // Debugging log
//         setFormData((prev) => ({ ...prev, photo: response.data.secure_url }));
//       } catch (error) {
//         console.error("Upload failed:", error.response?.data || error);
//         alert("Image upload failed. Please try again.");
//       } finally {
//         setUploading(false);
//       }
//     }
//   };
  
//   const validateForm = () => {
//     let newErrors: { [key: string]: string } = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile number is required";
//     if (!formData.username) newErrors.username = "Username is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;
  
//     try {
//       console.log("Sending data to backend:", formData); // Debugging log
  
//       const response = await axios.post("http://localhost:5353/api/user", formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
  
//       console.log("Registration successful:", response.data);
//       alert("Registration successful!");
//     } catch (error) {
//       console.error("Error during registration:", error.response?.data || error);
//       alert("Registration failed. Please check your API connection.");
//     }
//   };
  

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={4} sx={{ padding: 4, borderRadius: 3, marginTop: 5 }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Create an Account
//         </Typography>
//         <Box display="flex" justifyContent="center" mb={2}>
//           <Avatar src={formData.photo} sx={{ width: 120, height: 120 }} />
//         </Box>
//         <Grid container spacing={2}>
//           <Grid item xs={12} display="flex" justifyContent="center">
//             <label htmlFor="photo-upload">
//               <Input accept="image/*" id="photo-upload" type="file" onChange={handlePhotoChange} />
//               <Button
//                 variant="contained"
//                 component="span"
//                 startIcon={<PhotoCamera />}
//                 disabled={uploading}
//               >
//                 {uploading ? <CircularProgress size={24} /> : "Upload Photo"}
//               </Button>
//             </label>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Full Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               error={!!errors.name}
//               helperText={errors.name}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               error={!!errors.email}
//               helperText={errors.email}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Mobile Number"
//               name="mobileNumber"
//               type="tel"
//               value={formData.mobileNumber}
//               onChange={handleChange}
//               error={!!errors.mobileNumber}
//               helperText={errors.mobileNumber}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               error={!!errors.username}
//               helperText={errors.username}
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
//               sx={{ padding: 1.5, fontSize: "1rem" }}
//             >
//               Register
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default RegisterPage;















"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Paper,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { PhotoCamera } from "@mui/icons-material";

const Input = styled("input")({
  display: "none",
});

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dw72swggv/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "my-uploads";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    username: "",
    password: "",
    photo: "",
    role: "student",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [uploading, setUploading] = useState(false);

  // Snackbar state
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      formData.append("cloud_name", "dw72swggv");

      setUploading(true);
      try {
        const response = await axios.post(CLOUDINARY_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Cloudinary Upload Response:", response.data);
        setFormData((prev) => ({ ...prev, photo: response.data.secure_url }));
      } catch (error) {
        console.error("Upload failed:", error.response?.data || error);
        setSnackbarMessage("Image upload failed. Please try again.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      } finally {
        setUploading(false);
      }
    }
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile number is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      console.log("Sending data to backend:", formData);

      const response = await axios.post("http://localhost:5353/api/user", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Registration successful:", response.data);
      setSnackbarMessage("Registration successful!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error);
      setSnackbarMessage("Registration failed. Please check your API connection.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ padding: 4, borderRadius: 3, marginTop: 5 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Create an Account
        </Typography>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar src={formData.photo} sx={{ width: 120, height: 120 }} />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <label htmlFor="photo-upload">
              <Input accept="image/*" id="photo-upload" type="file" onChange={handlePhotoChange} />
              <Button
                variant="contained"
                component="span"
                startIcon={<PhotoCamera />}
                disabled={uploading}
              >
                {uploading ? <CircularProgress size={24} /> : "Upload Photo"}
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              type="tel"
              value={formData.mobileNumber}
              onChange={handleChange}
              error={!!errors.mobileNumber}
              helperText={errors.mobileNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
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
              sx={{ padding: 1.5, fontSize: "1rem" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Snackbar for success/failure messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RegisterPage;
