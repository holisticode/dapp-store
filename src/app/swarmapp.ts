export class SwarmApp {
  id: number;
  name: string;
  thumb: string;
  shortDesc: string; 
  categories: string[];
  repo: string;
  url: string;
  images: Array<{img: string, caption: string}>;
}
