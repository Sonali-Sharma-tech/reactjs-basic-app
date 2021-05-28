


// props stands for properties is the object that is passed from parent to child component 

//ways of accessing props values

/*
1 ) when we directly pass myProp that means bcz to object destructing 

  export function ParentToChild(props) {
      const {myprop1, myprop2} = props;
    return <p>welcome {myprop1} {myprop2} !</p>
  }

  export function ParentToChild(props) {
      const {myprop1} = props;
      const {myprop2} = props;
      return <p>welcome {myprop1} {myprop2} !</p>
  }
  
*/

/*
2 ) directly passing destructed variables

  export function ParentToChild({myprop1, myprop2}) {
      return <p>welcome {myprop1} {myprop2} !</p>
  }
   export function ParentToChild({myprop1}, {myprop2}) {
      return <p>welcome {myprop1} {myprop2} !</p>
  }
  
  */    

  /* 
  
  3) passing values between opening and closing tag

  export function ParentToChild({children}) {
    return <p>welcome {children} !</p>
  }
*/

// calling function from parent

export function ParentToChild({myprop}) {
return <p>welcome {myprop('John Doe')} !</p>
}
  