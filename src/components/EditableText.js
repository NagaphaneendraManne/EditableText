import {Component} from 'react'
import './edit.css' // Import the CSS file

class EditableText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: true,
      text: '',
    }
  }

  handleSaveClick = () => {
    this.setState({isEditing: false})
  }

  handleEditClick = () => {
    this.setState({isEditing: true})
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  render() {
    const {isEditing, text} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div>
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={text}
                  onChange={this.handleChange}
                  className="text-input"
                />
                <button
                  onClick={this.handleSaveClick}
                  className="button"
                  type="button"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <p className="text">{text}</p>
                <button
                  onClick={this.handleEditClick}
                  className="button"
                  type="button"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
