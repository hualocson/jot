import { Metadata } from "next";

const metadataDescription =
  "Jot helps you document your daily life and development journey with simplicity and elegance.";

const title = {
  template: `%s | Jot`,
  default: `Jot`,
};

export const rootMetadata: Metadata = {
  title,
  description: metadataDescription,
  openGraph: {
    title,
    description: metadataDescription,
    type: "website",
  },
};
