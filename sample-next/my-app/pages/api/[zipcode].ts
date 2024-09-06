import dbConnect from "@/middleware/db-connect";
import { findByZip } from "@/mongoose/weather/services";
import type { NextApiRequest, NextApiResponse } from "next";
dbConnect();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<WeatherDetailType> | void> {
    console.log("1");
    let data = await findByZip(req.query.zipcode as string);
    return res.status(200).json(data);
}