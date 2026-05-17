import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incident Response Time Predictor",
  description: "Predict incident resolution time accurately. ML-powered predictions for DevOps and SRE teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b0b31f86-9731-44cf-af0e-c9150eea1723"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
