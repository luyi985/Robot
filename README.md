<h2>Setup</h2>
<p>git clone https://github.com/luyi985/Robot.git</p>
<p>npm install</p>
<h2>Command Line</h2>
<h3>npm start</h3>
<p>To generate a data.json file which will guide the robot moving on the table</p>
<p>The command inputs include</p>
<ul>
  <li>
      <b>PLACE x,y,f</b><span> (eg  PLACE 0,0,N)</span><br/>
      <p>To simplify the input<br/>
      "N" reprensents "NORTH",<br/>
      "S" reprensents "SOUTH",<br/>
      "W" represents "WEST"<br/>
      "E" repersents "EAST"</p>
  </li>
  <li>
    <b>MOVE</b>
    <p>Robot moves forward.</p>
  </li>
  <li>
    <b>LEFT</b>
    <p>Robot stands still and turns left.</p>
  </li>
  <li>
    <b>RIGHT</b>
    <p>Robot stands still and turns right.</p>
  </li>
</ul>
<h3>npm run play</h3>
<p>Run the robot simulator</p>
<h3>npm test</h3>
<p>Run the test</p>
<hr/>

<h2>Thinking before coding</h2>
<table>
  <tr>
    <td></td>
    <td>NORTH</td>
    <td></td>
  </tr>
  <tr>
    <td>WEST</td>
    <td>(x,y,f)</td>
    <td>EAST</td>
  </tr>
  <tr>
    <td></td>
    <td>SOUTH</td>
    <td></td>
  </tr>
</table>
<table>
  <tr>
    <td>(0,4)</td>
    <td>(1,4)</td>
    <td>(2,4)</td>
    <td>(3,4)</td>
    <td>(4,4)</td>
  </tr>
  <tr>
    <td>(0,3)</td>
    <td>(1,3)</td>
    <td>(2,3)</td>
    <td>(3,3)</td>
    <td>(4,3)</td>
  </tr>
  <tr>
    <td>(0,2)</td>
    <td>(1,2)</td>
    <td>(2,2)</td>
    <td>(3,2)</td>
    <td>(4,2)</td>
  </tr>
  <tr>
    <td>(0,1)</td>
    <td>(1,1)</td>
    <td>(2,1)</td>
    <td>(3,1)</td>
    <td>(4,1)</td>
  </tr>
  <tr>
    <td>(0,0)I'm Here:)</td>
    <td>(1,0)</td>
    <td>(2,0)</td>
    <td>(3,0)</td>
    <td>(4,0)</td>
  </tr>
</table>
<b>Robot Moving</b>
<ul>
  <li>
    Facing North: x,++y 
  </li>
  <li>
    Facing South: x,--y 
  </li>
  <li>
    Facing West: --x,y 
  </li>
  <li>
    Facing East: ++x,y 
  </li>
</ul>
<b>Robot Left Turn</b>
<ul>
  <li>
    Facing North  =>  f='West'
  </li>
  <li>
    Facing South  =>  f='East'   
  </li>
  <li>
    Facing West   =>  f='South'
  </li>
  <li>
    Facing East: =>   f='North'
  </li>
</ul>
<b>Robot Right Turn</b>
<ul>
  <li>
    Facing North  =>  f='East'
  </li>
  <li>
    Facing South  =>  f='West'   
  </li>
  <li>
    Facing West   =>  f='North'
  </li>
  <li>
    Facing East: =>   f='South'
  </li>
</ul>



[![Greenkeeper badge](https://badges.greenkeeper.io/luyi985/Robot.svg)](https://greenkeeper.io/)