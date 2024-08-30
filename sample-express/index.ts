import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express, {type Request, type Response} from "express";

import path from "node:path";

const server = express();
const port = 3000;

server.get('/hello', (_req: Request, res: Response) => {
    const response = routeHello();
    res.send(response);
});

server.get('/api/names',
    async (_req: Request, res: Response): Promise<void> => {
    let response: string;
    try {
        response = await routeAPINames();
    } catch (err) {
        console.log(err);
    }

    res.send(response);
});

server.get(
    "/api/weather/:zipcode",
    (req: Request, res: Response): void => {
        const response = routeWeather({zipcode: req.params.zipcode});
        res.send(response);
    }
);

server.get('/components/weather', (_req: Request, res: Response): void => {
    const filePath = path.join(process.cwd(), "public", "weather.html");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(filePath);
});

server.listen(port, () => {
    console.log(`Listening on ${port}`);
});