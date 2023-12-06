import DashBoard from "@/Component/layout/DashBoard";
import auth from "@/firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";


const AddReview = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const handleReview = (e) => {
        e.preventDefault();
       
        const review= e.target.review.value;
        const image = e.target.image.value;
        console.log( review, image);
        const reviewdata = {
            name: user.displayName,
            review: review,
            image: image
        }
        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(reviewdata)
    })
      .then(res => res.json())
      .then(data => {
      console.log(data,"28 line data");
            
        })
    }
    return (
        <div className="container mx-auto">
            <div className=" flex justify-center h-screen">
                <div className=" w-full lg:w-[400px]  px-7 mt-20 h-fit">
                    <h1>Write Your Opinion About </h1>
                    <form onSubmit={handleReview}>
                   
                   <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Review</span>
            </label>
            <textarea type="text" required placeholder="Your review" name="review" className="text-center py-2 w-80 h-44 my-2 focus:outline-none rounded border-gray-500 border-2 "  />
            
          </div>
                   <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Image path</span>
            </label>
            <input type="text" required placeholder="Your Name" name="image" className="text-center py-2 w-80 my-2 focus:outline-none rounded border-gray-500 border-2 "  />
            
                    </div>
                    <div className="flex justify-center" >
            <input  className="px-14 cursor-pointer py-2 border-2 border-black  text-white mt-8 bg-black hover:text-black hover:bg-white" type="submit" />
          </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;

AddReview.getLayout = function getLayout(page) {
    return <DashBoard>{ page}</DashBoard>
};