import React, {Component} from "react"
import {Media} from "reactstrap"

export default class Menu extends Component{

    constructor(props){
        super(props)

        this.media = {
            dishes: [
            {   id: 0,
                name: "banku",
                image: "/public/assets/images/android_image_1.jpg",
                category: "mains",
                label: "Hot",
                price: "9.99",
                description: "Aunique combination of Ghanaian corn and cassava doe to make the best carbohydarate based food you ever tasted",
            },
            {   id: 1,
                name: "salad",
                image: "/public/assets/images/android_image_1.jpg",
                category: "mains",
                label: "Hot",
                price: "2.99",
                description: "Aunique combination of Ghanaian corn and cassava doe to make the best carbohydarate based food you ever tasted",
            },
            {   id: 2,
                name: "tuozafi",
                image: "/public/assets/images/android_image_1.jpg",
                category: "mains",
                label: "Hot",
                price: "7.99",
                description: "Aunique combination of Ghanaian corn and cassava doe to make the best carbohydarate based food you ever tasted",
            },
            {   id: 3,
                name: "rice",
                image: "/public/assets/images/android_image_1.jpg",
                category: "mains",
                label: "Hot",
                price: "6.99",
                description: "Aunique combination of Ghanaian corn and cassava doe to make the best carbohydarate based food you ever tasted",
            }


            ]
        } 
            
        
    }

    render(){

        const menu = this.state.dishes.map((dish) =>{
            return(
                <div key = {dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name}/>
                            

                            <Media body className="ml-5">
                                <Media heading>{dish.name}</Media>
                                    <p>{dish.description}</p>

                            </Media>

                        </Media>
                    </Media>
                </div>
            )
        });

        returns(
            <>
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}                        
                    </Media>

                </div>

            </div>
            </>
        )
    }
}