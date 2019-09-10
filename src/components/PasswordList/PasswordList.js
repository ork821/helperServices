import React from 'react';
import PasswordItem from "../../PasswordItem/PasswordItem";
import {connect} from "react-redux";

const PasswordList = ({passwords}) => {
    return (
        <div className="password_field">
            {
                passwords.map((password, id) => {
                    return <PasswordItem key={id} {...password}/>
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    passwords: state.passwords
})

export default connect(mapStateToProps)(PasswordList);
