import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express, {type Request, type Response} from "express";

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

server.listen(port, () => {
    console.log(`Listening on ${port}`);
});