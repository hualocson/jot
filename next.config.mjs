import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));
await jiti.import("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
