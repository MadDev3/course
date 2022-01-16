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

  getCourse = async(e) =>{
    e.preventDefault();
    const api_url = await
    fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}&format=1`);
    var data = await api_url.json();
    console.log(data);


    this.setState({
      eur: Math.ceil((data.rates.RUB)*100)/100,
      usd: Math.ceil((data.rates.RUB / data.rates.USD)*100)/100,
      byn: Math.ceil((data.rates.RUB / data.rates.BYN)*100)/100,
      uah: Math.ceil((data.rates.RUB / data.rates.UAH)*100)/100,
      btc: Math.ceil((data.rates.RUB / data.rates.BTC)*100)/100,
    });
  
  }

  componentDidMount(){
    this.getCourse();
  }

  result = () =>{
    let input = document.getElementById('qu').value;
  }
  
  render(){
    return(
      <div>
        <div className='conv'>
          <input type="number" placeholder='1' name='qu' id='ll'/>
          <select name="valuta">
            <option value={1}>Евро</option>
            <option value={2}>Доллар</option>
            <option value={3}>Гривны</option>
            <option value={4}>Белорусский рубль</option>
            <option value={5}>Биткоин</option>
            <option value={6}>Рубль</option>
          </select>
          В
          <select name="valuta2">
            <option value={1}>Евро</option>
            <option value={2}>Доллар</option>
            <option value={3}>Гривны</option>
            <option value={3}>Гривны</option>
            <option value={4}>Белорусский рубль</option>
            <option value={5}>Биткоин</option>
            <option value={6}>Рубль</option>
          </select>
          <button onClick={this.result()}>=</button>
          <input type="number" id='res' readOnly value={this.r}/>
        </div>
        
        
       <p className='par'>1 Доллар = {this.state.usd}</p>
       <p className='par'>1 Евро = {this.state.eur}</p>
       <p className='par'>1 Белорусский рубль = {this.state.byn}</p>
       <p className='par'>1 Украинская гривна = {this.state.uah}</p>
       <p className='par'>1 Биткоин = {this.state.btc}</p>
      </div>
    );
  }
}

export default App;
