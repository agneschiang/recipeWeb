import TextField from '@material-ui/core/TextField';
import MediaStreamRecorder from 'msr';
import * as React from "react";




interface IProps {
    recipes: any[],
    selectNewrecipe: any,
    searchByTag: any
}

export default class RecipeList extends React.Component<IProps, {}> {
    
    constructor(props: any) {
        super(props)   
        this.searchByTag = this.searchByTag.bind(this)
    }

	public render() {
		return (
			<div className="container recipe-list-wrapper">
                <div className="row recipe-list-heading">
                    <div className="input-group">
                    <form className="search-content">
                         <div className="search">
                         <TextField
                                id="search-tag-textbox"
                                label="Search Recipes"
                                placeholder="Search Recipes"
                                className= "textfield"
                                margin="normal"
                                color= "white"
                                
                                />
                            
                           <div className="btn btn-outline-secondary search-button" onClick = {this.searchByTag}>Search</div>
                           <div className="btn" onClick={this.searchByVoice}><i className="fa fa-microphone" /></div>
                         </div>
                       </form> 
                        
                        
                    </div>  
                </div>
                <div className="row recipe-list-table">
                    <table className="table table-striped">
                        <tbody>
                            {this.createTable()}
                        </tbody>
                    </table>
                </div>
            </div>
		);
    }

    // Construct table using recipe list
	private createTable() {
        const table:any[] = []
        const recipeList = this.props.recipes
        if (recipeList == null) {
            return table
        }

        for (let i = 0; i < recipeList.length; i++) {
            const children = []
            const recipe = recipeList[i]
            children.push(<td key={"name" + i}>{recipe.title}</td>)
            children.push(<td key={"category" + i}>{recipe.category}</td>)
            children.push(<td key={"dietary" + i}>{recipe.dietary}</td>)
            table.push(<tr key={i+""} id={i+""} onClick= {this.selectRow.bind(this, i)}>{children}</tr>)
        }
        return table
    }
    
    // recipe selection handler to display selected recipe in details component
    private selectRow(index: any) {
        const selectedrecipe = this.props.recipes[index]
        if (selectedrecipe != null) {
            this.props.selectNewrecipe(selectedrecipe)
        }
    }

    // Search recipe by tag
    private searchByTag() {
        const textBox = document.getElementById("search-tag-textbox") as HTMLInputElement
        if (textBox === null) {
            return;
        }
        const tag = textBox.value 
        this.props.searchByTag(tag)  
    }


    private searchByVoice(){
        const mediaConstraints = {
                audio: true
            }
            const onMediaSuccess = (stream: any) => {
                const mediaRecorder = new MediaStreamRecorder(stream);
                mediaRecorder.mimeType = 'audio/wav'; // check this line for audio/wav
                mediaRecorder.ondataavailable = (blob: any) => {
                    // this.postAudio(blob);
                    mediaRecorder.stop()
                }
                mediaRecorder.start(3000);
            }
        
            navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError)
        
            function onMediaError(e: any) {
                console.error('media error', e);
            }
    
    
            // posting audio
            fetch('https://westus.api.cognitive.microsoft.com/sts/v1.0/issueToken', {
                 // this is a .wav audio file    
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer' + 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46bXMuY29nbml0aXZlc2VydmljZXMiLCJleHAiOiIxNTQyNTA1ODIyIiwicmVnaW9uIjoid2VzdHVzIiwic3Vic2NyaXB0aW9uLWlkIjoiMTA3N2M1ODNiMGZjNDFiOGEzYjQ3ZDVhMmQ3Zjg0Y2MiLCJwcm9kdWN0LWlkIjoiU3BlZWNoU2VydmljZXMuRnJlZSIsImNvZ25pdGl2ZS1zZXJ2aWNlcy1lbmRwb2ludCI6Imh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ludGVybmFsL3YxLjAvIiwiYXp1cmUtcmVzb3VyY2UtaWQiOiIiLCJzY29wZSI6InNwZWVjaHNlcnZpY2VzIiwiYXVkIjoidXJuOm1zLnNwZWVjaHNlcnZpY2VzLndlc3R1cyJ9.0YANDystYf8o8pG6qKKZFGtbUk7Rb-KxGohO7aN0JMY' ,
                    'Content-Type': 'audio/wav;codec=audio/pcm; samplerate=16000',
                    'Ocp-Apim-Subscription-Key': '8e7baf4ae7814145a82094fd9e9126c2'
                },    
                method: 'POST'
            }).then((res) => {
                return res.json()
            }).then((res: any) => {
                console.log(res)
            }).catch((error) => {
                console.log("Error", error)
            });
    }
    

    


}