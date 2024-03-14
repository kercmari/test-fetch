let request = async () => {
    
    let myurl =
      "https://mempool.space/api/v1/prices";
    try {
      let responde = await fetch(myurl);
      let result = await responde.json();
    
    console.log(result);
      const keys = Object.keys(result);
      for (let i = 1; i < keys.length; i++) {
        let  currency = keys[i];
        let  rate = result[currency];

        let template = `
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4"><div class="card"  >
        <div class="card-header p-3 pt-2">
        <div
            class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
            <i class="material-icons opacity-10">savings</i>
        </div>
        <div class="text-end pt-1">
            <p class="text-sm mb-0 text-capitalize">${currency}</p>
            <h4 class="mb-0">${rate}</h4>
        </div>
    </div> </div></div>`;
        let templateHtml = document.getElementById("result");
        templateHtml.innerHTML += template;
      }
    } catch (error) {
      console.log(error);
    }
  };
  document.addEventListener("DOMContentLoaded", function () {
  request();});