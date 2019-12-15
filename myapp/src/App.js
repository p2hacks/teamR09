import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Botun from './Botun';
import {BrowserRouter, Route, Link} from 'react-router-dom';
    
const App = () => {
  const [num, setNum]=React.useState(0);
  const [lists, setLists] = React.useState([]);
  const [title, setTitle] = React.useState("");
    
  

  function handleChange(event) {
    setTitle(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setLists([...lists, {title: title}]);
    setTitle("");
  };
  
  return (
    <div className="App">
      <h2>HAKODATE X'mas CONTEST</h2>
      <div class="normal-box2">
      <p>  函館のクリスマスでもっともおすすめできるものといえば...??  <br></br>  投票して自分のおすすめを世界に発信しよう！  </p>
</div>

<br></br>
   

        <div class="memobox">
<div class="memobox-title">注意</div>
  <h3>一人当たりの投票数に制限はありません。<br></br>選択肢にない項目を追加したい場合は下記のフォームに名称を入力してください！
  </h3>
</div>

<h4>スポット名を入力：</h4>
      <input type="text" name="title" onChange={handleChange} value={title}/>
      


        <button href="#" class="btn-square-pop" onClick={handleSubmit}>
          send
        </button>

        <br></br> 
        <div class="tape-box">
<div class="tape"></div>
<h1>函館クリスマスファンタジー</h1>

<div className="botun">

  <Botun />
  
</div>
</div>


<br></br> 

<div class="tape-box">
<div class="tape"></div>
{lists.map((l)=>(

        <div key={l.title}>
          
          <h1>{l.title}</h1>
          <div className="botun">
            <Botun />
            
      　　</div>
        </div> 
              
        )
         )
        }
       
</div>


      
      
     


  
      

        
    </div>
  );

        
 }
 
 export default App;