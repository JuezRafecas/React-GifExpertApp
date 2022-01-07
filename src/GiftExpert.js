import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

const GiftExpert = () =>{

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr></hr>
            <AddCategory setCategories={ setCategories }/>
            <ol>
                { categories.map(category =>
                    <GiftGrid 
                    key={category}
                    category={category} 
                    />
                )}
            </ol>
        </>
    )
}

export default GiftExpert