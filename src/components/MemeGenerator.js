import React,{Component} from 'react';
class Memes extends Component{
    constructor(){
        super();
        this.state ={
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }
    handleChange(event){
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
          [name] : value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const randNum =Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randMemes = this.state.allMemeImgs[randNum].url
        console.log(randMemes);
        this.setState({
            randomImg : randMemes
        })
    }
    render(){
        
        return(
            <div>
            <form className="meme-form" onSubmit={this.handleSubmit}>
                
                    <input type='text' value={this.state.topText} name='topText' onChange={this.handleChange}/>
                    <input type='text' value={this.state.bottomText} name='bottomText' onChange={this.handleChange}/>
                  
            
                <button>Gen</button>
            </form>
            <div className='meme'>
                <img src={this.state.randomImg}/>
                <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
            </div>
        </div>
        )
    }
}
export default Memes;