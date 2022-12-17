import { useGlobalContext } from "./context";

const Destination = () => {
    const { value, crewPeople, setValue } = useGlobalContext();
    const destination = crewPeople.destinations;
    const { name, images,description,distance,travel } = destination[value];
    return ( 
        <main className="destination">
            <h2 className="pick-destination">02 PICK YOUR DESTINATION</h2>
            <section className="destination-info">
                <aside>
                    <img src={images.png} alt="" />
                </aside>
                <aside className="right-container">
                    {
                        destination.map((destination, index)=>{
                            return (
                                <h4 
                                    key={destination.id}
                                    className="destination-names"
                                    onClick={()=>setValue(index)}
                                >
                                    {destination.name}
                                </h4>
                            )
                        })
                    }
                    <h1 className="destination-name">{name}</h1>
                    <h4>{description}</h4>
                    <div className="line"></div>
                    <aside className="footer">
                        <div>
                            <h3>AVG. DISTANCE</h3>
                            <h2>{distance}</h2>
                        </div>
                        <div>
                            <h3>EST. TRAVEL TIME</h3>
                            <h2>{travel}</h2>
                        </div>
                    </aside>
                </aside>
            </section>
        </main>
     );
}
 
export default Destination;