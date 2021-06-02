import {connect} from 'react-redux';
import Login from '../Pages/Login';

import {setuser,unsetuser} from '../Redux/actions/actions';

const mapstateToProps = state=>({
    main:state
})

const mapDispatchToProps = dispatch =>({
    setuser: data=> dispatch(setuser(data)),
    unsetuser: data=> dispatch(unsetuser(data))
})

export default connect(mapstateToProps,mapDispatchToProps)(Login);