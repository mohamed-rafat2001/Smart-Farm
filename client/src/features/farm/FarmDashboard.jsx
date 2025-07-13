import SelectFarm from './SelectFarm';

function FarmDashboard() {
  return (
    <div>
      <h1 className="text-gray-500">
        Overview of your farm's performance and key metrics.
      </h1>
      <SelectFarm />
    </div>
  );
}
export default FarmDashboard;
