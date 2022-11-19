import './App.css';
import React, {useState, useEffect} from 'react';
import ExpandText from './ExpandText';
import Media from './Media';
import Button from './Button';

function App() {
  const [plusPress, setPlusPress] = useState(false);
  const [minPress, setMinPress] = useState(false);
  const [numPortions, setNumPortions] = useState(2);
  // 0: 1 whole egg, 1: 1 yolk egg, 2: 2 Tbsp white sugar, 3: 4 Tbsp butter, 4: 1 Tsp butter, 5: 0.333 cup chocolate, 6: 2 Tbsp flour
  
  const initial_portion_size = [1, 1, 2, 4, 1, 0.333, 2];
  const [actualPortion, setActualPortion] = useState(initial_portion_size);
  
  useEffect(()=>{
    setNumPortions(numPortions+1);
  }, [plusPress]);
  useEffect(()=> {
    if(numPortions <= 1) setNumPortions(1);
    else setNumPortions(numPortions-1);
  }, [minPress]);

  useEffect(() => {
    var copy = initial_portion_size;
    for(var i = 0; i < initial_portion_size.length; i++) {
      copy[i] = copy[i] * numPortions;
      copy[i] = copy[i].toFixed(2);
    }
    setActualPortion(copy);
  }, [numPortions]);


  return (
    <div>
      <div class="navbar">
        <ul class="ul-top">
          <li><a class="li-top" href="#">Home</a></li>
          <li><a class="li-top" href="#">Recipes</a></li>
          <li><a class="li-top" href="#">Surprise Me~</a></li>
          <li><a class="li-top" href="#">About</a></li>
        </ul>
      </div>
      <Media source={"https://lh5.googleusercontent.com/_OaYG005JPDs/TVbgHYZt4zI/AAAAAAAACsU/s0rzmsFC6A0/s640/Molten%20Cake.jpg"} alt={"Lava Cake"}/>
      <h1>CHOCOLATE LAVA CAKE</h1>
      <h1>Ingredients</h1>
      <ul>
        <li>
          <div>{actualPortion[0] + " whole egg"}</div>
          <div>{actualPortion[1] + " yolk egg"}</div>
          <div>{actualPortion[2] + " tbsp white sugar"}</div>
          <div>{actualPortion[3] + " tbsp butter"}</div>
          <div>{actualPortion[4] + " tsp butter"}</div>
          <div>{actualPortion[5] + " cup chocolate"}</div>
          <div>{actualPortion[6] + " tbsp flour"}</div>
        </li>
        
      </ul>
      <h1>Number of Portions: {numPortions}</h1>
      <div class="portions">
        <Button label="+" pressed={plusPress} setPressed={setPlusPress}/>
        <Button label="-" pressed={minPress} setPressed={setMinPress}/>
      </div>
      
      <h1>Instructions</h1>
          <ExpandText 
          head="1. Preparing the Ramekins" 
          body={"Divide " + actualPortion[4] + " tsp of butter between two four-inch (8 oz.) ramekins. \
            Using your fingers, smear the butter all over the inside surface of \
            the ramekins until they are coated. " + (actualPortion[6] / 2) + "Tbsp of flour inside one ramekin \
            and roll it around until the entire inside is dusted with flour. Pour \
            the excess flour into the second ramekin and dust in the same manner. \
            Discard the excess flour from the second ramekin."}/>

          <ExpandText 
          head="2. Making the Batter" 
          body="Preheat the oven to 450 degrees. In a small bowl combine the egg, 
          egg yolk and white sugar. Using a mixer, whip the mixture until it is 
          aerated and a light yellow color (about 2 minutes)."/>

          <ExpandText 
          head="3. Making the 'Lava'" 
          body="In a small microwave safe bowl, combine the chocolate and butter. 
          Microwave for 15 second intervals, stirring well between each interval. 
          The chocolate will melt further as you stir between heating so stir well. 
          My chocolate took 3, 15 second intervals (45 seconds total) to melt completely."/>

          <ExpandText 
          head="4. Mixing everything together!" 
          body={"Stir the remaining " + (actualPortion[6] / 2) + " Tbsp of flour and the melted butter/chocolate mixture \
          into the whipped eggs and sugar. You can use the mixer again if desired but I just \
          stirred really well with a fork."}/>

          <ExpandText 
          head="5. Baking" 
          body="Divide the cake batter between the two ramekins. Place the ramekins on a 
          baking sheet and place in the oven. Cook for 8-10 minutes. Keep a close eye on 
          the cakes, you want to remove them from the oven when the edges are set but the 
          centers are still soft and jiggly."/>
    </div>
  );
}

export default App;
