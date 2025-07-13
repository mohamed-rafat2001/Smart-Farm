import useSingleFarm from './useSingleFarm';

function SingleFarm() {
  const { farm } = useSingleFarm();
  console.log(farm);
  return (
    <div>
      <h1>Single Farm</h1>
    </div>
  );
}
export default SingleFarm;
