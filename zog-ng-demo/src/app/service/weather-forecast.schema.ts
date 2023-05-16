import {z} from 'zod';

export const weatherForecastSchema = z.object({
  date: z.date(),
  temperatureC: z.number().int(),
  temperatureF: z.number().int(),
  summary: z.string().optional(),
});

export type weatherForecast = z.infer<typeof weatherForecastSchema>;
export type incorrectType = {
  name:string;
  age:number;
};