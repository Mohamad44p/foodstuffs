import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New message from Adeeb juneidi contact form</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={logo}>Adeeb juneidi</Heading>
        </Section>
        <Hr style={hr} />
        <Section style={content}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Text style={text}>
            You have received a new message from your website contact form. Here
            are the details:
          </Text>
          <Section style={detailsContainer}>
            <Text style={detailLabel}>Name:</Text>
            <Text style={detailValue}>{name}</Text>
            <Text style={detailLabel}>Email:</Text>
            <Text style={detailValue}>{email}</Text>
            <Text style={detailLabel}>Message:</Text>
            <Text style={detailValue}>{message}</Text>
          </Section>
        </Section>
        <Hr style={hr} />
        <Section style={footer}>
          <Text style={footerText}>
            This email was sent from Adeeb juneidi contact form. ©{" "}
            {new Date().getFullYear()} Adeeb juneidi . All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const logoContainer = {
  padding: "20px 0",
};

const logo = {
  color: "#0070f3",
  fontSize: "32px",
  fontWeight: "bold",
  textAlign: "center" as const,
  textDecoration: "none",
};

const content = {
  backgroundColor: "#ffffff",
  border: "1px solid #e6e6e6",
  borderRadius: "6px",
  padding: "40px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "1.5",
  margin: "0 0 20px",
};

const text = {
  color: "#4a4a4a",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 20px",
};

const detailsContainer = {
  margin: "20px 0",
};

const detailLabel = {
  color: "#6a6a6a",
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "5px",
};

const detailValue = {
  color: "#1d1c1d",
  fontSize: "16px",
  marginBottom: "15px",
};

const hr = {
  borderColor: "#e6e6e6",
  margin: "20px 0",
};

const footer = {
  color: "#6a6a6a",
  fontSize: "12px",
  lineHeight: "20px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#6a6a6a",
  fontSize: "12px",
  lineHeight: "20px",
};
