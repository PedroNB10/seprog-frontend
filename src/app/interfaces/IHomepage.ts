import IOrganizers from "./IOrganizers";
import ISchedules from "./ISchedules";

export interface Attributes {
    heroTitle: string;
    createdAt: string;
    updatedAt: string;
    heroDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    organizers: IOrganizers[];
    schedules: ISchedules[];
}




interface Data {
    id: number
    attributes: Attributes
}


interface Meta { }

export interface IHomepage {
    data: Data
    meta: Meta
}