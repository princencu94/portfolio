import React from 'react';
import './gallery-overview.styles.css';
import Gallery from '../gallery/gallery.component';
import Logo from '../logo/logo.component';
import HeaderNav from '../header-nav/header-nav.component';
import SearchField from '../search-field/search-field.component';

class GalleryOverview extends React.Component {
    constructor() {
        super();
        this.state = {
          photos : [],
          searchField: ''
        }

      }
    
      componentDidMount() {
        fetch('https://api.pexels.com/v1/search?query=woods', {
            "method":'GET',
            "headers" : {
              "Authorization": "563492ad6f917000010000014dbbcc2f90a84262ac4e8ca27e5e9972"
            }
          })
          .then(res => res.json())
          .then(photos => this.setState({photos:photos.photos}));
      }

      handleChange = (e) => {
        this.setState({searchField: e.target.value})
      }

    render() {
        const {photos, searchField} = this.state;
        const filteredPhotos = photos.filter(photo => photo.photographer.toLowerCase().includes(searchField.toLocaleLowerCase()));
        return (
            <div className="gallery-overview">
                <Logo/>
                <HeaderNav/>
                <SearchField placeholder="search here" handleChange={this.handleChange}/>
                <Gallery photos={filteredPhotos}/>
            </div>
        )
    }
    
}

export default GalleryOverview;