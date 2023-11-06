import React, {useState, useEffect} from "react";

const Modal = (props) =>{

const [dessert, setDessert]= useState({})

    useEffect (()=> {
      //to avoid setDessert to be triggered twice
        let isRepetead = true;

        const fetchData = async() =>{ 
          const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.caption}`)
          const json = await data.json()
          
          if (isRepetead) { 
            setDessert (json.meals[0]); 
          } 
        }

        fetchData()
          .catch(console.error)

        //console.log (dessert.strInstructions.split("."))
        return () => isRepetead = false; 

      },[props.caption])
  
     

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{props.caption}</h4>
                </div>
                <div className="modal-body">
                    <p className="ingredient-title">Ingredients:</p>
                    <ul>
                        <li className="ingredient-list">
                        {dessert.strIngredient1 !== null && <li>{dessert.strIngredient1}</li>}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient1}.png`}
                          alt="ingredient"
                          height = "70px"/>
                        </li>
                        <li className="ingredient-list">
                        {dessert.strIngredient2 !== null && <li>{dessert.strIngredient2}</li>}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient2}.png`}
                          alt="ingredient"
                          height = "50px"/>
                        </li>
                        <li className="ingredient-list">
                        {dessert.strIngredient3 !== null && <li>{dessert.strIngredient3}</li>}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient3}.png`}
                          alt="ingredient"
                          height = "50px"/>
                        </li>
                        <li className="ingredient-list">
                        {dessert.strIngredient4 !== null && <li>{dessert.strIngredient4}</li>}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient4}.png`}
                          alt="ingredient"
                          height = "50px"/>
                        </li>
                        <li className="ingredient-list">
                        {(dessert.strIngredient5 !== null && dessert.strIngredient5 !== "") && <li>{dessert.strIngredient5}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient5}.png`}
                          alt="ingredient"
                          height = "50px"/>
                          </li>}
                        </li>
                        <li className="ingredient-list">
                        {(dessert.strIngredient6 !== null && dessert.strIngredient6 !== "") && <li>{dessert.strIngredient6}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient6}.png`}
                          alt="ingredient"
                          height = "50px"/>
                          </li>}
                        </li>
                        <li className="ingredient-list">
                        {(dessert.strIngredient7 !== null && dessert.strIngredient7 !== "") && <li>{dessert.strIngredient7}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient7}.png`}
                          alt="ingredient"
                          height = "50px"/>
                          </li>}
                        </li>
                        <li className="ingredient-list">
                        {(dessert.strIngredient8 !== null && dessert.strIngredient8 !== "") && <li>{dessert.strIngredient8}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient8}.png`}
                          alt="ingredient"
                          height = "50px"/>
                          </li>}
                        </li>
                          <li className="ingredient-list">
                        {(dessert.strIngredient9 !== null && dessert.strIngredient9 !== "") && <li>{dessert.strIngredient9}
                        <img className="ingredient-pic"
                          src= {`https://www.themealdb.com/images/ingredients/${dessert.strIngredient9}.png`}
                          alt="ingredient"
                          height = "50px"/>
                          </li>}
                        </li>
            
                    </ul>
                    <p className="ingredient-title">Cooking instructions:</p>
                    
                    <ol>{ dessert.strInstructions !== undefined &&
                          dessert.strInstructions.split(".")
                            .filter(instruction => instruction !== "")
                            .map (step =>{
                              return(
                                  <li>{step}</li>
                              )
                            })}</ol>
                    
                    <p className="ingredient-title" >Check out the recipe video <a
                        className="video-link"
                        href= {dessert.strYoutube}
                        rel= "noreferrer"
                        target ="_blank"
                    >here</a>
                    </p>
                </div> 
                <div className="modal-footer">
                    <button className="button"
                    onClick = {props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal 