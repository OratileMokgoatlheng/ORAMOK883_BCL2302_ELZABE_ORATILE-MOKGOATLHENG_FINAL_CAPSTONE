// // LoginForm.tsx
// import React, { useState } from "react";
// import { Input, Button } from "@mui/material";
// import { supabase } from "../store/client";
// import { useNavigate } from "react-router-dom";

// interface LoginFormProps {
//   isSignUp: boolean;
//   onLogin: () => void; // Callback to be called after successful login
// }

// export default function LoginForm({ isSignUp, onLogin }: LoginFormProps) {
//   const [formData, setFormData] = useState<LogginIn>({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [isProcessing, setIsProcessing] = useState(false);

//   function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }

//   async function handleSubmitButton(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     if (isProcessing) {
//       alert("Please wait, request in progress.");
//       return;
//     }

//     setIsProcessing(true);

//     try {
//       if (isSignUp) {
//         const { user, error } = await supabase.auth.signUp({
//           email: formData.email,
//           password: formData.password,
//         });

//         if (error) {
//           alert(error.message);
//         } else {
//           // Save additional user details to the database
//           if (user) {
//             const { username, email } = formData;
//             await supabase.from("users").insert([{ username, email }]);
//           }
//           alert("Check your email verification link");
//         }
//       } else {
//         const { user, error } = await supabase.auth.signInWithPassword({
//           email: formData.email,
//           password: formData.password,
//         });

//         if (error) {
//           alert(error.message);
//         } else {
//           // Login successful
//           onLogin(); // Call the provided callback after successful login
//         }
//       }
//     } catch (error) {
//       alert(error.message);
//     }

//     setIsProcessing(false);
//   }
  
//     const navigate = useNavigate()
//     function handleLogIn(){
//         navigate('/App')
//     }
    

//   return (
//     <form onSubmit={handleSubmitButton} className="login-form">
//       <label className="landing-label" htmlFor="username">
//         username
//       </label>
//       <Input
//         className="input--text"
//         type="text"
//         placeholder="username"
//         id="username"
//         name="username"
//         value={formData.username}
//         onChange={handleInputChange}
//       />
//       <label className="landing-label" htmlFor="email">
//         email
//       </label>
//       <Input
//         className="input--text"
//         type="email"
//         placeholder="email account"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleInputChange}
//       />
//       <label htmlFor="password">password</label>
//       <Input
//         className="input--text"
//         type="password"
//         placeholder="*********"
//         id="password"
//         name="password"
//         value={formData.password}
//         onChange={handleInputChange}
//       />
//       <Button
//       onClick={handleLogIn}
//         variant="outlined"
//         className="btn"
//         type="submit"
//       >
//         {isSignUp ? "Sign Up" : "Log In"}
//       </Button>
//     </form>
//   );
// }
