import mongoose, {model} from "mongoose";
import type { WeatherInterface } from "./interface";
import { WeatherSchema } from "./schema";

export default mongoose.models.Weather ||
    model<WeatherInterface>("Weather", WeatherSchema);