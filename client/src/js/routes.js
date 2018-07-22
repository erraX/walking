import Home from './components/Home';
import ServerManagement from './components/ServerManagement';
import ApiManagement from './components/ApiManagement';
import DataManagement from './components/DataManagement';

export default [
    {path: '/home', component: Home},
    {path: '/server', component: ServerManagement},
    {path: '/api', component: ApiManagement},
    {path: '/data', component: DataManagement},
];
