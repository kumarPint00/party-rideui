'use client';
import React from "react";
import { Box, Button, Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";

const HeroContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(6, 2),
  textAlign: "center",
  backgroundColor: theme.palette.primary?.main,
  color: theme.palette.primary?.contrastText,
  minHeight: "60vh",
}));

const FeaturesContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
}));

const TestimonialPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "left",
}));

const HomePage: React.FC = () => {
  const handleSignUpClick = () => {
    // Insert your sign-up logic (e.g., redirect to sign-up page)
    // Example: Router.push("/signup");
    console.log("Sign Up clicked");
  };

  const handleBookRideClick = () => {
    // Insert your booking logic or redirect
    console.log("Book a Ride clicked");
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroContainer>
        <Typography variant="h2" gutterBottom>
          Welcome to Partyride
        </Typography>
        <Typography variant="h5" gutterBottom>
          A Smarter, Safer Way to Enjoy Group Rides
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mr: 2 }}
            onClick={handleSignUpClick}
          >
            Sign Up
          </Button>
          <Button variant="outlined" color="inherit" onClick={handleBookRideClick}>
            Book a Ride
          </Button>
        </Box>
      </HeroContainer>

      {/* Features Section */}
      <FeaturesContainer maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose Partyride?
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          From safe and secure payment processing to a zero-tolerance policy, we
          offer a ride-share experience you can trust.
        </Typography>

        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: "center", height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Easy & Safe Payments
              </Typography>
              <Typography variant="body2">
                We partner with Stripe for secure, seamless transactions. No need
                to worry about cash; just tap and ride.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: "center", height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Verified Drivers
              </Typography>
              <Typography variant="body2">
                All drivers undergo strict background checks and are monitored
                under a zero-tolerance policy for drugs and alcohol.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: "center", height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Flexible Cancellations
              </Typography>
              <Typography variant="body2">
                Plans changed? No worries. Cancel easily through the app, and
                we’ll take care of the rest.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </FeaturesContainer>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            What Our Riders Say
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Hear from our happy Partyride community.
          </Typography>

          <Grid container spacing={4} mt={3}>
            <Grid item xs={12} md={6}>
              <TestimonialPaper>
                <Typography variant="subtitle1" gutterBottom>
                  “Partyride made our bachelor party stress-free. The driver was
                  fantastic, and the app was super easy to use!”
                </Typography>
                <Typography variant="caption" display="block">
                  — Alex R.
                </Typography>
              </TestimonialPaper>
            </Grid>
            <Grid item xs={12} md={6}>
              <TestimonialPaper>
                <Typography variant="subtitle1" gutterBottom>
                  “Love the transparent pricing and the option to split the fare
                  with my friends. Will definitely use again!”
                </Typography>
                <Typography variant="caption" display="block">
                  — Sophia K.
                </Typography>
              </TestimonialPaper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box sx={{ textAlign: "center", py: 2 }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Partyride. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default HomePage;
