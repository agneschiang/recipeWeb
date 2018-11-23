import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import * as React from "react";
import Modal from 'react-responsive-modal';


interface IProps {
    currentrecipe: any
}

interface IState {
    open: boolean
    
}

export default class RecipeDetail extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props)   
        this.state = {
            open: false
            
        }

        this.updaterecipe = this.updaterecipe.bind(this)

    }

	public render() {
        const currentrecipe = this.props.currentrecipe
        const { open } = this.state;
		return (
			<div className="container recipe-wrapper">
                <div className="card" >
                    <img className="responsive" src={currentrecipe.image}/>
                    <div className="card-body">
                        <div className ="topTable">
                            <table className = "left">
                                <th>
                                    <tr>{currentrecipe.title}</tr>
                                    <tr>{currentrecipe.uploaded}</tr>
                                </th>
                            
                                    
                                
                            </table>
                        </div>
                        <div className ="topright">
                        
                        <Paper>
                        <MenuList className="Menutem">
                            <MenuItem onClick={this.downloadrecipe.bind(this, currentrecipe.image)}>Download</MenuItem>
                            <MenuItem onClick={this.onOpenModal}>Edit</MenuItem>
                            <MenuItem onClick={this.deleterecipe.bind(this, currentrecipe.id)}>Delete</MenuItem>
                        </MenuList>
                                </Paper>
                        
                        
                        </div>
                        <div className="rest">
                            <br/>
                            <h5 className="card-title">{currentrecipe.title}</h5>
                            <br/>
                            <h6>Cooking time: {currentrecipe.cookTime} {currentrecipe.timeUnit}</h6>
                            <h6>Serving SIze: {currentrecipe.size} people</h6>
                            <br/>
                            <p className="card-text">{currentrecipe.description}</p>
                            <a href={currentrecipe.link} className="btn btn-primary">Read More</a>
                            
                        </div>
                        

                        
                        
                        
                        
                    </div>
                </div>





                
                
                <Modal open={open} onClose={this.onCloseModal}>
                    <form>
                        <div className="form-group">
                            <label>Recipe Title</label>
                            <input type="text" className="form-control" id="recipe-edit-title-input" placeholder="Enter Title"/>
                            <small className="form-text text-muted">You can edit any recipe later</small>
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <input type="text" className="form-control" id="recipe-edit-tag-input" placeholder="Enter Category"/>
                            <small className="form-text text-muted">Category is used for search</small>
                        </div>
                        <button type="button" className="btn" onClick={this.updaterecipe}>Save</button>
                    </form>
                </Modal>
            </div>
		);
    }

    // Modal Open
    private onOpenModal = () => {
        this.setState({ open: true });
	  };
    
    // Modal Close
    private onCloseModal = () => {
		this.setState({ open: false });
    };
    
    // private methodNotImplemented() {
	// 	alert("Method not implemented")
	// }

    // Open recipe image in new tab
    private downloadrecipe(url: any) {
        
        window.open(url);
    }

    private updaterecipe(){
        const titleInput = document.getElementById("recipe-edit-title-input") as HTMLInputElement
        const tagInput = document.getElementById("recipe-edit-tag-input") as HTMLInputElement
    
        if (titleInput === null || tagInput === null) {
            return;
        }
    
        const currentrecipe = this.props.currentrecipe
        const url = "https://foodapi2018.azurewebsites.net/api/RecipesItems/" + currentrecipe.id
        const updatedTitle = titleInput.value
        const updatedTag = tagInput.value
        fetch(url, {
            body: JSON.stringify({
                
                "height": currentrecipe.height,
                "id": currentrecipe.id,
                "category": updatedTag,
                "title": updatedTitle,
                "uploaded": currentrecipe.uploaded,
                "image": currentrecipe.image,
                "url": currentrecipe.link,
                "width": currentrecipe.width
            }),
            headers: {'cache-control': 'no-cache','Content-Type': 'application/json'},
            method: 'PUT'
        })
        .then((response : any) => {
            if (!response.ok) {
                // Error State
                alert(response.statusText + " " + url)
            } else {
                location.reload()
            }
        })
    }

    private deleterecipe(id: any) {
        const url = "https://foodapi2018.azurewebsites.net/api/RecipesItems/" + id
    
        fetch(url, {
            method: 'DELETE'
        })
        .then((response : any) => {
            if (!response.ok) {
                // Error Response
                alert(response.statusText)
            }
            else {
                location.reload()
            }
        })
    }

    
    
}