export function getAllProperties() {
  return [
    {
      id: 1,
      name: "Palm Harbour",
      type: "houses",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGI6MVnc4PyHx6DxWho0LVVwLhgmarjarvTcJtststZiaMFrdTdXA7DlN12EX2Tyqaudc&usqp=CAU",
      price: 2600,
      bedrooms: 3,
      bathrooms: 2,
      location: "New York, USA",
      moveDate: new Date(2022, 8, 15),
    },
    {
      id: 2,
      name: "Beach Harbour",
      type: "houses",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xGVsrA875_C8b0J1FaLnyaVYkF0IDlvI11F4HBlXJGV1jG2BQSRtRO6xzB7AHIun6cQ&usqp=CAU",
      price: 600,
      bedrooms: 2,
      bathrooms: 2,
      location: "California, USA",
      moveDate: new Date(2022, 10, 15),
    },
    {
      id: 3,
      name: "Desert Ave",
      type: "buildings",
      image:
        "https://images.adsttc.com/media/images/51d4/84a8/b3fc/4bea/e100/01d6/large_jpg/Portada.jpg?1372882078",
      price: 3500,
      bedrooms: 5,
      bathrooms: 5,
      location: "Texas, USA",
      moveDate: new Date(2022, 7, 15),
    },
    {
      id: 4,
      name: "Winter Field",
      type: "buildings",
      image:
        "https://images.adsttc.com/media/images/5fc7/7df4/63c0/1773/ce00/01c4/newsletter/Matrix-final(1).jpg?1606909402",
      price: 1400,
      bedrooms: 3,
      bathrooms: 2,
      location: "New York, USA",
      moveDate: new Date(2022, 10, 15),
    },
    {
      id: 5,
      name: "Liberty Avenue",
      type: "houses",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzlMZ_aVTrSO9Q5Qoj0vZKLAy_xjmFjyWmfNvSlj-HtEGhXIcgvUp3akCFv0bjA6drys&usqp=CAU",
      price: 1200,
      bedrooms: 2,
      bathrooms: 2,
      location: "New York, USA",
      moveDate: new Date(2022, 10, 15),
    },
    {
      id: 6,
      name: "Broadway Street",
      type: "houses",
      image:
        "https://images.adsttc.com/media/images/5efe/1f7f/b357/6540/5400/01d7/newsletter/archdaily-houses-104.jpg?1593712501",
      price: 2200,
      bedrooms: 3,
      bathrooms: 3,
      location: "New York, USA",
      moveDate: new Date(2022, 7, 15),
    },
  ];
}

// Returns locations array from all properties data
export function getLocations() {
  return [...new Set(getAllProperties().map((property) => property.location))];
}

// Returns fixed list of property types
export function getPropertyTypes() {
  return ["houses", "buildings"];
}

// Returns price range [startPrice, endPrice]
export function getPriceRange() {
  return [
    [500, 999],
    [1000, 2499],
    [2500, 4999],
    [5000, 9999],
  ];
}
