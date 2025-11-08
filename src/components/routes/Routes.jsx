import Login from "../pages/Login";
import Gallery from "../pages/Gallery";
import Photos from "../pages/Photos";
import Dashboard from "../pages/admin/Dashboard";
import Collection from "../pages/Collection";
import GalleryList from "../pages/admin/gallery/GalleryList";
import CreateGallery from "../pages/admin/gallery/CreateGallery";
import EditGallery from "../pages/admin/gallery/EditGallery";
import CollectionList from "../pages/admin/collection/CollectionList";
import CreateCollection from "../pages/admin/collection/CreateCollection";
import EditCollection from "../pages/admin/collection/EditCollection";
import Profile from "../pages/profile/Profile";
import PhotosList from "../pages/admin/photos/PhotosList";
import CreatePhotos from "../pages/admin/photos/CreatePhotos";
import EditPhotos from "../pages/admin/photos/EditPhotos";
import ViewPhoto from "../pages/admin/photos/ViewPhoto";
import ViewGallery from "../pages/admin/gallery/ViewGallery";
import ViewCollection from "../pages/admin/collection/ViewCollection";


export const routes = [
    {
        path: 'login',
        element: <Login />,
    },
    // Web APP Route
    {
        path: 'collection',
        element: <Collection />,
    },

    {
        path: 'gallery',
        element: <Gallery />
    },
    {
        path: 'photos/:id',
        element: <Photos />
    },
]

export const adminRoute = [
    {
        path: 'dashboard',
        element: <Dashboard />
    },
    {
        path: '/admin/profile',
        element: <Profile />
    },
    {
        path: '/admin/gallery',
        element: <GalleryList />
    },
    {
        path: '/admin/gallery/create',
        element: <CreateGallery />
    },
    {
        path: '/admin/gallery/edit',
        element: <EditGallery />
    },
    {
        path: '/admin/gallery/view',
        element: <ViewGallery />
    },
    {
        path: '/admin/collection',
        element: <CollectionList />
    },
    {
        path: '/admin/collection/create',
        element: <CreateCollection />
    },
    {
        path: '/admin/collection/edit',
        element: <EditCollection />
    },
    {
        path: '/admin/collection/view',
        element: <ViewCollection />
    },
    {
        path: '/admin/photos',
        element: <PhotosList />
    },
    {
        path: '/admin/photos/create',
        element: <CreatePhotos />
    },
    {
        path: '/admin/photos/edit',
        element: <EditPhotos />
    },
    {
        path: '/admin/photos/view',
        element: <ViewPhoto />
    }
]