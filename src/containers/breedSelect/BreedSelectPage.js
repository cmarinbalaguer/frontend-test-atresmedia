import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBreedList } from "../../actions/breedList";
import { fetchBreed, fetchSubBreed } from "../../actions/breed";
import  * as BreedListSelectors from '../../selectors/breedList/breedList';
import  * as BreedSelectors from '../../selectors/breed/breed';
import { BreedSelect } from '../../components/breedSelect/BreedSelect';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { 
      fetchBreedList,
      fetchBreed,
      fetchSubBreed
    }, dispatch);

const mapStateToProps = (state) => ({
  list: BreedListSelectors.breedListSelector(state),
  isLoading: BreedListSelectors.isLoadingSelector(state),
  errorLoading: BreedListSelectors.errorLoadingSelector(state),
  selectedBreed: BreedListSelectors.selectedBreedSelector(state),
  dogsImgList: BreedSelectors.breedSelector(state),
  isLoadingBreed: BreedSelectors.isLoadingBreedSelector(state),
  errorLoadBreed: BreedSelectors.errorLoadBreedSelector(state),
  subBreeds: BreedSelectors.subBreedsSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedSelect);