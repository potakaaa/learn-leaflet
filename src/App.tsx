import Map from "./components/Map";

const App = () => {
  return (
    <div className="border-box size-full flex items-center justify-center ">
      <p className="w-full flex items-center justify-center text-center self-center text-xl font-bold text-gray-800">
        ROTA
      </p>
      <div className="h-56">
        <Map />
      </div>
    </div>
  );
};

export default App;
