import { nextSIWE } from "next-siwe";

export default nextSIWE({
  secret: process.env.JWT_SECRET,
});
