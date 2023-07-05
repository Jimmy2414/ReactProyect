import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getElectro } from "../../redux/actions";
import { Cards } from "./Cards";

export const Home = () => {
  const dispatch = useDispatch();
  const { electrodomesticos } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getElectro());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {electrodomesticos.map((e) => (
        <Cards key={e.id} data={e} />
      ))}
    </div>
  );
};
