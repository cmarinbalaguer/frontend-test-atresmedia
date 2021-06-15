import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBreedList } from "../../actions/breedList";
import { fetchBreed } from "../../actions/breed";
import  * as BreedListSelectors from '../../selectors/breedList/breedList';
import  * as BreedSelectors from '../../selectors/breed/breed';
import { BreedSelect } from '../../components/breedSelect/BreedSelect';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { 
      fetchBreedList,
      fetchBreed
    }, dispatch);

const mapStateToProps = (state) => ({
  list: BreedListSelectors.breedListSelector(state),
  dogsImgList: BreedSelectors.breedSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedSelect);