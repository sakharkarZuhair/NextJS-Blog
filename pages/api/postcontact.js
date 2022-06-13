import * as fs from "fs";
export default async function handler(req, res) {
    if (req.method === "POST") {
        // PROCESS of POST Request
        console.log(req.body);
        let data = await fs.promises.readdir("contactdata");
        console.log(data);
        fs.promises.writeFile(
            `contactdata/${data.length + 1}.json`,
            JSON.stringify(req.body)
        );
        res.status(200).json(["It's an POST request"]);
    } else {
        // Handle any other HTTP Request
        res.status(200).json(["allBlogs"]);
    }
}