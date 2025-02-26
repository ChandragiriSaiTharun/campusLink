const ErrorBoundary = () => {
    return (
      <div className="p-6 bg-red-50 text-red-700 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Oops! Something went wrong.</h2>
        <p className="mt-2">Please try again later or contact support.</p>
      </div>
    );
  };

  export default ErrorBoundary;