import Header from "./Header";
import Footer from "./Footer";
import './AllToursData'
import '../css/Tours.css';

import React, { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import AllToursData from "./AllToursData";

function Tours() {

    const options = [
        { value: 'Switzerland', label: 'Switzerland' },
        { value: 'Greece', label: 'Greece' },
        { value: 'Italy', label: 'Italy' },
        { value: 'Spain', label: 'Spain' },
        { value: 'Japan', label: 'Japan' },
        { value: 'Indonesia', label: 'Indonesia' },
        { value: 'Brazil', label: 'Brazil' },
        { value: 'Morocco', label: 'Morocco' },
        { value: 'Kenya', label: 'Kenya' },
        { value: 'France', label: 'France' },
    ];

    const [daysStepper , setDaysStepper] = useState(1);

    const [peopleStepper , setPeopleStepper] = useState(1);

    const [filteredTours , setFilterdTours] = useState(AllToursData);

    const [filters , setFilters] = useState({
        location : null,
        days : '' ,
        people: ''
    })

    console.log(filters.location)

    let handleFilter = (e) => {
        e.preventDefault();

        let filtered = AllToursData;

        if (filters.location) {
            filtered = filtered.filter((item) => item.location === filters.location);
        }

        if (filters.days) {
            filtered = filtered.filter((item) => String(item.days) === filters.days);
        }

        if (filters.people) {
            filtered = filtered.filter((item) => Number(item.people) >= filters.people);
        }

        setFilterdTours(filtered); 
    };

    const routerLocation = useLocation();

    const [selectedOption, setSelectedOption] = useState(null);
    
useEffect(() => {
    if (routerLocation.state && routerLocation.state.location) {
        const newLocation = routerLocation.state.location;

        setFilters(prev => ({ ...prev, location: newLocation }));

        setSelectedOption({ label: newLocation, value: newLocation });

        const filtered = AllToursData.filter(item => item.location === newLocation);
        setFilterdTours(filtered);
    }
}, [routerLocation.state]);

    return ( 
        <>
            <Header/>
            <section className="tour-page">
                <div className="tour-title">
                    <h1><span>All</span> Tours</h1>
                </div>
                <form>
                    <div className="items">
                        <h1><i class='bx  bx-map'  ></i> Destination</h1>
                            <Select
                            options={options}
                            value={selectedOption}
                            className="select-location"
                            classNamePrefix="custom-select"
                            filterOption={(option, inputValue) => {
                                if (!inputValue) return true;
                                return option.label.toLowerCase().startsWith(inputValue.toLowerCase());
                            }}
                            onChange={(option) => {
                                setSelectedOption(option);
                                setFilters((prev) => ({ ...prev , location : option.value }))
                            }}
                            />          
                    </div>
                    <div className="items">
                        <h1><i class='bx  bx-calendar-alt'  ></i> Number of Days</h1>
                        <div className="stepper">
                            <button type="button" onClick={() => setDaysStepper(prev => {
                                const newValue = prev > 1 ? prev - 1 : prev ;
                                setFilters(previous => ({...previous , days : String(newValue) }));
                                return newValue ;
                            } )}
                            >-</button>
                            <p>{daysStepper}</p>
                            <button type="button" 
                            onClick={() => setDaysStepper(prev =>  { 
                                    const newValue = prev + 1 ; 
                                    setFilters(previous => ({...previous , days : String(newValue) }));
                                    return newValue ;
                                    } )}
                            >+</button>
                        </div>
                    </div>
                    <div className="items">
                        <h1><i class='bx  bx-user'  ></i> Number of People</h1>
                        <div className="stepper">
                            <button type="button" onClick={() => setPeopleStepper(prev => {
                                const newValue = prev > 1 ? prev - 1 : prev ;
                                setFilters(previous => ({...previous , people : String(newValue) }));  
                                return newValue ;     
                            } )}
                            >-</button>
                            <p>{peopleStepper}</p>
                            <button type="button"
                             onClick={() => setPeopleStepper(prev =>  {
                                const newValue = prev + 1 ;
                                setFilters(previous => ({...previous , people : String(newValue) }));
                                return newValue ;
                             } )}
                            >+</button>
                        </div>
                    </div>
                    <button className="search" onClick={handleFilter}>Search</button>
                </form>
                <div className="tours">
                    {filteredTours.map((item) => (
                    <div className="item" key={item.id}>
                        <p><i className='bx bxs-star'></i> {item.score}</p>
                        <img src={item.imageAdd} alt="" />
                        <div className="tour-header">
                            <h2>{item.price}</h2>
                            <h1>{item.name}</h1>
                            <h3><i className='bx bx-map'></i> {item.location}</h3>
                        </div>
                        <div className="tour-info">
                            <h3><i className="bx bx-user"></i>  {item.people}</h3>
                            <h3><i className='bx bx-time'></i> {item.days} Days</h3>
                        </div>
                    </div>
                    ))}
                </div>                
            </section>
            <Footer/>
        </>
     );
}

export default Tours;