import { Box, Typography, styled } from "@mui/material";
import { LocationOn, SettingsBrightness, Opacity, Cloud } from "@mui/icons-material";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

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

const Information = ({ result }) => {
    console.log(result, "result");

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        return `${formattedDay}/${formattedMonth}/${year}`;
    }

    // const formatTimeTo24Hour = (timeString) => {
    //     const [hours, minutes, seconds] = timeString.split(':');
    //     const date = new Date(1970, 0, 1, hours, minutes, seconds);
        
    //     // Using toLocaleTimeString to format the time
    //     return date.toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' });
    //   };

    function convertTo24HourFormat(timeString) { 
        const [time, period] = timeString.split(' '); 
        // console.log(time,"time")
        // console.log(period,"period")
        const [hour, minute] = time.split(':'); 
        let formattedHour = parseInt(hour); 
      
        if (period === 'PM') { 
            formattedHour += 12; 
        } 
      
        return `${formattedHour}:${minute}`; 
    } 

    return (
        result && Object.keys(result).length > 0 ?
            <Box style={{ margin: '20px 60px' }}>
                <Row><LocationOn />Location: {result.location.name}</Row>
                <Row><SettingsBrightness />Temperature: {result.current.temp_c}</Row>
                <Row><Opacity />Humidity: {result.current.humidity}</Row>
                {/* <Row><Brightness5 />Sun rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6 />Sun set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
            <Row><Dehaze />Humidity: {result.weather[0].main}</Row> */}
                <Row><Cloud />Clouds: {result.current.cloud}</Row>
                <Box>
                    {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <div className="carousel-inner d-flex align-items-center text-center pad_top">
                            {result.forecast.forecastday.map((day, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <div className="d-block w-100 h-100">
                                        <p>Date: {formatDate(day.date)}</p>
                                        <p>Sunrise: {day.astro.sunrise}</p>
                                        <p>Sunset: {day.astro.sunset}</p>
                                        <p>Max Temperature: {day.day.maxtemp_c}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div> */}

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            result.forecast.forecastday.map((day, index) => (
                                // <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                //     <div className="d-block w-100 h-100">
                                //         <p>Date: {formatDate(day.date)}</p>
                                //         <p>Sunrise: {day.astro.sunrise}</p>
                                //         <p>Sunset: {day.astro.sunset}</p>
                                //         <p>Max Temperature: {day.day.maxtemp_c}</p>
                                //     </div>
                                // </div>
                                    <SwiperSlide key={index} className="d-block margin_top border border-dark rounded-2 background_Color">
                                         <p className="text-center">Date: {formatDate(day.date)}</p>
                                         <p className="py-2 text-center">Sunrise: {convertTo24HourFormat(day.astro.sunrise)}</p>
                                         <p className="py-1 text-center">Sunset: {convertTo24HourFormat(day.astro.sunset)}</p>
                                         <p className="text-center">Max Temperature: {day.day.maxtemp_c}</p>
                                    </SwiperSlide>
                            ))
                        }

                    </Swiper>




                </Box>
            </Box>
            : <Error>Please enter the values</Error>
    )
}

export default Information;