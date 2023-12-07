import DashBoard from "@/Component/layout/DashBoard";

const AddMenu = () => {
  const handleFood = (e) => {
    e.preventDefault();

    const title = e.target.name.value;
    const price = e.target.price.value;
    const image_url = e.target.image.value;
    const description = e.target.description.value;

    const menudata = {
      title: title,
      price: price,
      image_url: image_url,
      description: description,
    };

    fetch("http://localhost:5000/addFood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menudata),
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="lg:w-[500px] border-2  shadow-lg shadow-  mt-14">
          <h1 className="text-center text-3xl font-bold">Add Menu</h1>
          <form onSubmit={handleFood}>
            <div className="flex flex-col ml-0 lg:ml-5 ">
              <label className="label">
                <span className="text-base text-black font-bold">Name</span>
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                name="name"
                className="text-center py-2 lg:w-[450px] my-2 focus:outline-none rounded border-gray-500 border-2 "
              />
            </div>

            <div className="flex flex-col ml-0 lg:ml-5">
              <label className="label">
                <span className="text-base text-black font-bold">
                  Image URL
                </span>
              </label>
              <input
                type="text"
                required
                placeholder="image url"
                name="image"
                className="text-center py-2 lg:w-[450px] my-2 focus:outline-none rounded border-gray-500 border-2 "
              />
            </div>
            <div className="flex flex-col ml-0 lg:ml-5">
              <label className="label">
                <span className="text-base text-black font-bold">Price</span>
              </label>
              <input
                type="number"
                required
                placeholder="Price"
                name="price"
                className="text-center py-2 lg:w-[450px] my-2 focus:outline-none rounded border-gray-500 border-2 "
              />
            </div>
            <div className="flex flex-col ml-0 lg:ml-5">
              <label className="label">
                <span className="text-base text-black font-bold">
                  Description
                </span>
              </label>
              <textarea
                type="text"
                required
                placeholder="Description"
                name="description"
                className="text-center py-2 lg:w-[450px] h-48 my-2 focus:outline-none rounded border-gray-500 border-2 "
              />
            </div>
            <div className="flex justify-center">
              <input
                className="px-48 cursor-pointer py-2 border-2 border-orange-600 
             text-white mt-8 bg-orange-600 hover:text-orange-600 hover:bg-white"
                value="Add Food"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;

AddMenu.getLayout = function getLayout(page) {
  return <DashBoard>{page}</DashBoard>;
};
