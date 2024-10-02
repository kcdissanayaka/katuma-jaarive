/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f8ff;
}

header {
    background-color: #004466;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    height: 50px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;
}

.nav-links li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

.search-bar {
    display: flex;
}

.search-bar input {
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
}

.search-bar button {
    padding: 0.5rem;
    background-color: #005577;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-left: 0.5rem;
    border-radius: 5px;
}

.hero {
    padding: 2rem;
    text-align: center;
    background-color: #e0f7fa;
}

.background-animation {
    height: 200px;
    background-image: url('assets/images/water-animation.gif'); /* Use an animated water GIF here */
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 2rem;
}

.parameter {
    margin: 1rem 0;
}

.expand {
    margin-top: 1rem;
}

#more-info.hidden {
    display: none;
}

.analytics {
    padding: 2rem;
}

.charts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.chart {
    background-color: #fff;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

footer {
    background-color: #004466;
    color: #fff;
    text-align: center;
    padding: 1rem;
}
