 class Channel extends React.Component{
    onClick(){
        console.log("hello", this.props.name);
    }

     render(){
         return(
             <li onClick={this.onClick.bind(this)}>{ this.props.name }</li>
         )
     }
 }

 ReactDOM.render(<Channel name="Hardware Support"  />,document.getElementById('app'));