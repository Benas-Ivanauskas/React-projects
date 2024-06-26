import { useTeaCollection } from "../../../hooks/useTeaCollection";
import LoaderSpinner from "../../../utils/LoaderSpinner";
import TeaLoadingError from "../../../utils/TeaLoadingError";
import TeaCollectionItem from "./TeaCollectionItem";

// TODO: čia gali tiesiog export default function viena eilute, tau nereikia atskiro export default. (galioja ir kitiems failams)
export default function TeaCollectionCard() {
  // TODO: Manau butu geriau vietoj paprasto konteksto pasidaryti custom hook
  const { teaCollectionData, isError, isLoading } = useTeaCollection();

  // TODO: Jeigu nori kad atrodytu profesionaliau, reiktu išskirti kelias būsenas:
  //   isLoaded -> rodyti kokį nors spinnerį kol !isLoaded
  //   isError -> rodyti sita teksta kuri dabar idejai

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (isError) {
    // TODO: galbūt atskiras komponentas "TeaLoadingError" nes įtariu kituose komponentuose gali nutikti panašiai
    return <TeaLoadingError />;
  }

  return (
    <>
      {/* TODO: Redundant checkas && -> JS auksčiau jau pasitikrinai !teaData */}
      {teaCollectionData.map((tea) => (
        //   TODO: Iš šito turetu gimti bent vienas komponentas TeaCollectionItem :D
        <TeaCollectionItem key={tea.id} tea={tea} />
      ))}
    </>
  );
}
