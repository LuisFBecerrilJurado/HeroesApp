export interface Hero {
  id:                string;
  superhero?:        string;
  publisher?:        Publisher;
  alter_ego?:        string;
  first_appearance?: string;
  characters?:       string;
  type?:             string;
  description?:      string;
  amount?:           number;
  localDate?:        Date;
  idUser?:           string;
}

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}
