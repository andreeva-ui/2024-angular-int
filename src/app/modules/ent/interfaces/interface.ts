import { teachers } from "./enum";

export interface IData {
  display: boolean,
  name: string,
  description: string,
  items: ILesson[],
}

export interface ILesson {
  order: number,
  name: string,
  teacher: teachers[],
  description: string,
}
