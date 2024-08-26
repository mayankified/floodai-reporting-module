import  { useState, useRef } from 'react';
import Map from '../components/home/crowdsource_map';
import RainFallMap from '../components/home/rainfall_map';
import WaterlevelMap from '../components/home/waterlevel_map';
import { MapContainer, TileLayer } from 'react-leaflet';
import Form from '../components/home/form';
import RainfallWidget from '../components/home/rainfall_wdget';
import WaterlevelWidget from '../components/home/waterlevel_widget';
import SearchBar from '../components/home/searchbar';
import RainfallLegend, { CrowdsourceLegends } from '../components/home/Legends';

function Home({ warningtab }) {
    const [selectedTab, setSelectedTab] = useState(warningtab || parseInt(localStorage.getItem('selectedTab')) || 3);
    const [rainfallLocations, setRainfallLocations] = useState(null);
    const [waterlevelLocations, setWaterlevelLocations] = useState(null);

    const [csPinToggle, setCsPinToggle] = useState(false);
    const [csPinDropLocation, setCsPinDropLocation] = useState(null);
    const [zoomToLocation, setZoomToLocation] = useState(null); 
    const mapRef = useRef();

    const handletabChange = (tab) => {
        setSelectedTab(tab);
        localStorage.setItem('selectedTab', tab);
    };

   



return (
    <div className='h-full w-full bg-gray-300'>

        <div className='w-full h-full'>
            <div className='h-full flex flex-row-reverse justify-between z-10'>
            <div className='h-[855px] mr-3 mt-2 flex flex-col justify-center w-8/12 overflow-hidden shadow-2xl rounded-lg border-2 relative'>
    <MapContainer
        className='h-full w-full z-10'
        center={[11.2588, 75.7804]}  // Centering on Calicut (Kozhikode)
        zoom={11}
        maxZoom={18}
        minZoom={10}
        maxBounds={[
            [11.5, 75.5],  // Updated top-left corner of the bounds
            [11.0, 76.0]   // Updated bottom-right corner of the bounds
        ]}
        ref={mapRef}
    >
        <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Theta'
            ext='png'
        />

        <Map csPinToggle={csPinToggle} csPinDropLocation={csPinDropLocation} setCsPinDropLocation={setCsPinDropLocation} zoomToLocation={zoomToLocation} mapRef={mapRef} />
    </MapContainer>
    {/* {selectedTab === 1 && <RainfallLegend />} */}
    <CrowdsourceLegends csPinToggle={csPinToggle} />
</div>

                <div className='relative w-1/3 mt-0 p-1 flex flex-col'>
                    <div className="z-20 mb-2 w-full mx-auto flex justify-center">
                        
                        <span
                            className={`h-[2rem] w-1/4 flex items-center justify-center text-center text-sm  cursor-pointer rounded-r-xl transition-all duration-300 leading-3 ${
                                selectedTab === 3 ? 'bg-gradient-to-r from-green-500 to-green-700 text-white' : 'bg-gray-200 hover:bg-gray-300'
                            } shadow-xl`}
                            onClick={() => handletabChange(3)}
                        >
                            Report Flood
                        </span>
                    </div>


                    

                    {selectedTab === 3 && (
                        <div className='z-20 mt-0'>
                            <Form setCsPinDropLocation={setCsPinDropLocation} csPinDropLocation={csPinDropLocation} setCsPinToggle={setCsPinToggle} csPinToggle={csPinToggle} setZoomToLocation={setZoomToLocation} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);
}
export default Home;
