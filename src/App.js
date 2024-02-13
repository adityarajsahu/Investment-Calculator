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

    const inputIsValid = userInput.duration > 0;

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
            {!inputIsValid && <p className="center">Please enter valid input data.</p>}
            {inputIsValid && <Results input={userInput} />}
        </React.Fragment>
    );
}

export default App;
