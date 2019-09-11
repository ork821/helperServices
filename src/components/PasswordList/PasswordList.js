import React from 'react';
import PasswordItem from "../PasswordItem/PasswordItem";
import {connect} from "react-redux";
import './passwordlist.styles.css'
import {DeletePassword, VisiblePassword} from "../../redux/actions/password.actions";

const PasswordList = ({passwords, VisiblePassword, DeletePassword}) => {
    return (
        <div className="password_field">
            {
                passwords.map((password, id) => {
                    return <PasswordItem
                        key={id}
                        {...password}
                        visiblePass={() => VisiblePassword(password.name)}
                        deletePass={() => DeletePassword(password.name)}
                    />
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    passwords: state.passwords
})

const mapDispatchToProps = (disptch) => ({
    VisiblePassword: name => disptch(VisiblePassword(name)),
    DeletePassword: name => disptch(DeletePassword(name))
})

export default connect(mapStateToProps,mapDispatchToProps)(PasswordList);
