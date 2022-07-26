import { useQuery } from "react-query";

const useSuperHeroesData = () => {
  useQuery(["super-heroes"], fetchSuperHeroes, {
    onSuccess,
    onError,
    // enabled: false,
    select: (data) => {
      const superheroes = data.data.map((hero) => hero.name);
      return superheroes;
    },
  });
};
