import Loader from "./Loader";

const withLoader = (WrappedComponent) => {

  const loadingComponent = (props) => {
    const { loading } = props;

    if (loading == null || loading == false) {
      return <WrappedComponent {...props} />;
    } else {
      return <Loader />;
    }
  };

  loadingComponent.displayName = `withLoader(${WrappedComponent.displayName})`;

  return loadingComponent;
};

export default withLoader;
