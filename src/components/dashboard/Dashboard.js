import {useSelector} from 'react-redux';
import "firebase/auth";

const Dashboard = () => {
  const name = useSelector(state => state.user.name);

  return(
    <div>
      <h1 style={{textAlign:'center'}}>
        {name}
      </h1>
    </div>
  );
};

export default Dashboard;
