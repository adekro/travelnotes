export default (() => {
  const localStorageKeyName = "travels";
  const getItems = () => {
    return JSON.parse(localStorage.getItem(localStorageKeyName) ?? {});
  };
  const storeItems = (travels) => {
    localStorage.setItem(localStorageKeyName, JSON.stringify(travels));
  };
  const init = () => {
    storeItems(mockData);
  };

  return {
    getItems,
    storeItems,
    init,
  };
})();

const mockData = [
  {
    id: "1",
    nation: "France",
    name: "Road to Normandy",
    iso: "fr",
    trip: [
      {
        start: "Voghera",
        starttime: "09:00",
        startdate: "2023-08-16",
        arrive: "Lione",
        arrivecoords: "",
        arrivetime: "14:00",
        arrivedate: "2023-08-16",
        traveltime: "270",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Lione",
        starttime: "21:00",
        startdate: "2023-08-16",
        arrive: "Ars-sur-Formans",
        arrivecoords: "",
        arrivetime: "22:00",
        arrivedate: "2023-08-16",
        traveltime: "60",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Ars-sur-Formans",
        starttime: "14:00",
        startdate: "2023-08-17",
        arrive: "Orleans",
        arrivecoords: "",
        arrivetime: "18:30",
        arrivedate: "2023-08-17",
        traveltime: "270",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Orleans",
        starttime: "14:00",
        startdate: "2023-08-18",
        arrive: "Rouen",
        arrivecoords: "",
        arrivetime: "17:00",
        arrivedate: "2023-08-18",
        traveltime: "180",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Rouen",
        starttime: "09:30",
        startdate: "2023-08-19",
        arrive: "Étretat",
        arrivecoords: "",
        arrivetime: "10:30",
        arrivedate: "2023-08-19",
        traveltime: "60",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Étretat",
        starttime: "14:00",
        startdate: "2023-08-19",
        arrive: "Honfleur",
        arrivecoords: "",
        arrivetime: "16:00",
        arrivedate: "2023-08-19",
        traveltime: "120",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Honfleur",
        starttime: "14:00",
        startdate: "2023-08-19",
        arrive: "Omaha beach",
        arrivecoords: "",
        arrivetime: "16:00",
        arrivedate: "2023-08-19",
        traveltime: "120",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Omaha beach",
        starttime: "17:00",
        startdate: "2023-08-19",
        arrive: "Utah Beach",
        arrivecoords: "",
        arrivetime: "18:00",
        arrivedate: "2023-08-19",
        traveltime: "42",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Utah Beach",
        starttime: "17:00",
        startdate: "2023-08-19",
        arrive: "Mont-Saint-Michel",
        arrivecoords: "",
        arrivetime: "18:00",
        arrivedate: "2023-08-19",
        traveltime: "42",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Mont-Saint-Michel",
        starttime: "17:00",
        startdate: "2023-08-19",
        arrive: "Cancale",
        arrivecoords: "",
        arrivetime: "18:00",
        arrivedate: "2023-08-19",
        traveltime: "42",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Cancale",
        starttime: "17:00",
        startdate: "2023-08-19",
        arrive: "Saint-Malo",
        arrivecoords: "",
        arrivetime: "18:00",
        arrivedate: "2023-08-19",
        traveltime: "42",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Saint-Malo",
        starttime: "17:00",
        startdate: "2023-08-19",
        arrive: "Chenonceaux",
        arrivecoords: "",
        arrivetime: "18:00",
        arrivedate: "2023-08-19",
        traveltime: "42",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Chenonceaux",
        starttime: "17:00",
        startdate: "2023-08-19",
        arrive: "Le Bourget-du-Lac",
        arrivecoords: "",
        arrivetime: "18:00",
        arrivedate: "2023-08-19",
        traveltime: "42",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
      {
        start: "Le Bourget-du-Lac",
        starttime: "17:00",
        startdate: "2023-08-19",
        arrive: "Voghera",
        arrivecoords: "",
        arrivetime: "18:00",
        arrivedate: "2023-08-19",
        traveltime: "42",
        tools: "",
        tax: "",
        petrol: "",
        overnight: "",
      },
    ],
    stages: [
      {
        destination: "Lione",
        cover:
          "https://www.fulltravel.it/wp-content/uploads/2016/10/Lione-festival-delle-luci.jpg",
        pointsofinterest: [
          {
            coordinates: "45.76128646154001, 4.8266270717433395",
            name: "Fontaine Saint Jean",
            description: "",
            cover:
              "https://www.blog-in-lyon.fr/wp-content/uploads/2017/09/lyon-en-photos-fontaine-place-saint-jean-cathedrale-saint-jean-blog-in-lyon-683x1024.jpg",
          },
          {
            coordinates: "45.760229045997, 4.826500765806566",
            name: "Place de Fourvière",
            description: "salire dalla funicolare",
            cover:
              "https://www.tropicalspirit.it/blog/wp-content/uploads/2019/11/Lione-768x510.jpg",
          },
          {
            coordinates: "45.767680739052324, 4.834742880208",
            name: "Place des Terreaux",
            description: "",
            cover:
              "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/131/2020/10/21183334/tERREAUX2__009-1.jpg",
          },
          {
            coordinates: "45.75821311333089, 4.83197687406149",
            name: "Place Bellecour",
            description: "",
            cover:
              "https://www.guide-lyon.fr/sites/default/files/styles/gallery_item_570x416/public/lieux/place-bellecour-lyon-1.jpg",
          },
        ],
        food: [
          {
            name: "Salade Lyonnaise",
            description:
              "Si tratta dell'insalata tipica di Lione, che combina l'uovo in camicia, le cipolle e il fegato di pollo adagiati su un letto di croccanti foglie di lattuga e accompagnati da crostini di pane. In alcuni casi, la troverete servita anche con pancetta e salsiccia che, però, non sono previste nella versione originale. Può costituire anche piatto unico.",
            restaurant: "",
            coordinates: "",
            cover:
              "https://th.bing.com/th/id/OIP.E7tRlpot89rO0C6rHpp7xgHaHa?pid=ImgDet&rs=1",
          },
          {
            name: "Rosette de Lyon",
            description:
              "Insieme alla Jèsus de Lyon, è il salume tipico della zona. Entrambi sono realizzati con carne di maiale: la Rosette de Lyon, in particolare, è fatta con le zampe dell'animale. Sfizioso, semplice e saporito, questo salume viene servito come antipasto ma può di fatto costituire anche un pranzo o uno spuntino leggero, tagliato a fettine sottili e accompagnato da formaggi tipici e altri assaggini.",
            restaurant: "",
            coordinates: "",
            cover:
              "https://th.bing.com/th/id/R.71eb72d73f3630ef1c8135c0b4a18071?rik=OS1WerjU9%2fBSFw&riu=http%3a%2f%2fwww.thechefcorner.com%2fwp-content%2fuploads%2f2018%2f10%2f1136.jpg&ehk=nVb4aOB4Pkce%2bc4MgS4uepcgyQZfveKAec7gXye7ipM%3d&risl=&pid=ImgRaw&r=0",
          },
          {
            name: "Foie de veau à la lyonnaise",
            description:
              "Tripudio di sapori intensi e decisi,il fegato di vitello alla lionese è uno dei tanti gustosissimi secondi a base di carne che costituiscono le fondamenta su cui poggia l'intera cucina di Lione. Un ottimo contorno che viene abbinato solitamente a questo piatto sono le patate lionesi, cotte con un pò di burro per dare la consistenza cremosa e con le cipolle per aromatizzarle al punto giusto. Una pietanza da fare venire davvero l'aquolina in bocca!",
            restaurant: "",
            coordinates: "",
            cover:
              "https://th.bing.com/th/id/R.47d17c3f4aed41023ab571f232443093?rik=T2PuIXcVebfIxQ&riu=http%3a%2f%2fwww.gillespudlowski.com%2fwp-content%2fuploads%2f2016%2f02%2fl1780679.jpg&ehk=UmJO9aMSRJfu0iF4fRnXnZKRG4Tdw53CTG%2fhI6f6vOE%3d&risl=&pid=ImgRaw&r=0",
          },
          {
            name: "Soupe à l'oignon gratinée",
            description:
              "Nei menù dei ristoranti, nella sezione degli antipasti, insieme all'insalata lionese, ai piatti di salumi tipici e all'andouille, potrete trovare facilmente la zuppa di cipolle gratinate che, nei mesi più freddi, costituisce un'ottima scelta per riscaldarsi dopo aver trascorso una giornata a zonzo per la città. Con la crosticina sulla superficie poi è il massimo!",
            restaurant: "",
            coordinates: "",
            cover:
              "https://th.bing.com/th/id/OIP.IV6QPid0wEgaYdphkAG4cwHaE8?pid=ImgDet&rs=1",
          },
          {
            name: "Tablier de sapeur",
            description:
              "Sempre a base di carne, la trippa alla lionese viene rigorosamente marinata nel vino bianco locale (di altissima qualità!) e insaporita con la senape di Digione. La ricetta è molto semplice: basta far bollire la trippa per 4/5 ore insieme a sedano, carote, un pizzico di sale, pepe nero e un tocco di erbe aromatiche (alloro, prezzemolo e timo); dopo averla scolata e tagliata in rettangoli da dieci centimentri circa l'uno, bisognerà lasciarla marinare nel vino bianco e nella senape per almeno tre ore. Dopodiché si passa la trippa nell'uovo, nella farina, di nuovo nell'uovo e per finire nel pangrattato per poi friggerla. A questo punto, basterà solo portarla in tavola: la salsa tartara o la salsa gribiche faranno il resto.",
            restaurant: "",
            coordinates: "",
            cover:
              "https://www.parlapapa.com/modules/ybc_blog/views/img/post/d1fd864c69-couv.jpg",
          },
          {
            name: "Andouillette",
            description:
              "Tornando in tema di insaccati, l'Andouillette è un prodotto della salumeria francese realizzato utilizzando l'apparato digerente del maiale (soprattutto, stomaco e intestino) che danno vita a una salsiccia dal gusto deciso ma non sgradevole, anche grazie alle erbe aromatiche sapientemente usate, alle spezie, ai vini. Pare che la storia dell'Andouillette sia piuttosto antica: il salume veniva apprezzato moltissimo ai tempi di Luigi II e, dopo, di Luigi XIV arrivando a conquistare il palato dello stesso Napoleone I. Attenzione, però, a non confonderla con l'Andouille (sempre a base di maiale) che si consuma fredda e che per questo è riportata solitamente tra gli antipasti.",
            restaurant: "",
            coordinates: "",
            cover:
              "https://th.bing.com/th/id/OIP.LSMSsO2xhfwYGCMCkQOfbgHaHa?pid=ImgDet&rs=1",
          },
          {
            name: "Quenelle brochet",
            description:
              "Piccole ma appetitose, le Quenelle altro non sono che polpette realizzate con pesce, pollo o altri tipi di carne, unite insieme con piccole quantità di uovo e pangrattato. Fino a qualche tempo fa utilizzate come guarnizione, oggi le Quenelle brochet sono diventate a tutti gli effetti un piatto a sè stante.",
            restaurant: "",
            coordinates: "",
            cover:
              "https://th.bing.com/th/id/OIP.WLIqdfuVZFAj0P82BKw6YAHaHa?pid=ImgDet&rs=1",
          },
          {
            name: "Boudin aux pommes",
            description:
              "Un altro piatto molto amato della tradizione culinaria lionese è il Boudin aux pommes, il sanguinaccio con le mele. Più semplice rispetto alla versione tedesca cui si aggiungono invece patate e cipolle.",
            restaurant: "",
            coordinates: "",
            cover:
              "https://www.pierre-champion.fr/2100-tm_thickbox_default/le-boudin-aux-pommes-sauce-marchand-de-vin-410-g-wfy2020.jpg",
          },
        ],
        sleep: [
          {
            coordinates: "",
            name: "",
            description: "",
            checkin: "16-08-2023",
            checkout: "17-08-2023",
          },
        ],
      },
      {
        destination: "Ars-sur-Formans",
        cover:
          "https://woody.cloudly.space/app/uploads/dombes-tourisme/2020/12/thumbs/basilique-saint-sixte-credit-sanctuaire-1200x900.jpg",
        pointsofinterest: [
          {
            coordinates: "45.9933709875147, 4.823159453139406",
            name: "Sanctuary of Ars",
            description: "",
            cover:
              "https://woody.cloudly.space/app/uploads/dombes-tourisme/2020/12/thumbs/basilique-saint-sixte-credit-sanctuaire-1200x900.jpg",
          },
        ],
        food: [],
        sleep: [
          {
            coordinates: "",
            name: "",
            description: "",
            checkin: "16-08-2023",
            checkout: "17-08-2023",
          },
        ],
      },
      {
        destination: "Orleans",
        cover:
          "https://th.bing.com/th/id/R.8429d2c505e1de7a93d10fbef87dbf5f?rik=pzG84rt5lt05rg&riu=http%3a%2f%2fwww.orangesmile.com%2fcommon%2fimg_final_large%2forleans_sightseeing.jpg&ehk=HzrLV5ug%2bNamkqbfsmKntGK60YXxHRIhFoDN0lZZEQg%3d&risl=&pid=ImgRaw&r=0",
        pointsofinterest: [
          {
            coordinates: "47.90193048967425, 1.9096506769980752",
            name: "Cattedrale di Orléans",
            description: "",
            cover:
              "https://th.bing.com/th/id/OIP.LF8jWUb7F6QpLX_II6R3LwHaJQ?pid=ImgDet&rs=1",
          },
          {
            coordinates: "47.90280143119411, 1.904363879245337",
            name: "Manège Sellier",
            description: "con Statue de Jeanne d'Arc",
            cover:
              "https://www.tropicalspirit.it/blog/wp-content/uploads/2019/11/Lione-768x510.jpg",
          },
          {
            coordinates: "47.90107163021511, 1.9025955987683119",
            name: "Maison de Jeanne d'Arc",
            description: "",
            cover:
              "https://th.bing.com/th/id/OIP.kjS8FsUX9gLTw2QMG2rdqQHaF7?pid=ImgDet&rs=1",
          },
          {
            coordinates: "47.90067243716535, 1.9116535252934816",
            name: "Rue de Bourgogne",
            description: "",
            cover:
              "https://th.bing.com/th/id/OIP.XiXto7Rk3kh2zijSe_0ekgHaE9?pid=ImgDet&rs=1",
          },
          {
            coordinates: "47.8994990337123, 1.913078975882104",
            name: "Rue Saint-Flou",
            description: "",
            cover:
              "https://th.bing.com/th/id/R.c4d61fc0517e00575f6d2d1709d6ca48?rik=ZNP9fPTKLuAbjg&riu=http%3a%2f%2ffarm5.staticflickr.com%2f4441%2f37133895712_256821b52f_b.jpg&ehk=mMqSxbKwYwin5ImaUgKdNTxxdUpNn6GYoEpNaEPlU4g%3d&risl=&pid=ImgRaw&r=0",
          },
          {
            coordinates: "47.89930548007198, 1.9094521965363684",
            name: "Rue de la Poterne",
            description: "",
            cover:
              "https://i.pinimg.com/originals/c4/2f/d7/c42fd771a2b673b4b491a9c154fc143b.jpg",
          },
          {
            coordinates: "47.89929338294545, 1.908694362046215",
            name: "Rue de la Charpenterie",
            description: "",
            cover:
              "https://th.bing.com/th/id/OIP.zBDlgFCuzhiIK57ha5_-jQHaFj?pid=ImgDet&rs=1",
          },
          {
            coordinates: "47.898313506307964, 1.9093619781446836",
            name: "Quai du Châtelet",
            description: "",
            cover:
              "https://gv-images.viamichelin.com/images/michelin_guide/max/NX-46990.jpg",
          },
        ],
        food: [
          {
            name: "fouace or fouée",
            description:
              "The Loire is the birthplace of writer François Rabelais and his most famous character, Gargantua a giant with an enormous appetite and a craving for the local fouaces-  little pockets or turnovers stuffed with many different fillings such as rillettes (a pork paté-style dish), melted butter or goat's cheese. A staple of the local cuisine, this traditional bread can be found in regional restaurants and markets- one is plain and baked in a wood-fired oven, the other looks and tastes more like a brioche. It makes a perfect side dish or appetiser.",
            restaurant: "",
            coordinates: "",
            cover:
              "https://www.headwater.com/wordpress/wp-content/uploads/1024px-Fou%C3%A9es_angevines_avec_rillettes.jpg",
          },
        ],
        sleep: [
          {
            coordinates: "",
            name: "",
            description: "",
            checkin: "16-08-2023",
            checkout: "17-08-2023",
          },
        ],
      },
      {
        destination: "Rouen",
        cover:
          "https://th.bing.com/th/id/OIP.omrYekXL_fU6owXBRHFabAHaFO?pid=ImgDet&rs=1",
        pointsofinterest: [
          {
            coordinates: "49.44143648229627, 1.0942589377615777",
            name: "Cattedrale di Notre-Dame",
            description: "",
            cover:
              "https://th.bing.com/th/id/OIP.LF8jWUb7F6QpLX_II6R3LwHaJQ?pid=ImgDet&rs=1",
          },
          {
            coordinates: "49.44282122769832, 1.0910036047940705",
            name: "Palais de Justice",
            description: "",
            cover:
              "https://th.bing.com/th/id/R.357c1db68d1af013cf994d06aca78800?rik=p68shG2dWMSiTg&riu=http%3a%2f%2fdanielclerc.fr%2fFrance%2f76_seine_maritime%2frouen%2fvieux_rouen%2f2015_rouen_palais_justice_003.JPG&ehk=JBp3GRCKRV7CuRPirmWIGJ9O96qBIx9uKkTYPgIHOiY%3d&risl=&pid=ImgRaw&r=0",
          },
          {
            coordinates: "47.90107163021511, 1.9025955987683119",
            name: "Rue du Gros Horloge",
            description: "",
            cover:
              "https://www.franciaturismo.net/wp-content/uploads/sites/4/normandia-rouen-via-grande-orologio.jpg",
          },
        ],
        food: [],
        sleep: [
          {
            coordinates: "",
            name: "",
            description: "",
            checkin: "16-08-2023",
            checkout: "17-08-2023",
          },
        ],
      },
      {
        destination: "Étretat",
        cover:
          "https://www.worldatlas.com/upload/9e/8c/fe/tretat-france-cliffs.jpg",
        pointsofinterest: [
          {
            coordinates: "49.44143648229627, 1.0942589377615777",
            name: "Sentier panoramique de la Falaise d'Aval",
            description: "",
            cover:
              "https://www.worldatlas.com/upload/9e/8c/fe/tretat-france-cliffs.jpg",
          },
        ],
        food: [],
        sleep: [
          {
            coordinates: "",
            name: "",
            description: "",
            checkin: "16-08-2023",
            checkout: "17-08-2023",
          },
        ],
      },
      {
        destination: "Saint-Laurent-sur-mer",
        cover:
          "https://lh5.googleusercontent.com/p/AF1QipNke-4OOhN_JX7942pYQly7QdZl6PThzMkLrUZm=w408-h272-k-no",
        pointsofinterest: [
          {
            coordinates: "49.36252243938997, -0.8586945679180255",
            name: "Cimitero e monumento alla memoria americano in Normandia",
            description: "",
            cover:
              "https://lh5.googleusercontent.com/p/AF1QipNke-4OOhN_JX7942pYQly7QdZl6PThzMkLrUZm=w408-h272-k-no",
          },
        ],
        food: [],
        sleep: [
          {
            coordinates: "",
            name: "",
            description: "",
            checkin: "16-08-2023",
            checkout: "17-08-2023",
          },
        ],
      },
      {
        destination: "Utah Beach",
        cover:
          "https://www.google.it/maps/place/Utah+Beach/@49.4230363,-1.1818896,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPym1Vk-iW2JZPl_wOSgqbA8s6ew6_pwAUXWO5Y!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPym1Vk-iW2JZPl_wOSgqbA8s6ew6_pwAUXWO5Y%3Dw111-h86-k-no!7i4080!8i3160!4m16!1m8!3m7!1s0x480b77a1c5df93c5:0x40c14484fb96840!2s50480+Sainte-Marie-du-Mont,+Francia!3b1!8m2!3d49.379026!4d-1.225989!16zL20vMGRjOWtf!3m6!1s0x480b76ebe89d3e27:0xe53e63a911e7f4e2!8m2!3d49.4230363!4d-1.1818896!10e5!16zL20vMDMxOGdt#",
        pointsofinterest: [
          {
            coordinates: "49.42501902299419, -1.1820356973766166",
            name: "Utah Beach D-Day",
            description: "",
            cover:
              "https://th.bing.com/th/id/OIP.MrtG6XlFi957ajHp_laR1AHaE8?pid=ImgDet&rs=1",
          },
        ],
        food: [],
        sleep: [
          {
            coordinates: "",
            name: "",
            description: "",
            checkin: "16-08-2023",
            checkout: "17-08-2023",
          },
        ],
      },
      {
        destination: "Abbazia di Mont-Saint-Michel",
        cover:
          "https://viaggiandonellabellezza.altervista.org/wp-content/uploads/2018/01/montsaint-1.jpg",
        pointsofinterest: [
          {
            coordinates: "48.63199334601681, -1.5079274281247257",
            name: "Abbazia di Mont-Saint-Michel",
            description: "",
            cover:
              "https://viaggiandonellabellezza.altervista.org/wp-content/uploads/2018/01/montsaint-1.jpg",
          },
        ],
        food: [],
        sleep: [
          {
            coordinates: "",
            name: "",
            description: "",
            checkin: "16-08-2023",
            checkout: "17-08-2023",
          },
        ],
      },
    ],
  },
];
