import DashBoard from "@/Component/layout/DashBoard";

const MYBook = ({ books }) => {
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table mt-20 w-full">
          <thead>
            <tr className="bg-black text-white text-xl text-center">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Persons</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book, index) => (
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

export default MYBook;
MYBook.getLayout = function getLayout(page) {
  return <DashBoard>{page}</DashBoard>;
};

export const getServerSideProps = async ({ req }) => {
  try {
    const userEmail = req.headers.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("userEmail="))
      ?.split("=")[1];
    const decodedEmail = decodeURIComponent(userEmail);

    if (!decodedEmail) {
      throw new Error("User email not found");
    }

    // Use userEmail to fetch data from your API or database
    const res = await fetch(
      `https://encouraging-pants-dog.cyclic.app/mybook/${decodedEmail}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const books = await res.json();

    return {
      props: {
        books,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        books: [],
      },
    };
  }
};
