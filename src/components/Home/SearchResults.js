import React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import InfoCard from '../InfoCard/InfoCard';

class SearchResults extends React.Component {
  state = {
    showImage: undefined
  };

  render() {
    const { fetching } = this.props;
    const content = fetching ? this.renderLoading() : this.renderImages();
    return <div>{content}</div>;
  }

  renderLoading() {
    return (
      <div className="galleryContainer">
        <div className="helperText">Loading search results ...</div>
      </div>
    );
  }

  renderImages() {
    const { images, searchText } = this.props;
    const helperText = !searchText ? 'Most recent uploads on flickr' : 'SearchText:  ' + searchText;
    return (
      <div className="galleryContainer">
        <div className="helperText">{helperText}</div>
        <div className="gallery">
          {images.map(image => (
            <a key={image.link} onClick={() => this.setState({ showImage: image })}>
              <img src={image.media.m} />
            </a>
          ))}
        </div>
        <InfoCard
          isOpen={!!this.state.showImage}
          infoDetails={this.state.showImage}
          onClose={() => this.setState({ showImage: undefined })}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ search }) => {
  return {
    fetching: search.fetching,
    images: search.items,
    searchText: search.searchText
  };
};

export default connect(mapStateToProps)(SearchResults);
