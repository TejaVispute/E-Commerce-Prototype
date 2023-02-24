import { useData } from "../Context/DataContext";
import { Link } from 'react-router-dom'
const Home = () => {
    let { Data } = useData();
    return (
        // This is home page of cards
        <div className="cardContainer" >
            {
                Data.map((e) => {
                    let url = `/productdetails/${e.mobile}`;

                    return (
                        <div key={e.Id} className="mt-5" style={{ backgroundColor: "skyblue", width: "60%", border: "1px solid black", marginBottom: "10px" }}>
                            <h3>{e.mobile}</h3>
                            <img style={{ width: "60%" }} src={e.image} alt="" />
                            <p>{e.price} /-</p>


                            <Link style={{ textDecoration: "none" }} to={url}>View Details</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;