const getAndRenderData=async()=>{
    renderLoader();
    const response=await fetch('https://indonesia-covid-19.mathdro.id/api/')
    const result=await response.json();
    const {jumlahKasus,meninggal,perawatan,sembuh}=result;
    const main=document.querySelector('main');
    main.removeChild(main.lastChild);//remove loadingnya

    renderTotal(jumlahKasus);
    renderPositif(perawatan);
    renderRecover(sembuh);
    renderDeath(meninggal);
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

const renderDeath=(meninggal)=>{
    const totalDeathDiv=document.createElement('div');
    totalDeathDiv.setAttribute('id','totalDeathDiv');
    totalDeathDiv.setAttribute('class','overviewItems');

    const totalDeathNum=document.createElement('span');
    totalDeathNum.setAttribute('class','statNum');
    totalDeathNum.innerHTML=meninggal;

    const totalDeathDesc=document.createElement('span');
    totalDeathDesc.setAttribute('class','statDesc');
    totalDeathDesc.innerHTML='Death';

    totalDeathDiv.appendChild(totalDeathNum);
    totalDeathDiv.appendChild(totalDeathDesc);

    document.querySelector('#statContainer').appendChild(totalDeathDiv);
}

const renderTotal=(jumlahKasus)=>{
    const totalCaseDiv=document.createElement('DIV');
    totalCaseDiv.setAttribute('id','totalCaseDiv');
    totalCaseDiv.setAttribute('class','overviewItems');
    
    const totalCaseNum=document.createElement('span');
    totalCaseNum.setAttribute('id','totalCaseNum');
    totalCaseNum.setAttribute('class','statNum');
    totalCaseNum.innerHTML=jumlahKasus
    
    const totalCaseDesc=document.createElement('span');
    totalCaseDesc.setAttribute('class','statDesc');
      totalCaseDesc.setAttribute('id','totalCaseDesc');
    totalCaseDesc.innerHTML='Total Case';

    totalCaseDiv.appendChild(totalCaseNum);
    totalCaseDiv.appendChild(totalCaseDesc);
    document.querySelector('#statContainer').append(totalCaseDiv);
}

const renderPositif=(perawatan)=>{
    const totalPositifDiv=document.createElement('div');
    totalPositifDiv.setAttribute('id','totalPositifDiv');
    totalPositifDiv.setAttribute('class','overviewItems');

    const totalPositifNum=document.createElement('span');
    totalPositifNum.setAttribute('class','statNum');
    totalPositifNum.innerHTML=perawatan;

    const totalPositifDesc=document.createElement('span');
    totalPositifDesc.setAttribute('class','statDesc');
    totalPositifDesc.innerHTML='Positive';

    totalPositifDiv.appendChild(totalPositifNum);
    totalPositifDiv.appendChild(totalPositifDesc);

    document.querySelector('#statContainer').appendChild(totalPositifDiv);
}

const renderRecover=(sembuh)=>{
    const totalRecoverDiv=document.createElement('div');
    totalRecoverDiv.setAttribute('id','totalRecoverDiv');
    totalRecoverDiv.setAttribute('class','overviewItems');

    const totalRecoverNum=document.createElement('span');
    totalRecoverNum.setAttribute('class','statNum');
    totalRecoverNum.innerHTML=sembuh;

    const totalRecoverDesc=document.createElement('span');
    totalRecoverDesc.setAttribute('class','statDesc');
    totalRecoverDesc.innerHTML='Recovered';

    totalRecoverDiv.appendChild(totalRecoverNum);
    totalRecoverDiv.appendChild(totalRecoverDesc);

    document.querySelector('#statContainer').appendChild(totalRecoverDiv);
}
getAndRenderData();