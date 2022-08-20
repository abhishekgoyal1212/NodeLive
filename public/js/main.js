
const submitbtn = document.getElementById("submitbtn");
const cityName = document.getElementById("name");
const error = document.getElementById("blank_name");
const dynamicData = document.getElementById("dynamic");
const getinfo = async(event) => {
    event.preventDefault();
    let city = cityName.value;
    if(city === ""){
        error.innerText = `Please Enter Your name`;
    } else{
        try{
            dynamicData.innerHTML = `${city}`;
        }catch{
            error.innerText = `Please Enter Your name Not A Number`;
        }
    }
}
submitbtn.addEventListener('click',getinfo);