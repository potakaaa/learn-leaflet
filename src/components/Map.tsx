import {
  MapContainer,
  Popup,
  TileLayer,
  Polyline,
  Tooltip,
  Marker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const defaultCenter: [number, number] = [8.47543, 124.64212];

  // Corrected jeepneyRoutes with coordinates in [latitude, longitude] order
  const jeepneyRoutes = [
    {
      name: "RB",
      color: "red",
      coordinates: [
        [8.507543426121941, 124.63666155941615],
        [8.506126755571373, 124.6350203015561],
        [8.50506471878984, 124.63381310675595],
        [8.502057281599889, 124.63245594318141],
        [8.501874404651986, 124.6327563559426],
        [8.50029496859078, 124.6321542955103],
        [8.497817340638079, 124.63116958617474],
        [8.496951618041209, 124.63037183972415],
        [8.496762408949479, 124.6301995963874],
        [8.492993966193524, 124.63224742018758],
        [8.491661392514345, 124.6332412990123],
        [8.490490674987043, 124.63487397780716],
        [8.489313109617143, 124.6383809516268],
        [8.48776140685844, 124.64318520080388],
        [8.48659254669029, 124.64715469917024],
        [8.486108438729374, 124.6493297525596],
        [8.485732672382056, 124.65111470938723],
        [8.485242244362198, 124.6535003745933],
        [8.485008313555113, 124.6545987466925],
        [8.484928947491227, 124.65497990744694],
        [8.484580862554395, 124.65650082052605],
        [8.484497852396316, 124.65689017293857],
        [8.484061588894619, 124.65688331660687],
        [8.481869209501355, 124.65753701270535],
        [8.480913038960423, 124.65755986671707],
        [8.4799721877215, 124.65630417672992],
        [8.47912965437068, 124.65586935486311],
        [8.47830963326409, 124.65578004702024],
        [8.478660798306692, 124.6538080980352],
      ] as [number, number][],
    },
  ];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={[8.485907, 124.656672]}>
        <Popup>Start</Popup>
      </Marker>
      <Marker position={[8.474862, 124.64147]}>
        <Popup>end</Popup>
      </Marker>

      {jeepneyRoutes.map((route, index) => (
        <Polyline
          key={index}
          positions={route.coordinates}
          color={route.color}
          weight={4}
        >
          <Tooltip permanent>{route.name}</Tooltip>
        </Polyline>
      ))}
    </MapContainer>
  );
};

export default Map;
