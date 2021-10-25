import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order online for Touchless Delivery"
                backgroungImg="model-s.jpg"
                LeftButtonText="Custom order"
                RightButtonText="Existing inventory"
            />
            <Section
                title="Model Y"
                description="Order online for Touchless Delivery"
                backgroungImg="model-y.jpg"
                LeftButtonText="Custom order"
                RightButtonText="Existing inventory"

            />
            <Section
                title="Model 3"
                description="Order online for Touchless Delivery"
                backgroungImg="model-3.jpg"
                LeftButtonText="Custom order"
                RightButtonText="Existing inventory"
            />
            <Section
                title="Model X"
                description="Order online for Touchless Delivery"
                backgroungImg="model-x.jpg"
                LeftButtonText="Custom order"
                RightButtonText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroungImg="solar-panel.jpg"
                LeftButtonText="Order Now"
                RightButtonText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than  a New Roof Plus Solar Panels"
                backgroungImg="solar-roof.jpg"
                LeftButtonText="Order Now"
                RightButtonText="Learn more"
            />
            <Section
                title="Acessories"
                description=""
                backgroungImg="accessories.jpg"
                LeftButtonText="Shop now"
               
            />


        </Container>
    )
}

export default Home

const Container = styled.div`
scroll-snap-type:y mandatory;
  overflow-y:scroll;
  overflow-x:hidden;
height:100vh;

`
