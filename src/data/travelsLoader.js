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
              "https://www.fulltravel.it/wp-content/uploads/2016/10/Lione-festival-delle-luci.jpg",
          },
          {
            coordinates: "45.760229045997, 4.826500765806566",
            name: "Place de Fourvière",
            description: "salire dalla funicolare",
            cover:
              "https://www.fulltravel.it/wp-content/uploads/2016/10/Lione-festival-delle-luci.jpg",
          },
          {
            coordinates: "45.767680739052324, 4.834742880208",
            name: "Place des Terreaux",
            description: "",
            cover:
              "https://www.fulltravel.it/wp-content/uploads/2016/10/Lione-festival-delle-luci.jpg",
          },
          {
            coordinates: "45.75821311333089,4.83197687406149",
            name: "Place Bellecour",
            description: "",
            cover:
              "https://www.fulltravel.it/wp-content/uploads/2016/10/Lione-festival-delle-luci.jpg",
          },
        ],
        food: [
          {
            name: "Salade Lyonnaise",
            description:
              "Si tratta dell'insalata tipica di Lione, che combina l'uovo in camicia, le cipolle e il fegato di pollo adagiati su un letto di croccanti foglie di lattuga e accompagnati da crostini di pane. In alcuni casi, la troverete servita anche con pancetta e salsiccia che, però, non sono previste nella versione originale. Può costituire anche piatto unico.",
            restaurant: "",
            coordinates: "",
          },
          {
            name: "Rosette de Lyon",
            description:
              "Insieme alla Jèsus de Lyon, è il salume tipico della zona. Entrambi sono realizzati con carne di maiale: la Rosette de Lyon, in particolare, è fatta con le zampe dell'animale. Sfizioso, semplice e saporito, questo salume viene servito come antipasto ma può di fatto costituire anche un pranzo o uno spuntino leggero, tagliato a fettine sottili e accompagnato da formaggi tipici e altri assaggini.",
            restaurant: "",
            coordinates: "",
          },
          {
            name: "Foie de veau à la lyonnaise",
            description:
              "Tripudio di sapori intensi e decisi,il fegato di vitello alla lionese è uno dei tanti gustosissimi secondi a base di carne che costituiscono le fondamenta su cui poggia l'intera cucina di Lione. Un ottimo contorno che viene abbinato solitamente a questo piatto sono le patate lionesi, cotte con un pò di burro per dare la consistenza cremosa e con le cipolle per aromatizzarle al punto giusto. Una pietanza da fare venire davvero l'aquolina in bocca!",
            restaurant: "",
            coordinates: "",
          },
          {
            name: "Soupe à l'oignon gratinée",
            description:
              "Nei menù dei ristoranti, nella sezione degli antipasti, insieme all'insalata lionese, ai piatti di salumi tipici e all'andouille, potrete trovare facilmente la zuppa di cipolle gratinate che, nei mesi più freddi, costituisce un'ottima scelta per riscaldarsi dopo aver trascorso una giornata a zonzo per la città. Con la crosticina sulla superficie poi è il massimo!",
            restaurant: "",
            coordinates: "",
          },
          {
            name: "Tablier de sapeur",
            description:
              "Sempre a base di carne, la trippa alla lionese viene rigorosamente marinata nel vino bianco locale (di altissima qualità!) e insaporita con la senape di Digione. La ricetta è molto semplice: basta far bollire la trippa per 4/5 ore insieme a sedano, carote, un pizzico di sale, pepe nero e un tocco di erbe aromatiche (alloro, prezzemolo e timo); dopo averla scolata e tagliata in rettangoli da dieci centimentri circa l'uno, bisognerà lasciarla marinare nel vino bianco e nella senape per almeno tre ore. Dopodiché si passa la trippa nell'uovo, nella farina, di nuovo nell'uovo e per finire nel pangrattato per poi friggerla. A questo punto, basterà solo portarla in tavola: la salsa tartara o la salsa gribiche faranno il resto.",
            restaurant: "",
            coordinates: "",
          },
          {
            name: "Andouillette",
            description:
              "Tornando in tema di insaccati, l'Andouillette è un prodotto della salumeria francese realizzato utilizzando l'apparato digerente del maiale (soprattutto, stomaco e intestino) che danno vita a una salsiccia dal gusto deciso ma non sgradevole, anche grazie alle erbe aromatiche sapientemente usate, alle spezie, ai vini. Pare che la storia dell'Andouillette sia piuttosto antica: il salume veniva apprezzato moltissimo ai tempi di Luigi II e, dopo, di Luigi XIV arrivando a conquistare il palato dello stesso Napoleone I. Attenzione, però, a non confonderla con l'Andouille (sempre a base di maiale) che si consuma fredda e che per questo è riportata solitamente tra gli antipasti.",
            restaurant: "",
            coordinates: "",
          },
          {
            name: "Quenelle brochet",
            description:
              "Piccole ma appetitose, le Quenelle altro non sono che polpette realizzate con pesce, pollo o altri tipi di carne, unite insieme con piccole quantità di uovo e pangrattato. Fino a qualche tempo fa utilizzate come guarnizione, oggi le Quenelle brochet sono diventate a tutti gli effetti un piatto a sè stante.",
            restaurant: "",
            coordinates: "",
          },
          {
            name: "Boudin aux pommes",
            description:
              "Un altro piatto molto amato della tradizione culinaria lionese è il Boudin aux pommes, il sanguinaccio con le mele. Più semplice rispetto alla versione tedesca cui si aggiungono invece patate e cipolle.",
            restaurant: "",
            coordinates: "",
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
    ],
  },
];
