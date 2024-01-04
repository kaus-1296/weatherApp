import { Box, styled } from "@mui/material";
import Sunset from '../assests/images/bg.jpg';
import Form from "../components/Form";
import Information from "../components/Information";
import { useState } from "react";
import LocationDetector from "../components/LocationDetector";



const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})



const Image = styled(Box)({
    backgroundImage : `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
})

const Home = () => {

    const [result, setResult] = useState({});
    const [cityName, setCityName] = useState({})

    return(
        <Component>
            <Image></Image>
            <Box style={{ width: '73%', height: '80%'}}>
                <Form setResult={setResult} city={cityName} />
                <p className="text-center pt-2"><LocationDetector result={result} setCityName={setCityName} /></p>
                <Information result={result} />
            </Box>
        </Component>
    )
}

export default Home;