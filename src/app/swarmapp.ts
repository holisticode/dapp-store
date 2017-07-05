export class SwarmApp {
  id: number;
  name: string;
  thumb: string;
  shortDesc: string; 
  longDesc: string; 
  categories: string[];
  repo: string;
  url: string;
  images: Array<{img: string, caption: string}>;
}
