const Countries = {
  "USA": "United States of America",
  "UK": "United Kingdom",
  "CAN": "Canada",
  "JPN": "Japan",
  "GER": "Germany",
  "FRA": "France",
  "CHN": "China",
  "RUS": "Russia",
  "IND": "India",
  "BRA": "Brazil",
  "MEX": "Mexico",
  "AUS": "Australia",
  "AUT": "Austria",
  "BEL": "Belgium",
  "MOR": "Morroco",
  "ESP": "Spain",
  "POR": "Portugal",
  "ITA": "Italy",
  "NLD": "Netherlands",
  "SWE": "Sweden",
  "DNK": "Denmark",
  "FIN": "Finland",
  "SUI": "Switzerland",
  "NOR": "Norway",
  "IRL": "Ireland",
  "VIE": "Vietnam",
  "POL": "Poland",
  "SLO": "Slovakia",
  "GAM": "Gambia",
  "MEA": "Malaysia",
  "TUR": "Turkey",
  "EGY": "Egypt",
  "KOR": "South Korea",
  "JAP": "Japan",
  "THA": "Thailand",
  "NOK": "North Korea"
};
const Output = document.getElementById("Output");
const Button = document.getElementById("Button");

Button.addEventListener("click", () => {
  const countryKeys = Object.keys(Countries);
  const randomIndex = Math.floor(Math.random() * countryKeys.length);
  const randomCountry = Countries[countryKeys[randomIndex]];
  Output.textContent = randomCountry;
});