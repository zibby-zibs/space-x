import { useGlobalContext } from "./context";
import { icons } from "../db";
const Crew = () => {

    const { crewPeople, setCrewPeople, value, setValue } = useGlobalContext();
    const crew = crewPeople.crew
    const { name, bio, role, images } = crew[value]
    return ( 
        <main className="crewPage">
                <h2 className="meet-crew">02 MEET YOUR CREW</h2>
                <section className="crew-info">
                    <aside className="crew-stat">
                        <h2>{role}</h2>
                        <h1>{name}</h1>
                        <h3>{bio}</h3>  
                        {
                        icons.map((icon, index)=>{
                            const { id, text } = icon
                            return(
                                
                                    <button 
                                        key={id}
                                        onClick={()=>setValue(index)}
                                        className="circle"
                                    >
                                        <span>{text}</span>

                                    </button>
                                
                                
                            )
                        })
                    }   
                    </aside>
                    <aside>
                        <img src={images.webp} alt="crew member"  className="crew-image"/>   
                    </aside>
                </section>
               
        </main>
     );
}
 
export default Crew;