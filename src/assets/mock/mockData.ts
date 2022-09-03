export const carouselItems = [
  {
    icon: "Icon",
    name: "Bitcoin",
    shortName: "BTC",
    price: "$145,25",
    nature: "up",
    changeInPercent: "23%",
  },
  {
    icon: "Icon",
    name: "Etherium",
    shortName: "ETH",
    price: "$87,25",
    nature: "up",
    changeInPercent: "54%",
  },
  {
    icon: "Icon",
    name: "Doge coin",
    shortName: "DGC",
    price: "$10,45",
    nature: "down",
    changeInPercent: "43%",
  },
  {
    icon: "Icon",
    name: "Paypal",
    shortName: "PP",
    price: "$5,25",
    nature: "down",
    changeInPercent: "28%",
  },
  {
    icon: "Icon",
    name: "Tether",
    shortName: "USDT",
    price: "$1,25",
    nature: "up",
    changeInPercent: "20%",
  },
  {
    icon: "Icon",
    name: "Binance USD",
    shortName: "BUSD",
    price: "$1,85",
    nature: "down",
    changeInPercent: "-0.02",
  },
];

export const mockRecentTxns = [
  { id: 1, recepient: "Tauqeer", day: "Today", amount: "12.00" },
  { id: 2, recepient: "Tanvir", day: "Yesterday", amount: "54.55" },
  { id: 3, recepient: "Saad", day: "Yesterday", amount: "43.12" },
  { id: 4, recepient: "Karim Khan", day: "2 days ago", amount: "10.00" },
  { id: 5, recepient: "Karim Khan", day: "2 days ago", amount: "10.00" },
  { id: 6, recepient: "Karim Khan", day: "2 days ago", amount: "10.00" },
];

export const chartLabels = [
  "Januray",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const blockchainResponse = {
  blockchain: [
    {
      index: 0,
      previous_hash: "",
      proof: 100,
      time: 0,
      transactions: [],
    },
    {
      index: 1,
      previous_hash:
        "f43bf96b7d7071552937a9fa0a82076d92554d2d593eaf76d8e77f19bd7cf5b8",
      proof: 340,
      time: 1661004168.4587762,
      transactions: [
        {
          amount: 10.0,
          recipient: "1",
          sender: "Mining",
          signature: "",
        },
      ],
    },
    {
      index: 2,
      previous_hash:
        "bd6c353cf38a53d8e331ff9f5e0315edc5fe3c67070d6a09eb1a2acc126bc9d7",
      proof: 586,
      time: 1661004601.9332917,
      transactions: [
        {
          amount: 2.0,
          recipient: "2",
          sender: "1",
          signature: "",
        },
        {
          amount: 10.0,
          recipient: "1",
          sender: "Mining",
          signature: "",
        },
      ],
    },
    {
      index: 3,
      previous_hash:
        "532ac53137f28c3199f9c85b35f4d2205e471820a851913e270cd9f0c0d53a1c",
      proof: 834,
      time: 1661004691.7992156,
      transactions: [
        {
          amount: 2.0,
          recipient: "2",
          sender: "1",
          signature: "",
        },
        {
          amount: 10.0,
          recipient: "1",
          sender: "Mining",
          signature: "",
        },
      ],
    },
    {
      index: 4,
      previous_hash:
        "a2da6195a43e2ae5d2064d2a518592fa1b6b36ee271236dc81cce79a96311284",
      proof: 116,
      time: 1661006670.4662993,
      transactions: [
        {
          amount: 10.0,
          recipient: "1",
          sender: "Mining",
          signature: "",
        },
      ],
    },
    {
      index: 5,
      previous_hash:
        "1bd9dc2d334bd2ac02a3c530f78a8ec5adbb125d0c6ebd2f55e702ee4896b048",
      proof: 78,
      time: 1661006842.4719315,
      transactions: [
        {
          amount: 10.0,
          recipient: "Tauqeer",
          sender: "Mining",
          signature: "",
        },
      ],
    },
    {
      index: 6,
      previous_hash:
        "54a4c6e32a0293b852379496c64ff730a44e6a15af0536e24ab42ca21e5b794e",
      proof: 154,
      time: 1661006869.0168378,
      transactions: [
        {
          amount: 10.0,
          recipient: "Tauqeer",
          sender: "Mining",
          signature: "",
        },
      ],
    },
    {
      index: 7,
      previous_hash:
        "0dd58f4175c4bd89c7b7b090d1c3078fed7392c0524c6fda5c6ad368ed20264f",
      proof: 263,
      time: 1661267499.1495829,
      transactions: [
        {
          amount: 10.0,
          recipient:
            "30819f300d06092a864886f70d010101050003818d0030818902818100ddf4e2e85d9366bc346316cec38ce33f068d13a822ea647d600e98fc7fcee528534e7681d15f6a80bbb49252aeccf120f76fd637018e62c23e6feb644e2864f3c77be7c1ef20c948846dd07228ac55a8614e873d0e948d58dd437b970521fad29b4e0351b954dc6b5b9e0ba1f88d53b484cf68f4a9a7f58ee801dc6eeb006cf70203010001",
          sender: "Mining",
          signature: "",
        },
      ],
    },
    {
      index: 8,
      previous_hash:
        "baec214cfffcd183448e1fbb15708145b0a7029dd7f4c6c2d7de4db35877977e",
      proof: 268,
      time: 1661883368.696721,
      transactions: [
        {
          amount: 10.0,
          recipient:
            "30819f300d06092a864886f70d010101050003818d0030818902818100b5711697e8fb5fcb8203a211d525f1337e0d145c055c21e171748fddfd8fd7fa954f35ac91c431b7aa29ab8dd0ae1891372f9267ecd7199ce024ed94ea5e1c500d45750c49070efc7bb5dbd4f98a2022d139f55f607b0215eed3c914cd261c393db26f9d61593bdfa61025683e90160684735838d9ba26d8972c77784a6c66e70203010001",
          sender: "Mining",
          signature: "",
        },
      ],
    },
    {
      index: 9,
      previous_hash:
        "c4353364b408999de78fc1433e2cfaf1e8898ef69147c93bd625fcaf6cca91a2",
      proof: 428,
      time: 1661883787.1993096,
      transactions: [
        {
          amount: 10.0,
          recipient:
            "30819f300d06092a864886f70d010101050003818d0030818902818100bce17073a22cde4e67c07169b7eae3c9818749e31529d98045c1d45d5fed6d5b98dbeff4b6ff87563ba58b80ffb5ddaaba27a3acb14f0048abc0217f81abaac395da7a5b4db4a430b340b75f157db9f22e7cca4c2a6b4f088af2a0792327622d2a743b72507b9a30a829047faa647dce4940cc91b456ef03e4bd6c51596dbf290203010001",
          sender: "Mining",
          signature: "",
        },
      ],
    },
  ],
  message: "Blockchain fetched successfully.",
};
