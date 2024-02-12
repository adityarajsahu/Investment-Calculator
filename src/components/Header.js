const Header = () => {
    return (
        <header id="header">
            <img src={process.env.PUBLIC_URL + "/investment-calculator-logo.png"} alt="Logo Image" />
            <h1>Investment Calculator</h1>
        </header>
    );
};

export default Header;
