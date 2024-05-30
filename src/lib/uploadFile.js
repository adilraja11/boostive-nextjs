import { s3Client } from "@/utils/aws";
import { PutObjectCommand } from "@aws-sdk/client-s3";

async function uploadFile({Body, Key, Folder}){
    // Siapin file sesuai format yang diminta oleh AWS/R2
    const bytes = await Body.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Send Command (Command untuk upload file)
    try {
        const data = await s3Client.send(new PutObjectCommand({
            Bucket: 'boostive-nextjs',
            Key: `${Folder}/${Key}`,
            ContentType: Body.type,
            Body: buffer
        }));
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}