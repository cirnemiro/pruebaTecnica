import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const MainRouter = () => {
    return (
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    );
}

export default MainRouter;