import {Button} from '@material-ui/core/';
import * as React from "react"
import Modal from 'react-responsive-modal';
import Logo from './bot.png';
import RecipeDetail from './components/RecipeDetail'
import RecipeItem from './components/RecipeItem';






interface IState {
	currentrecipe: any,
	recipes: any[],
	open: boolean,
	uploadFileList: any,
	authenticated: boolean,
	refCamera: any,
	showMe: boolean,
}



class App extends React.Component<{}, IState> {
	constructor(props: any) {
        super(props)
        this.state = {
			authenticated: false,
			currentrecipe: {
				"id": 0,
				"title": "",
				"description": "",
				"category": "",
				"subcategory": "",
				"cookTime": "",
				"timeUnit": "",
				"size": "",
				"dietary": "",
				"image": "",
				"link": "",
				"uploaded": "",
				"postName": "",
				"width": "",
				"height": ""
			  },
			recipes: [],
			open: false,
			refCamera: React.createRef(), // This add the camera
			uploadFileList: null,
			showMe:false,
			
		}     	
		this.selectNewrecipe = this.selectNewrecipe.bind(this)
		this.fetchrecipes = this.fetchrecipes.bind(this)
		this.fetchrecipes("")	
		this.handleFileUpload = this.handleFileUpload.bind(this)
		this.uploadrecipe = this.uploadrecipe.bind(this)
		this.authenticate = this.authenticate.bind(this)
		this.openChat = this.openChat.bind(this)
	}

	

	public render() {
		
		const { open } = this.state;
		return (
		<div>
			

			
			<div className="container">
				<div className="row">
				<div className="col-7">
						<RecipeDetail currentrecipe={this.state.currentrecipe} />
					</div>
					<div className="col-5">
					
					<Button className="btn btn-primary btn-action btn-add" onClick={this.onOpenModal}>Add recipe</Button>
						<RecipeItem recipes={this.state.recipes} selectNewrecipe={this.selectNewrecipe} searchByTag={this.fetchrecipes}/>
					</div>
					<div className="chatbot">
				<button>
                    <img className="chat-button" onClick= {this.openChat}src={Logo} height='50'/>    
            	</button>
				{
                                    this.state.showMe?
                                    <div className="Bot">
                                       
                                        <iframe src='https://webchat.botframework.com/embed/FoodBot2018?s=PipjVlbLYx4.cwA.Fls.ct1frWWI39XSDwezGpJF6aEqvw31UIaf7BPJTWZoYJs'  className="bot"/>
                                    </div>
                                    :null
                                        
                            }
				</div>
					
					
				</div>
				
			</div>
			
			<Modal open={open} onClose={this.onCloseModal}>
				<form>
					<div className="form-group">
						<label>recipe Title</label>
						<input type="text" className="form-control" id="recipe-title-input" placeholder="Enter Title" />
						<small className="form-text text-muted">You can edit any recipe later</small>
					</div>
					<div className="form-group">
						<label>Description</label>
						<input type="text" className="form-control" id="recipe-description-input" placeholder="Enter Description" />
						<small className="form-text text-muted">Fill in Description</small>
					</div>
					<div className="form-group">
						<label>Category</label>
						<input type="text" className="form-control" id="recipe-category-input" placeholder="Enter Category" />
						<small className="form-text text-muted">Fill in Category</small>
					</div>
					<div className="form-group">
						<label>SubCategory</label>
						<input type="text" className="form-control" id="recipe-SubCategory-input" placeholder="Enter SubCategory" />
						<small className="form-text text-muted">Fill in SubCategory</small>
					</div>
					<div className="form-group">
						<label>Cooking Time</label>
						<input type="text" className="form-control" id="recipe-cookTime-input" placeholder="Enter Cooking time" />
						<small className="form-text text-muted">Fill in Cooking time</small>
					</div>
					<div className="form-group">
						<label>Unit</label>
						<input type="text" className="form-control" id="recipe-unit-input" placeholder="Enter cooking time unit" />
						<small className="form-text text-muted">min/hr</small>
					</div>
					<div className="form-group">
						<label>Serviceing Size</label>
						<input type="text" className="form-control" id="recipe-size-input" placeholder="Enter serving Size" />
						<small className="form-text text-muted">People</small>
					</div>
					<div className="form-group">
						<label>Dietary requirement</label>
						<input type="text" className="form-control" id="recipe-diet-input" placeholder="Enter dietary restriction" />
						<small className="form-text text-muted">guluten-free/Vegan/diary free</small>
					</div>
			
					<div className="form-group">
						<label>Image</label>
						<input type="file" onChange={this.handleFileUpload} className="form-control-file" id="recipe-image-input" />
					</div>
					<div className="form-group">
						<label>Link</label>
						<input type="text" className="form-control" id="recipe-link-input" placeholder="Put down a link" />
						<small className="form-text text-muted">https:// </small>
					</div>
					<div className="form-group">
						<label>Name</label>
						<input type="text" className="form-control" id="recipe-name-input" placeholder="Enter your name" />
						<small className="form-text text-muted">Name</small>
					</div>

					<button type="button" className="btn" onClick={this.uploadrecipe}>Upload</button>
				</form>
			</Modal>
			
			
		</div>
		);
	}
	public openChat()
                {
                this.setState({
                        showMe:!this.state.showMe
                })
                }
	
	// Modal close
	private onOpenModal = () => {
		this.setState({open: true});
	}

	private onCloseModal = () => {
		this.setState({ open: false });
	};
	
	// Change selected recipe
	private selectNewrecipe(newrecipe: any) {
		this.setState({
			currentrecipe: newrecipe
		})
	}

	private fetchrecipes(tag: any) {
		let url = "https://foodapi2018.azurewebsites.net/api/RecipesItems"
		if (tag !== "") {
			url += "/category?=" + tag
		}
		fetch(url, {
			method: 'GET'
		})
		.then(res => res.json())
		.then(json => {
			let currentrecipe = json[0]
			if (currentrecipe === undefined) {
				currentrecipe = {"id":0, "title":"There is no such recipe","url":"","tags":"try a different category","uploaded":"","width":"0","height":"0"}
			}
			this.setState({
				currentrecipe,
				recipes: json
			})
		});
	}

	private handleFileUpload(fileList: any) {
		this.setState({
			uploadFileList: fileList.target.files
		})

		
	}

	private uploadrecipe() {
		const titleInput = document.getElementById("recipe-title-input") as HTMLInputElement
		const descripInput = document.getElementById("recipe-description-input") as HTMLInputElement
		const catInput = document.getElementById("recipe-category-input") as HTMLInputElement
		const subcateg = document.getElementById("recipe-SubCategory-input") as HTMLInputElement
		const timeinput = document.getElementById("recipe-cookTime-input") as HTMLInputElement
		const unitInput = document.getElementById("recipe-unit-input") as HTMLInputElement
		const sizeInput = document.getElementById("recipe-size-input") as HTMLInputElement
		const dietInput = document.getElementById("recipe-diet-input") as HTMLInputElement
		const linkInput = document.getElementById("recipe-link-input") as HTMLInputElement
		const nameInput = document.getElementById("recipe-name-input") as HTMLInputElement


		const imageFile = this.state.uploadFileList[0]
	
		if (titleInput === null || descripInput === null || imageFile === null || catInput === null || subcateg === null || timeinput === null ||unitInput === null || sizeInput === null ||dietInput === null || linkInput === null || nameInput === null) {
			return;
		}
	
		const title = titleInput.value
		const description = descripInput.value
		const categ = catInput.value 
		const subcategory = subcateg.value
		const time = timeinput.value
		const unit = unitInput.value
		const size = sizeInput.value
		const dietary = dietInput.value
		const link = linkInput.value
		const name = nameInput.value

		const url = "https://foodapi2018.azurewebsites.net/api/RecipesItems/upload"
		
	
		const formData = new FormData()
		formData.append("title", title)
		formData.append("description", description)
		formData.append("category", categ)
		formData.append("subcategory", subcategory)
		formData.append("cookTime", time)
		formData.append("timeUnit", unit)
		formData.append("size", size)
		formData.append("dietary",dietary)
		formData.append("link", link)
		formData.append("postName", name)
		formData.append("image", imageFile)
		
	
		fetch(url, {
			body: formData,
			headers: {'cache-control': 'no-cache'},
			method: 'POST'
		})
		.then((response : any) => {
			if (!response.ok) {
				// Error State
				alert(response.statusText)
			} else {
				location.reload()
			}
		})
	}

	private authenticate(){
		// const screenshot = this.state.refCamera.current.getScreenshot();
	}
	// private searchByVoice(){

    //     const mediaConstraints = {
    //         audio: true
    //     }
    //     const onMediaSuccess = (stream: any) => {
    //         const mediaRecorder = new MediaStreamRecorder(stream);
    //         mediaRecorder.mimeType = 'audio/wav'; // check this line for audio/wav
    //         mediaRecorder.ondataavailable = (blob: any) => {
    //             // this.postAudio(blob);
    //             mediaRecorder.stop()
    //         }
    //         mediaRecorder.start(3000);
    //     }
    
    //     navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError)
    
    //     function onMediaError(e: any) {
    //         console.error('media error', e);
    //     }


    //     // posting audio
    //     fetch('https://westus.api.cognitive.microsoft.com/sts/v1.0/issueToken', {
    //          // this is a .wav audio file    
    //         headers: {
    //             'Accept': 'application/json',
    //             'Authorization': 'Bearer' + 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46bXMuY29nbml0aXZlc2VydmljZXMiLCJleHAiOiIxNTQyNTA1ODIyIiwicmVnaW9uIjoid2VzdHVzIiwic3Vic2NyaXB0aW9uLWlkIjoiMTA3N2M1ODNiMGZjNDFiOGEzYjQ3ZDVhMmQ3Zjg0Y2MiLCJwcm9kdWN0LWlkIjoiU3BlZWNoU2VydmljZXMuRnJlZSIsImNvZ25pdGl2ZS1zZXJ2aWNlcy1lbmRwb2ludCI6Imh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ludGVybmFsL3YxLjAvIiwiYXp1cmUtcmVzb3VyY2UtaWQiOiIiLCJzY29wZSI6InNwZWVjaHNlcnZpY2VzIiwiYXVkIjoidXJuOm1zLnNwZWVjaHNlcnZpY2VzLndlc3R1cyJ9.0YANDystYf8o8pG6qKKZFGtbUk7Rb-KxGohO7aN0JMY' ,
    //             'Content-Type': 'audio/wav;codec=audio/pcm; samplerate=16000',
    //             'Ocp-Apim-Subscription-Key': '8e7baf4ae7814145a82094fd9e9126c2'
    //         },    
    //         method: 'POST'
    //     }).then((res) => {
    //         return res.json()
    //     }).then((res: any) => {
    //         console.log(res)
    //     }).catch((error) => {
    //         console.log("Error", error)
    //     });

    // }


}

export default App;
