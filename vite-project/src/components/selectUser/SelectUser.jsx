import { useContext } from "react";
import { UserContext } from '../../context/context.user';

function SelectUser({changedUser}) {

    const { userId } = useContext(UserContext);

    const changeUser = (e) => {
        changedUser(e.target.value);
        console.log(e.target.value);
    };

    return (
        <select name='user' id='user' onChange={changeUser} value={userId}>
            <option value='1'>Victor</option>
            <option value='2'>Diana</option>
        </select>
    );
};

export default SelectUser;