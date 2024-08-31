import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  const routes = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/view/:id', element: <ViewCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
    { path: '/add', element: <AddCreator /> },
  ]);

  return <div>{routes}</div>;
}

export default App;
