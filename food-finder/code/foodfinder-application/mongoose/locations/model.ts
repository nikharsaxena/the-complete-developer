import { model, models } from "mongoose";
import { LocationSchema, LocationType } from "@/mongoose/locations/schema";

const LocationModel = models.locations || model<LocationType>('locations', LocationSchema);
export default LocationModel;