import React from 'react';
import './App.css';

const API_KEY = "b29e31e465e53b2734c6daed40e20c16";
var r;

class App extends React.Component{

  state = {
    rub: undefined,
    eur: undefined,
    usd: undefined,
    byn: undefined,
    uah: undefined,
    btc: undefined
  }

  getCourse = async() =>{
    const api_url = await
    fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}&format=1`);
    var data = await api_url.json();


    this.setState({
      eur: Math.ceil((data.rates.RUB)*100)/100,
      usd: Math.ceil((data.rates.RUB / data.rates.USD)*100)/100,
      byn: Math.ceil((data.rates.RUB / data.rates.BYN)*100)/100,
      uah: Math.ceil((data.rates.RUB / data.rates.UAH)*100)/100,
      btc: Math.ceil((data.rates.RUB / data.rates.BTC)*100)/100,
      rub: 1,
    });
  
  }

  componentDidMount(){
    this.getCourse();
  }

  result = () =>{
    var input = document.getElementById('ll').value;
    var val1;
    var val2;
    var bit = false;
    switch(document.getElementById('v1').value){
      case '1':
        val1 = this.state.eur * input;
        break;
      case '2':
        val1 = this.state.usd * input;
        break;
      case '3':
        val1 = this.state.uah * input;
        break;
      case '4':
        val1 = this.state.byn * input;
        break;
      case '5':
        val1 = this.state.btc * input;
        break;
      case '6':
        val1 = this.state.rub * input;
        break;
    }
    switch(document.getElementById('v2').value){
      case '1':
        val2 = val1 / this.state.eur;
        break;
      case '2':
        val2 = val1 / this.state.usd;
        break;
      case '3':
        val2 = val1 / this.state.uah;
        break;
      case '4':
        val2 = val1 / this.state.byn;
        break;
      case '5':
        val2 = val1 / this.state.btc;
        bit = true;
        break;
      case '6':
        val2 = val1 / this.state.rub;
        break;
    }
    if(!bit){
    input = Math.ceil((val2)*100)/100;
    }
    else input = Math.ceil((val2)*100000)/100000;
    document.getElementById('res').value = input;
  }
  
  render(){
    return(
      <div>
        <div className='conv'>
          <input type="number" placeholder='1' name='qu' id='ll'/>
          <select name="valuta" id='v1'>
            <option value={1}>Евро</option>
            <option value={2}>Доллар</option>
            <option value={3}>Гривны</option>
            <option value={4}>Белорусский рубль</option>
            <option value={5}>Биткоин</option>
            <option value={6}>Рубль</option>
          </select>
          В
          <select name="valuta2" id='v2'>
            <option value={1}>Евро</option>
            <option value={2}>Доллар</option>
            <option value={3}>Гривны</option>
            <option value={4}>Белорусский рубль</option>
            <option value={5}>Биткоин</option>
            <option value={6}>Рубль</option>
          </select>
          <button onClick={this.result}>=</button>
          <input type="number" id='res' readOnly/>
          <form></form>
        </div>
        
       <div className='wrapper'>
        <div className='par'>1 Доллар </div> <div className='per'>{this.state.usd}</div>
        <div className='par'>1 Евро </div><div className='per'>{this.state.eur}</div>
        <div className='par'>1 Белорусский рубль </div><div className='per'> {this.state.byn}</div>
        <div className='par'>1 Украинская гривна </div><div className='per'>  {this.state.uah}</div>
        <div className='par'>1 Биткоин </div><div className='per'>  {this.state.btc}</div>
       </div>
      </div>
    );
  }
}

export default App;
