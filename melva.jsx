import React, {Component} from "react";
import './style.css';


export default class User extends Component {


    state = { 

        list : [

            { name : 'Melva',
              surname : 'Makweya',
              age : 24,
              Location : 'Mokopane'

            },

            { name : 'nkama',
              surname : 'Ngoetjana',
              age : 30,
              Location : 'Magope'
            },

            {
              name : 'Musa',
              surname : 'Mashangwane',
              age : 17,
              Location : 'Gauteng'

            },

            {
              name : 'Tetelo',
              surname : 'Sethoga',
              age : 22,
              Location : 'Polokwane'

            },

            {
              name : 'Keabetswe',
              surname : 'Langa',
              age : 12,
              Location : 'Mapela'

            }

        ] 
            
        
    }

    

check (age) {
    if (age > 18 ){
        return "- you are old enough to code";
    }else {
        return "- you are not old enough to code"
    }
}
 

    render() {

        return(
            <div className = "cover">

                <ul>
                    {this.state.list.map( element => <li> { element.name +"  "+ element.surname + "  " + element.age  + " " + this.check(element.age)} </li>)}
                </ul>
                
            </div>
        )
        
        }
    

    }
    export default User