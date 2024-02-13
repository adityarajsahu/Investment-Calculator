import React, { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 5000,
        annualInvestment: 10000,
        expectedReturn: 8,
        duration: 15,
    });

    const handleChange = (inputIdentifier, newValue) => {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            };
        });
    };

    return (
        <React.Fragment>
            <Header />
            <UserInput onChange={handleChange} userInput={userInput} />
            <Results input={userInput} />
        </React.Fragment>
    );
}

export default App;
