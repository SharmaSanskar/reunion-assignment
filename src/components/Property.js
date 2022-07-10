const Property = ({ data }) => {
  return (
    <section className="bg-white rounded-md m-2 p-4">
      <div className="w-72 h-50 mb-2">
        <img
          className="w-full h-full object-cover overflow-hidden"
          src={data.image}
          alt={data.name}
        />
      </div>
      <h2>
        <span className="text-purple-600 font-bold text-lg">${data.price}</span>
        /month
      </h2>
      <h2 className="font-bold text-xl">{data.name}</h2>
      <h3 className="mb-2">{data.location}</h3>
      <div>
        <span className="mr-2">
          <b>Bedrooms: </b>
          {data.bedrooms}
        </span>
        <span>
          <b>Bathrooms: </b>
          {data.bathrooms}
        </span>
      </div>
    </section>
  );
};

export default Property;
