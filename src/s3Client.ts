import { S3Client } from "@aws-sdk/client-s3";

const REGION_US_EAST_1 = "us-east-1";
const s3Client = new S3Client({
    region: REGION_US_EAST_1,
    endpoint: "https://endpoint.foreverland.co",
    credentials: {
        accessKeyId: "YourAccessKeyId",
        secretAccessKey: "YourSecretAccessKey",
    }
});

export { s3Client };
