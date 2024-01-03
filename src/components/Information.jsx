import { Box, Typography, styled } from "@mui/material";
import { LocationOn, SettingsBrightness, Opacity, Cloud } from "@mui/icons-material";

// Brightness5, Brightness6, Dehaze,


const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});

const Error = styled(Typography)({
    color: 'red',
    margin: 50,
    padding: 20
})

const Information = ({result}) => {
    console.log(result,"result");
    return (
        result && Object.keys(result).length > 0 ?
        <Box style={{margin: '20px 60px'}}>
            <Row><LocationOn />Location: {result.location.name}</Row>
            <Row><SettingsBrightness />Temperature: {result.current.temp_c}</Row>
            <Row><Opacity />Humidity: {result.current.humidity}</Row>
            {/* <Row><Brightness5 />Sun rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6 />Sun set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
            <Row><Dehaze />Humidity: {result.weather[0].main}</Row> */}
            <Row><Cloud />Clouds: {result.current.cloud}</Row>
        </Box> 
        : <Error>Please enter the values</Error>
    )
}

export default Information;