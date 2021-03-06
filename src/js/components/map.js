import "leaflet/dist/leaflet.css";
import L from "leaflet/dist/leaflet";

export default function initMap(){
    const map = L.map('map').setView([78.42451306, 57.10693359], 4);
    const myIcon = L.icon({
        iconUrl: '/assets/images/marker1.png',
        iconSize: [30, 34],
        iconAnchor: [10, 20],
        popupAnchor:  [3, -36]
    });

    const bearPopup = '<img src="/assets/images/4.1.png" height="100px" width="100px"/>';
    const pesecPopup = '<img src="/assets/images/protected_pesec.png" height="100px" width="100px"/>';

    let myStyle={
        "fill": false,
        "color": '#fff',
        weight: 4
    };
    const russianArctic = L.geoJson(geojsonFeature, {style:myStyle}).addTo(map);
    let geojsonFeature = [{
        "type": "Feature",
        "properties": {
    },
        "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [49.83743, 81.35012],
            [53.55948, 81.52312],
            [57.11943, 81.97414],
            [57.75078, 82.01690],
            [58.30888, 82.04080],
            [59.25201, 82.05465],
            [60.85430, 82.00917],
            [63.72427, 81.90273],
            [64.54880, 81.81859],
            [65.01582, 81.73663],
            [66.44830, 81.20085],
            [66.61535, 81.02599],
            [66.53446, 80.92672],
            [66.31007, 80.81194],
            [65.98162, 80.71642],
            [65.19638, 80.55827],
            [62.41253, 80.24765],
            [60.98133, 79.81113],
            [60.53903, 79.72988],
            [59.12820, 79.59074],
            [58.36636, 79.57699],
            [55.89716, 79.69942],
            [54.67473, 79.75178],
            [53.40994, 79.79634],
            [51.76028, 79.72174],
            [50.22441, 79.72226],
            [47.36629, 79.86112],
            [47.07896, 79.88654],
            [46.11497, 80.04560],
            [43.95255, 80.47623],
            [43.73694, 80.56876],
            [43.77830, 80.66113],
            [44.25341, 80.76954],
            [46.40897, 81.00569],
            [49.83743, 81.35012]
        ]]
    }
    },
    {
        "type": "Feature",
        "properties": {
    },
        "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [47.91109, 80.74670],
            [47.91812, 80.74767],
            [47.92467, 80.74752],
            [47.92611, 80.75101],
            [47.92802, 80.79855],
            [47.92873, 80.80051],
            [47.91779, 80.80152],
            [47.89633, 80.80424],
            [47.88459, 80.80664],
            [47.87932, 80.80831],
            [47.87524, 80.80934],
            [47.87184, 80.81054],
            [47.87390, 80.81356],
            [47.87542, 80.81458],
            [47.86901, 80.81602],
            [47.86298, 80.81732],
            [47.85618, 80.81816],
            [47.84976, 80.81877],
            [47.84259, 80.81928],
            [47.83314, 80.81949],
            [47.82406, 80.81844],
            [47.80985, 80.81951],
            [47.78632, 80.82017],
            [47.76250, 80.82285],
            [47.75212, 80.82372],
            [47.74892, 80.82477],
            [47.73853, 80.82535],
            [47.72871, 80.82556],
            [47.72340, 80.82445],
            [47.71697, 80.82382],
            [47.70677, 80.82445],
            [47.69772, 80.82581],
            [47.69281, 80.82671],
            [47.69283, 80.82813],
            [47.68642, 80.82918],
            [47.67453, 80.83069],
            [47.66717, 80.83192],
            [47.66415, 80.83270],
            [47.65793, 80.83421],
            [47.64812, 80.83571],
            [47.63925, 80.83656],
            [47.63000, 80.83737],
            [47.62434, 80.83816],
            [47.61566, 80.83912],
            [47.60753, 80.83924],
            [47.59619, 80.83909],
            [47.58505, 80.83928],
            [47.57579, 80.83979],
            [47.56824, 80.84076],
            [47.56013, 80.84202],
            [47.56242, 80.84403],
            [47.55865, 80.84497],
            [47.55167, 80.84563],
            [47.53902, 80.84666],
            [47.52258, 80.84723],
            [47.51447, 80.84814],
            [47.51127, 80.84961],
            [47.49655, 80.85124],
            [47.49524, 80.85232],
            [47.48749, 80.85286],
            [47.48241, 80.85440],
            [47.47636, 80.85443],
            [47.47201, 80.85377],
            [47.45575, 80.85344],
            [47.44763, 80.85326],
            [47.44629, 80.85209],
            [47.44855, 80.85128],
            [47.44382, 80.85086],
            [47.44494, 80.84996],
            [47.43777, 80.85020],
            [47.42550, 80.85168],
            [47.41964, 80.85132],
            [47.40734, 80.85006],
            [47.40391, 80.84717],
            [47.39937, 80.84672],
            [47.38519, 80.84657],
            [47.37762, 80.84561],
            [47.37780, 80.84420],
            [47.38043, 80.84300],
            [47.38288, 80.84204],
            [47.37777, 80.84132],
            [47.37756, 80.83984],
            [47.38474, 80.83927],
            [47.39021, 80.83825],
            [47.39189, 80.83704],
            [47.39056, 80.83626],
            [47.38734, 80.83524],
            [47.37883, 80.83449],
            [47.36804, 80.83335],
            [47.36407, 80.83254],
            [47.35178, 80.83206],
            [47.35178, 80.83206],
            [47.35883, 80.83145],
            [47.48763, 80.73743],
            [47.48981, 80.73683],
            [47.49041, 80.73696],
            [47.49761, 80.73852],
            [47.51272, 80.73846],
            [47.51724, 80.73707],
            [47.53272, 80.73562],
            [47.54632, 80.73514],
            [47.56745, 80.73183],
            [47.59258, 80.72631],
            [47.60555, 80.72674],
            [47.61034, 80.72783],
            [47.60491, 80.73054],
            [47.59555, 80.73235],
            [47.60942, 80.73302],
            [47.62073, 80.73061],
            [47.63016, 80.72923],
            [47.64907, 80.72994],
            [47.65816, 80.73198],
            [47.65818, 80.73343],
            [47.64271, 80.73602],
            [47.63252, 80.73722],
            [47.61478, 80.73975],
            [47.60519, 80.74103],
            [47.60162, 80.74227],         
            [47.60436, 80.74335],
            [47.60849, 80.74627],
            [47.60807, 80.74859],
            [47.60511, 80.74986],
            [47.58943, 80.75084],
            [47.58400, 80.75312],
            [47.58061, 80.75508],
            [47.57312, 80.75703],
            [47.57909, 80.75997],
            [47.58629, 80.76105],
            [47.57912, 80.76279],
            [47.59009, 80.76489],
            [47.60905, 80.76426],
            [47.58860, 80.76114],
            [47.61061, 80.74911],
            [47.82860, 80.77220],
            [47.78496, 80.77180],
            [47.80221, 80.77254],
            [47.81999, 80.77337],
            [47.83204, 80.77348],
            [47.86716, 80.76699],
            [47.87851, 80.76468],
            [47.88769, 80.76226],
            [47.89732, 80.75982],
            [47.90453, 80.75805],
            [47.91164, 80.75591],
            [47.91232, 80.75259],
            [47.91520, 80.75096],
            [47.91723, 80.74914],
            [47.90733, 80.74805],
            [47.91109, 80.74670],
        ]],
    },
},
    {
        "type": "Feature",
        "properties": {
    },
        "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [47.68684, 80.77089],
            [47.71247, 80.77317],
            [47.76706, 80.77170],
            [47.77402, 80.77170],
            [47.68684, 80.77089],
        ]],
    },
},
    {
        "type": "Feature",
        "properties": {
    },
        "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [62.927312, 76.459485],
            [63.557997, 76.289290],
            [63.576496, 76.292034],
            [63.590122, 76.296185],
            [63.608112, 76.297344],
            [63.628274, 76.296557],
            [63.654728, 76.297274],
            [63.670162, 76.296678],
            [63.681824, 76.293099],
            [63.696768, 76.292302],
            [63.712331, 76.291953],
            [63.737643, 76.287995],
            [63.758800, 76.282720],
            [63.792279, 76.276880],
            [63.808260, 76.271470],
            [63.813332, 76.266376],
            [63.829590, 76.260898],
            [63.863246, 76.254874],
            [63.900965, 76.248537],
            [63.931195, 76.239399],
            [64.075756, 76.174459],
            [64.199639, 76.117047],
            [64.226431, 76.097114],
            [64.244705, 76.081442],
            [64.384763, 76.083095],
            [64.453301, 76.086698],
            [64.505645, 76.091385],
            [64.534844, 76.094111],
            [64.562733, 76.097892],
            [64.597616, 76.103494],
            [64.633920, 76.107083],
            [64.672402, 76.110617],
            [64.734201, 76.116356],
            [65.040595, 76.144485],
            [65.306870, 76.182991],
            [65.330151, 76.192603],
            [65.359623, 76.208016],
            [65.388040, 76.224718],
            [65.405257, 76.235039],
            [65.430876, 76.248169],
            [65.481345, 76.260836],
            [65.535018, 76.266086],
            [65.636264, 76.266936],
            [65.676789, 76.266011],
            [65.740492, 76.266086],
            [65.899840, 76.271797],
            [66.077449, 76.308706],
            [66.111121, 76.314905],
            [66.146517, 76.320962],
            [66.208241, 76.328459],
            [66.616855, 76.381427],
            [66.702190, 76.387662],
            [66.799066, 76.393849],
            [66.852967, 76.402670],
            [66.886414, 76.403553],
            [66.936481, 76.395741],
            [66.976823, 76.386596],
            [67.033134, 76.373360],
            [67.064755, 76.365950],
            [67.097593, 76.358057],
            [67.124470, 76.354310],
            [67.177013, 76.345798],
            [67.219252, 76.338533],
            [67.252723, 76.333156],
            [67.283574, 76.324541],
            [67.294373, 76.318317],
            [67.313523, 76.307768],
            [67.356841, 76.298769],
            [67.383853, 76.291139],
            [67.410860, 76.290640],
            [67.423050, 76.288611],
            [67.447838, 76.287945],
            [67.469960, 76.287956],
            [67.488325, 76.284811],
            [67.509513, 76.281591],
            [67.538033, 76.274352],
            [67.559174, 76.264560],
            [67.574585, 76.256353],
            [67.575557, 76.248095],
            [67.586147, 76.245868],
            [67.581234, 76.241319],
            [67.585555, 76.236071],
            [67.597642, 76.229819],
            [67.588950, 76.223782],
            [67.585607, 76.221093],
            [67.597706, 76.213811],
            [67.614905, 76.208703],
            [67.612220, 76.200667],
            [67.614062, 76.194371],
            [67.614727, 76.188132],
            [67.624551, 76.183032],
            [67.628429, 76.179708],
            [67.624367, 76.177419],
            [68.126854, 76.015405],
            [68.353770, 76.051569],
            [68.465423, 76.055957],
            [68.559883, 76.062440],
            [68.667977, 76.073297],
            [68.736854, 76.082577],
            [68.808130, 76.094056],
            [68.873435, 76.106960],
            [68.931146, 76.120761],
            [69.009180, 76.144372],
            [69.069583, 76.169977],
            [69.111458, 76.194551],
            [69.137059, 76.218038],
            [69.147409, 76.234382],
            [69.153125, 76.248621],
            [69.185342, 76.261971],
            [69.276283, 76.284335],
            [69.382964, 76.322027],
            [69.444059, 76.343629],
            [69.499056, 76.371384],
            [69.534129, 76.396685],
            [69.682287, 76.440559],
            [69.739095, 76.467420],
            [69.793451, 76.514352],
            [69.810301, 76.543511],
            [69.799494, 76.590868],
            [69.940596, 76.651822],
            [69.984875, 76.711373], 
            [69.974079, 76.746744], 
            [69.941172, 76.778325],
            [69.868142, 76.815463],
            [69.804916, 76.865104],
            [69.704044, 76.905559],
            [69.612484, 76.966984],
            [69.426246, 77.018977],
            [69.243272, 77.093307],
            [69.120702, 77.118904],
            [68.841435, 77.158315],
            [68.564942, 77.172142],
            [68.482080, 77.176753],
            [68.391541, 77.189136],
            [68.188566, 77.222275],
            [67.958373, 77.241638],
            [67.684936, 77.245207],
            [67.549722, 77.241055],
            [67.439654, 77.233660],
            [67.304794, 77.221867],
            [67.167373, 77.204904],
            [67.062620, 77.183926],
            [66.980638, 77.163381],
            [66.913750, 77.140719],
            [66.796638, 77.134016],
            [66.669277, 77.122031],
            [66.549665, 77.105536],
            [66.458232, 77.088248],
            [66.397796, 77.074487],
            [66.275473, 77.048181],
            [66.155485, 77.028887],
            [66.021569, 76.996488],
            [65.881389, 76.973200],
            [65.722598, 76.932011],
            [65.597125, 76.915467],
            [65.501690, 76.901022],
            [65.383252, 76.876514],
            [65.277342, 76.846640],
            [65.221750, 76.825205],
            [65.165479, 76.800983],
            [65.103301, 76.773912],
            [65.087551, 76.765809],
            [65.057559, 76.752833],
            [65.024592, 76.735032],
            [65.000538, 76.718991],
            [64.922555, 76.705808],
            [64.855135, 76.689195],
            [64.801705, 76.674014],
            [64.632072, 76.661555],
            [64.496425, 76.644370],
            [64.378005, 76.623012],
            [64.240223, 76.627127],
            [64.140419, 76.626686],
            [64.001327, 76.621966],
            [63.893609, 76.614535],
            [63.743306, 76.598572],
            [63.665050, 76.584847],
            [63.552049, 76.561238],
            [63.426452, 76.520531], 
            [63.482103, 76.542255],
            [63.320939, 76.509351],
            [63.211746, 76.492768],
            [63.107059, 76.470764],
            [63.011118, 76.454924],
            [62.927312, 76.459485]
            
            
            
            
            
            
                
        ]],
    },
    },
];


    L.tileLayer('https://api.mapbox.com/styles/v1/knsroo/ckfsqojlo2djw1ammfs8z0c4p/tiles/512/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia25zcm9vIiwiYSI6ImNqczI3dDRncDA2cWc0OXBtM2syaXVtZWoifQ.MSuCCjQY-bmbmXu2bprSSA', {
    attribution: 'Русская Арктика',
    maxZoom: 18,
    tileSize: 512,
    id: 'mapbox/streets-v8',
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia25zcm9vIiwiYSI6ImNqczI3dDRncDA2cWc0OXBtM2syaXVtZWoifQ.MSuCCjQY-bmbmXu2bprSSA'
    }).addTo(map);

    russianArctic.addData(geojsonFeature);


    L.marker([76.5883559487801, 66.84082031250001], {icon: myIcon}).bindPopup(bearPopup).addTo(map);
    L.marker([80.76766788404818, 49.83398437500001], {icon: myIcon}).bindPopup(pesecPopup).addTo(map);
}

/*								
*/