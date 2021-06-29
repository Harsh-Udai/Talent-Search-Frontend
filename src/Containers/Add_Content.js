import {connect} from 'react-redux';
import Add from '../Pages/Add_content';

import {setuser,unsetuser,setAnimat} from '../Redux/actions/actions';

const mapstateToProps = state=>({
    main:state
})

const mapDispatchToProps = dispatch =>({
    setuser: data=> dispatch(setuser(data)),
    unsetuser: data=> dispatch(unsetuser(data)),
    setAnimat: data=> dispatch(setAnimat(data))
})

export default connect(mapstateToProps,mapDispatchToProps)(Add);