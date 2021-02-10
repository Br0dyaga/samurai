import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {

    let Users = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5', 'Name 6'];

    const listUser = Users.map((user, index) =>
        <NavLink to={'/dialogs/' + index} className={s.dialog} activeClassName={s.active}>{user}</NavLink>
    )

    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                {listUser}
                {/*<NavLink to='/dialogs/1' className={s.dialog} activeClassName={s.active}> Name 1 </NavLink>*/}
                {/*<NavLink to='/dialogs/2' className={s.dialog} activeClassName={s.active}> Name 2 </NavLink>*/}
                {/*<NavLink to='/dialogs/3' className={s.dialog} activeClassName={s.active}> Name 3 </NavLink>*/}
                {/*<NavLink to='/dialogs/4' className={s.dialog} activeClassName={s.active}> Name 4 </NavLink>*/}
                {/*<NavLink to='/dialogs/5' className={s.dialog} activeClassName={s.active}> Name 5 </NavLink>*/}
                {/*<NavLink to='/dialogs/6' className={s.dialog} activeClassName={s.active}> Name 6 </NavLink>*/}
            </div>
            <div className={s.messages}>
                <div className={s.message + ' ' + s.messageFrom}>
                    Message. Some text.... More text
                </div>
                <div className={s.message + ' ' + s.messageFrom}>
                    Message. Some text.... More text
                </div>
                <div className={s.message + ' ' + s.messageTo}>
                    Message. Some text.... More text
                </div>
                <div className={s.message + ' ' + s.messageFrom}>
                    Message. Some text.... More text
                </div>
            </div>
        </div>
    )
}

export default Dialogs;