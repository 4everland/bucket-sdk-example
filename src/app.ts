import { PutObjectCommand, CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client";
import * as fs from "fs";
import path from "path";
import {randomInt} from "crypto";

const BUCKET_NAME = "testBucket" + new Date().getTime() + randomInt(0, 1000000).toString();
const FILE_PATH = __dirname + "/pussy.jpeg";

const fileStream = fs.createReadStream(FILE_PATH);

export const BucketCreateRequest = {
    Bucket: BUCKET_NAME,
}

export const uploadParams = {
    Bucket: BUCKET_NAME,
    Key: path.basename(FILE_PATH),
    Body: fileStream,
};


// Upload file to specified bucket.
export const run = async () => {
    try {
        const createBucket = await s3Client.send(new CreateBucketCommand(BucketCreateRequest))
        console.log("Success", createBucket);
        const putObject = await s3Client.send(new PutObjectCommand(uploadParams));
        console.log("Success", putObject);
        console.log("Now review the object in", createBucket.Location + "/" + path.basename(FILE_PATH));
    } catch (err) {
        console.log("Error", err);
    }
};

run();