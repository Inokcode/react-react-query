import { useQuery } from "react-query";
import axios from "axios";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (data) => {
    console.log("Perform side effect after data encountering error", error);
  };
  //
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);
  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  //   ["super-heroes"],
  //   fetchSuperHeroes,
  //   {
  //     onSuccess,
  //     onError,
  //     // enabled: false,
  //     select: (data) => {
  //       const superheroes = data.data.map((hero) => hero.name);
  //       return superheroes;
  //     },
  //   }
  // );
  //
  // const { isLoading, data, isError, error, isFetching } = useQuery(
  //   ["super-heroes"],
  //   fetchSuperHeroes,
  //   {
  //     // cacheTime: 5000, //default Time
  //     // staleTime: 0,
  //     // refetchOnMount: true, //true,false,always
  //     // refetchOnWindowFocus: true, //true,false,always
  //     // refetchInterval: 2000,
  //     // refetchIntervalInBackground: true,
  //   }
  // );
  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {/* {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))} */}
      {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </div>
  );
};
export default RQSuperHeroesPage;
