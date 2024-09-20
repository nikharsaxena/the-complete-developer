import dbConnect from "@/middleware/db-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { findAllLocations } from "@/mongoose/locations/services";


export default async function handler(
    req: NextApiRequest, res: NextApiResponse<any>
) {
    await dbConnect();
    const locations = await findAllLocations();
    res.status(200).json(locations);
}