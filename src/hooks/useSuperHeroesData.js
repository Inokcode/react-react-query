import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(["super-heroes"], fetchSuperHeroes, {
    onSuccess,
    onError,
    // enabled: false,
    select: (data) => {
      const superheroes = data.data.map((hero) => hero.name);
      return superheroes;
    },
  });
};
