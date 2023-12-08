import DashBoard from "@/Component/layout/DashBoard";

const Book = ({ books }) => {
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table mt-20 w-full">
          <thead>
            <tr className="bg-black text-white text-xl text-center">
              <th>NO.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Persons</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="text-center text-lg">
                <th>{index + 1}</th>
                <td>{book?.name}</td>
                <td>{book?.email}</td>
                <td>{book?.person}</td>
                <td>{book?.date}</td>
                <td>{book?.schedule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Book;
Book.getLayout = function getLayout(page) {
  return <DashBoard>{page}</DashBoard>;
};
export const getServerSideProps = async () => {
  const res = await fetch("https://encouraging-pants-dog.cyclic.app/book");
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return {
    props: {
      books: data,
    },
  };
};
