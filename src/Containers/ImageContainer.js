import {connect} from 'react-redux';
import Image from '../Pages/Dash_card';

import {setuser,unsetuser,setAnimat} from '../Redux/actions/actions';

const mapstateToProps = state=>({
    main:state
})

const mapDispatchToProps = dispatch =>({
    setuser: data=> dispatch(setuser(data)),
    unsetuser: data=> dispatch(unsetuser(data)),
    setAnimat: data=> dispatch(setAnimat(data))
})

export default connect(mapstateToProps,mapDispatchToProps)(Image);