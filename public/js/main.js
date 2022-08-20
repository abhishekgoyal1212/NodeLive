
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
            dynamicData.innerHTML = `Hello ${city}`;
            dynamic_data.innerHTML = `How Can i Help You ${city}`;
        }catch{
            error.innerText = `Please Enter Your name Not A Number`;
        }
    }
}
submitbtn.addEventListener('click',getinfo);
anime({
    targets: '.row svg',
    translateY: 10,
    autoplay: true,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });
  
  anime({
    targets: '#zero',
    translateX: 10,
    autoplay: true,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
      rotateY: {value: '+=180', delay: 200},
  });
  
  
  