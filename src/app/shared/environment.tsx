// Node environment variable used to determine in what state frontend part is - development or production - this will in turn control the final TARGET variable which is practically the base URL used for API calls
const { NODE_ENV } = process.env;

// Determining the protocol based the on state of frontend part of the app
const PROTOCOL: "http" | "https" =
  NODE_ENV === "development" ? "http" : "https";

// Hostname is localhost
const HOSTNAME: "localhost" = "localhost";

// Determining the port based on the state of frontend part of the app
const PORT: 8080 | 8443 = NODE_ENV === "development" ? 8080 : 8443;

// Assembling the final base URL
export const TARGET = `${PROTOCOL}://${HOSTNAME}:${PORT}`;
