let sortedData;
const getAndRenderData=async()=>{
    renderLoader();
    const response=await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi');
    const {data}=await response.json();
    sortedData=data.sort((a,b)=>(a.kasusPosi<b.kasusPosi)?1:-1);
    const main=document.querySelector('main');
    main.removeChild(main.lastChild);//remove loadingnya
    sortedData.forEach((d,i)=>renderProvinces(d,i+1));
    document.querySelector('#searchBar').disabled=false;//enable inputnya sesudah ke fetch datanya

}
document.querySelector('#searchBar').addEventListener('input',(event)=>{
    const filter=event.target.value.toLowerCase();
    const filteredData=sortedData.filter((d)=>d.provinsi.toLowerCase().includes(filter));
    const provinceList=document.querySelector('#provinceList');
    while(provinceList.firstChild){
        provinceList.removeChild(provinceList.firstChild);
    }
    filteredData.forEach((d,i)=>renderProvinces(d,i+1));
})


const renderProvinces=(data,i)=>{
    const{provinsi,kasusMeni,kasusPosi,kasusSemb}=data;
    const province=document.createElement('div');
    province.setAttribute('class','provinceItems');

    const provinceHeader=document.createElement('p');
    provinceHeader.setAttribute('class','provinceHeader');
    const index=document.createElement('span');
    const title=document.createElement('span');
    title.setAttribute('class','provinceTitle');
    index.innerHTML=`#${i}`;
    title.innerHTML=provinsi;
    provinceHeader.appendChild(index);
    provinceHeader.appendChild(title);
    province.appendChild(provinceHeader);

    renderProvinceStat(province,kasusPosi,'Positive');
    renderProvinceStat(province,kasusSemb,'Recovered');
    renderProvinceStat(province,kasusMeni,'Death');

    document.querySelector('#provinceList').appendChild(province);

}

const renderProvinceStat=(province,num,desc)=>{
    const provinceStat=document.createElement('p');
    provinceStat.setAttribute('class','provinceStats');
    const statNum=document.createElement('span');
    statNum.setAttribute('class','statNum');
    const statDesc=document.createElement('span');
    statDesc.setAttribute('class','statDesc');
    statNum.innerHTML=num;
    statDesc.innerHTML=desc;
    provinceStat.appendChild(statNum);
    provinceStat.appendChild(statDesc);
    province.appendChild(provinceStat);

}

const renderLoader=()=>{
    const loadingContainer=document.createElement('div');
    loadingContainer.setAttribute('id','loadingContainer');
    const loadingText=document.createElement('p');
    loadingText.innerHTML='Fetching data please wait..';
    const loading=document.createElement('div');
    loading.setAttribute('id','loading');
    loadingContainer.appendChild(loading);
    loadingContainer.appendChild(loadingText);
    document.querySelector('main').appendChild(loadingContainer);
}

getAndRenderData();
