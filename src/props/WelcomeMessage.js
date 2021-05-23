


// props is the object that is passed from parent to child component 

//ways of accessing props values

/*
1 ) when we directly pass myProp that means bcz to object destructing 

  export function WelcomeMessage(props) {
      const {myprop1, myprop2} = props;
    return <p>welcome {myprop1} {myprop2} !</p>
  }

  export function WelcomeMessage(props) {
      const {myprop1} = props;
      const {myprop2} = props;
      return <p>welcome {myprop1} {myprop2} !</p>
  }
  
*/

/*
2 ) directly passing destructed variables

  export function WelcomeMessage({myprop1, myprop2}) {
      return <p>welcome {myprop1} {myprop2} !</p>
  }
   export function WelcomeMessage({myprop1}, {myprop2}) {
      return <p>welcome {myprop1} {myprop2} !</p>
  }
  
  */    

  /* 
  
  3) passing values between opening and closing tag

  export function WelcomeMessage({children}) {
    return <p>welcome {children} !</p>
  }
*/

// calling function from parent

export function WelcomeMessage({myprop}) {
return <p>welcome {myprop('John Doe')} !</p>
}
  