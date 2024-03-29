import { Box, InputBase, Button, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { getWeather } from "../services/api";

const Container = styled(Box)({
    background: '#445A6F',
    padding: 10
});

const Input = styled(InputBase)({
    color: '#FFF',
    marginRight: 20,
    fontSize: 18
});

const GetButton = styled(Button)({
    background: '#e67e22',
    width: 150
})

const Form = ({setResult, city}) => {
    const [data, setData] = useState({city: '', country: ''})

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const getWeatherInfo = async () => {
        let response = await getWeather(data.city, data.country)
        setResult(response)
    }

    useEffect(() => {
        setData({...data, city: city?.location?.name});
    },[city]);

    return (
        <Container>
            <Input 
                placeholder="City"
                onChange={(e) => handleChange(e)}
                name="city"
                value={data.city}
            />
            <Input 
                placeholder="Country"
                onChange={(e) => handleChange(e)}
                name="country"
            />
            <GetButton 
                variant="contained"
                onClick={() => getWeatherInfo()}
                >
                Get Weather
            </GetButton>
        </Container>
    )
}

export default Form;