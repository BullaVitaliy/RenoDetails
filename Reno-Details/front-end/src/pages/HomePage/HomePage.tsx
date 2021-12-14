import React from "react";

//import HomePage Components
import BlockOnePreview from './../../components/HomePageComponents/block-one-preview/block-one-preview';
import AllModels from './../../components/HomePageComponents/all-models/all-models';
import UniversalCategories from './../../components/HomePageComponents/universal-categories/universal-categories';

function HomePage() {
    return (
        <>
            <BlockOnePreview/>
            <AllModels/>  
            <UniversalCategories/>
        </>            
    )
}

export default HomePage;