import { useGlobalContext } from "./context";
import { numbers } from "../db";


const Technology = () => {

    const { crewPeople, value, setValue } =  useGlobalContext();
    const technology = crewPeople.technology;

    const { name, description, images } = technology[value]
    return ( 
        <main className="technology">
            <h2 className="space-launch">03 SPACE LAUNCH 101</h2>
            <section className="technology-container">
                <aside>
                    {
                        numbers.map((number, index)=>{
                            return (
                                <div key={number.id} className="technology-numbers" onClick={()=>setValue(index)}>
                                    {number.text}
                                </div>
                            )
                        })
                    }
                </aside>
                <aside className="technology-details">
                    <h4>THE TERMINOLOGY...</h4>
                    <h1>{name}</h1>
                    <h3>{description}</h3>
                </aside>
                <aside>
                    <img src={images.portrait} alt="launch" className="technology-image"/>
                </aside>
            </section>
        </main>
     );
}
 
export default Technology;