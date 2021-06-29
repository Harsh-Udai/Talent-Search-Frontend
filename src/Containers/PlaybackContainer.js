import {connect} from 'react-redux';
import Play from '../Pages/VideoPlay';

import {setuser,unsetuser,setAnimat} from '../Redux/actions/actions';

const mapstateToProps = state=>({
    main:state
})

const mapDispatchToProps = dispatch =>({
    setuser: data=> dispatch(setuser(data)),
    unsetuser: data=> dispatch(unsetuser(data)),
    setAnimat: data=> dispatch(setAnimat(data))
})

export default connect(mapstateToProps,mapDispatchToProps)(Play);