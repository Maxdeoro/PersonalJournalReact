import { useContext } from "react";
import { UserContext } from '../../context/context.user';

function SelectUser() {

    const { userId, setUserId } = useContext(UserContext);

    const changeUser = (e) => {
        setUserId(Number(e.target.value));
    };

    return (
        <select name='user' id='user' onChange={changeUser} value={userId}>
            <option value='1'>Victor</option>
            <option value='2'>Diana</option>
        </select>
    );
};

export default SelectUser;