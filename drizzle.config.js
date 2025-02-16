import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_NojLn1bve5ra@ep-empty-wildflower-a2youa0n-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require",
  },
});
// postgresql://neondb_owner:dCZTx5S9nmLD@ep-icy-glade-a5fpd83c.us-east-2.aws.neon.tech/neondb?sslmode=require