// pages/terms.tsx

import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const TermsPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Partyride Terms & Conditions
      </Typography>
      
    <Typography variant="subtitle1" >
      Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
    </Typography>
      
      {/* 1. Eligibility & Use of Service */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          1. Eligibility & Use of Service
        </Typography>
        <Typography >
          <strong>1.1 Eligibility:</strong> You must be at least the age of majority
          in your jurisdiction to use Partyride.
        </Typography>
        <Typography >
          <strong>1.2 License:</strong> We grant you a limited, non-exclusive,
          non-transferable, revocable license to access and use the Service strictly
          in accordance with these Terms.
        </Typography>
      </Box>

      {/* 2. Payment */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          2. Payment
        </Typography>
        <Typography >
          <strong>2.1 Non-Refundable Charges:</strong> All charges for Partyride
          trips are non-refundable.
        </Typography>
        <Typography >
          <strong>2.2 Stripe Processing:</strong> Payments are processed through
          Stripe, Inc. (“Stripe”). By using our Service, you authorize us to charge
          your default payment method for the cost of any trip and applicable fees.
        </Typography>
        <Typography >
          <strong>2.3 Payment Authorization:</strong> Partyride may place a
          temporary hold on your payment method to verify that it can cover the
          estimated trip cost.
        </Typography>
      </Box>

      {/* 3. Receipts */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          3. Receipts
        </Typography>
        <Typography >
          After each trip, Partyride will provide you with a receipt via email, text
          message, or within the platform. This receipt includes the trip’s origin
          and destination, total time and distance, and the fare paid.
        </Typography>
      </Box>

      {/* 4. Cancellations */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          4. Cancellations
        </Typography>
        <Typography >
          <strong>4.1 Cancellation Policy:</strong> You may cancel a trip by tapping{" "}
          <em>Edit ride</em> in the app and then selecting <em>Cancel ride</em>.
          Depending on the circumstances, there may be a cancellation fee.
        </Typography>
        <Typography >
          <strong>4.2 No-Shows & Late Cancellations:</strong> Partyride reserves the
          right to charge a penalty for late cancellations or no-shows, in accordance
          with our posted policy.
        </Typography>
      </Box>

      {/* 5. Damage Fees */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          5. Damage Fees
        </Typography>
        <Typography >
          If a Partyride vehicle is damaged during your trip due to your actions or
          those of your guests, Partyride will charge the applicable damage fee to
          your default payment method.
        </Typography>
      </Box>

      {/* 6. Non-Discrimination Policy */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          6. Non-Discrimination Policy
        </Typography>
        <Typography >
          Partyride prohibits discrimination against drivers or riders based on race,
          color, religion, national origin, sexual orientation, gender identity, age,
          disability, marital status, medical condition, or any other characteristic
          protected by law.
        </Typography>
      </Box>

      {/* 7. Privacy */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          7. Privacy
        </Typography>
        <Typography >
          <strong>7.1 Personal Information:</strong> We collect personal details such
          as your name and email to facilitate rider identity and account management.
          We do not store your financial personal details; all payment information is
          handled through Stripe.
        </Typography>
        <Typography >
          <strong>7.2 Privacy Policy:</strong> Please review our{" "}
          <Link href="/privacy" underline="hover">
            Privacy Policy
          </Link>{" "}
          to learn more about how we collect, use, and protect your information.
        </Typography>
      </Box>

      {/* 8. Zero-Tolerance Policy */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          8. Zero-Tolerance Policy for Drugs & Alcohol
        </Typography>
        <Typography >
          Partyride has a zero-tolerance policy for the use of drugs or alcohol by
          drivers during trips. If you suspect your driver is under the influence,
          you are encouraged to end the trip immediately and report it to Partyride.
        </Typography>
      </Box>

      {/* 9. Updates & Modifications */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          9. Updates & Modifications
        </Typography>
        <Typography >
          We may update or modify the Service, including these Terms, at any time.
          Any changes will be posted within the Service or on our website. Your
          continued use of Partyride after any modifications indicates your
          acceptance of the revised Terms.
        </Typography>
      </Box>

      {/* 10. Disclaimers */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          10. Disclaimers
        </Typography>
        <Typography >
          The Service is provided on an “as is” and “as available” basis. To the
          fullest extent permitted by law, Partyride disclaims all warranties,
          express or implied, including but not limited to merchantability, fitness
          for a particular purpose, and non-infringement.
        </Typography>
      </Box>

      {/* 11. Limitation of Liability */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          11. Limitation of Liability
        </Typography>
        <Typography >
          In no event shall Partyride be liable for any indirect, incidental,
          special, or consequential damages arising out of or in connection with
          your use of the Service.
        </Typography>
      </Box>

      {/* 12. Termination */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          12. Termination
        </Typography>
        <Typography >
          We reserve the right to suspend or terminate your access to Partyride for
          any reason at any time, including violations of these Terms or any other
          policies we maintain.
        </Typography>
      </Box>

      {/* 13. Governing Law & Dispute Resolution */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          13. Governing Law & Dispute Resolution
        </Typography>
        <Typography >
          These Terms are governed by the laws of [Your Jurisdiction]. Any disputes
          arising under these Terms shall be resolved exclusively in the courts of
          [Your Jurisdiction].
        </Typography>
      </Box>

      {/* 14. Contact Us */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          14. Contact Us
        </Typography>
        <Typography >
          If you have any questions about these Terms & Conditions, please contact us
          at:{" "}
          <Link href="mailto:support@partyride.com" underline="hover">
            support@partyride.com
          </Link>.
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary">
        By using Partyride, you acknowledge that you have read, understood, and
        agree to be bound by these Terms & Conditions.
      </Typography>
    </Container>
  );
};

export default TermsPage;

