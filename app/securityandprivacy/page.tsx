// pages/security-privacy.tsx

import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const SecurityPrivacyPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Security &amp; Privacy
      </Typography>

      <Typography variant="subtitle1" >
      Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </Typography>

      {/* 1. Scope */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          1. Scope
        </Typography>
        <Typography >
          This Security &amp; Privacy policy (&quot;Policy&quot;) applies to all
          personal information collected, used, or shared when you use the
          Partyride mobile application, website, or related services
          (collectively, the &quot;Services&quot;).
        </Typography>
      </Box>

      {/* 2. Information We Collect */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          2. Information We Collect
        </Typography>
        <Typography >
          <strong>Personal Information:</strong> We may collect your name, email
          address, and phone number during account registration or while using
          our Services.
        </Typography>
        <Typography >
          <strong>Payment Information:</strong> Payment details are processed by
          our third-party payment processor (Stripe). We do not store your
          credit card information on our servers.
        </Typography>
        <Typography >
          <strong>Usage Data:</strong> We collect data on how you interact with
          our Services (e.g., pages visited, features used, time spent).
        </Typography>
        <Typography >
          <strong>Location Data:</strong> We may collect your precise location
          data when you enable location services on your device to facilitate
          ride requests and improve our Services.
        </Typography>
      </Box>

      {/* 3. How We Use Your Information */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          3. How We Use Your Information
        </Typography>
        <Typography >
          - <strong>Service Provision:</strong> Provide you with rides, process
          payments, and ensure a seamless user experience.
        </Typography>
        <Typography >
          - <strong>Customer Support:</strong> Communicate with you about
          ride-related updates, answer questions, and address concerns.
        </Typography>
        <Typography >
          - <strong>Analytics &amp; Improvements:</strong> Analyze usage and
          location data to improve our Services and introduce new features.
        </Typography>
        <Typography >
          - <strong>Marketing:</strong> With your consent, send promotional
          communications and special offers.
        </Typography>
      </Box>

      {/* 4. Data Sharing & Disclosure */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          4. Data Sharing & Disclosure
        </Typography>
        <Typography >
          - <strong>Service Providers:</strong> We share relevant data with
          service providers (e.g., payment processors, analytics providers) who
          are contractually obligated to protect your data.
        </Typography>
        <Typography >
          - <strong>Legal Requirements:</strong> We may disclose information if
          required by law or to protect our rights.
        </Typography>
        <Typography >
          - <strong>Business Transfers:</strong> In the event of a merger,
          acquisition, or sale of assets, your information may be transferred.
        </Typography>
      </Box>

      {/* 5. Cookies & Tracking Technologies */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          5. Cookies & Tracking Technologies
        </Typography>
        <Typography >
          We may use cookies, web beacons, and similar technologies to collect
          information about your usage patterns, enhance your experience, and
          customize our Services. You can manage cookie preferences in your
          browser settings, but disabling cookies may impact certain features.
        </Typography>
      </Box>

      {/* 6. Data Retention */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          6. Data Retention
        </Typography>
        <Typography >
          We retain personal information only as long as necessary for the
          purposes described in this Policy or as required by law. When data is
          no longer needed, we securely delete or anonymize it.
        </Typography>
      </Box>

      {/* 7. Security Measures */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          7. Security Measures
        </Typography>
        <Typography >
          We use industry-standard encryption (e.g., TLS) to protect data in
          transit and restrict access to personal information to authorized
          personnel only. We also conduct regular security audits and
          vulnerability assessments.
        </Typography>
      </Box>

      {/* 8. User Responsibilities */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          8. User Responsibilities
        </Typography>
        <Typography >
          You are responsible for maintaining the confidentiality of your
          account credentials and for using our Services in a secure
          environment. Please notify us immediately if you suspect unauthorized
          account access.
        </Typography>
      </Box>

      {/* 9. International Data Transfers */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          9. International Data Transfers
        </Typography>
        <Typography >
          Your information may be transferred to servers located in different
          jurisdictions with varying data protection laws. We take steps to
          ensure adequate protection for data transferred internationally.
        </Typography>
      </Box>

      {/* 10. Your Rights & Choices */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          10. Your Rights & Choices
        </Typography>
        <Typography >
          - <strong>Access &amp; Correction:</strong> You have the right to
          access and correct your personal information by updating your account
          or contacting us.
        </Typography>
        <Typography >
          - <strong>Deletion &amp; Restriction:</strong> Subject to certain
          exceptions, you may request that we delete or restrict the processing
          of your personal information.
        </Typography>
        <Typography >
          - <strong>Opt-Out:</strong> You can opt-out of marketing
          communications by following the unsubscribe link in our emails or
          contacting us directly.
        </Typography>
      </Box>

      {/* 11. Children’s Privacy */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          11. Children’s Privacy
        </Typography>
        <Typography >
          We do not knowingly collect personal information from individuals
          under the age of [13/16/etc. based on your region]. If you believe we
          have inadvertently collected such information, please contact us so we
          can delete it promptly.
        </Typography>
      </Box>

      {/* 12. Changes to This Policy */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          12. Changes to This Policy
        </Typography>
        <Typography >
          We may update this Policy from time to time. Any changes will be
          posted on our platform or website, and the revised Policy will become
          effective upon posting.
        </Typography>
      </Box>

      {/* 13. Contact Us */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          13. Contact Us
        </Typography>
        <Typography >
          If you have any questions or concerns about this Policy or our data
          practices, please contact us at:{" "}
          <Link href="mailto:privacy@partyride.com" underline="hover">
            privacy@partyride.com
          </Link>
          .
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary">
        By using our Services, you acknowledge that you have read, understood,
        and agree to the terms of this Security &amp; Privacy policy.
      </Typography>
    </Container>
  );
};

export default SecurityPrivacyPage;
